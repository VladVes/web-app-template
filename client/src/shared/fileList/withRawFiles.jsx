import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MD5 from 'md5.js';

const extractUrlFromFile = file => new Promise((resolve) => {
  const reader = new FileReader();

  reader.onload = e => resolve(e.target.result);
  reader.readAsDataURL(file);
});

const withRawFiles = WrappedComponent => class WithRawFiles extends Component {
  static propTypes = {
    files: PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        url: PropTypes.string,
        title: PropTypes.string,
      }),
    ])).isRequired,
  };

  state = { files: [] };

  componentDidMount() {
    this.updateStateFiles(this.props);
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.updateStateFiles(this.props);
    }
  }

  static getFileHash(file) {
    let salt = file;
    if (file instanceof File) {
      salt = file.name + file.size + file.lastModified;
    }
    return new MD5().update(salt).digest('hex');
  }

  updateStateFiles(props) {
    const { files: prevFiles } = this.state;
    const files = props.files.map((file, i) => {
      const hash = this.constructor.getFileHash(file);
      const prevFile = prevFiles.find(fileI => fileI.hash === hash);
      if (prevFile) return prevFile;

      if (file instanceof File) {
        extractUrlFromFile(file).then(url => this.updateFileUrl(url, i));

        return {
          url: '',
          title: file.name,
          hash,
        };
      }
      if (typeof file === 'string') {
        return {
          url: file,
          title: file.split('/').pop(),
          hash,
        };
      }
      return file;
    });

    this.setState({ files });
  }

  updateFileUrl(url, i) {
    const { files } = this.state;

    const nextFiles = [...files];
    nextFiles[i] = { ...files[i], url };
    this.setState({ files: nextFiles });
  }

  render() {
    const { files: propsFiles, ...props } = this.props;
    const { files } = this.state;

    return <WrappedComponent files={files} {...props} />;
  }
};

export default withRawFiles;
