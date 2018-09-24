import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FormProps } from 'Shared/prop-types';

const extractUrlFromFile = file => new Promise((resolve) => {
  const reader = new FileReader();

  reader.onload = e => resolve(e.target.result);
  reader.readAsDataURL(file);
});

const withRawFiles = WrappedComponent => class WithRawFiles extends Component {
  static propTypes = {
    files: PropTypes.arrayOf(PropTypes.oneOfType([
      FormProps.ServerFile,
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

  parseFile(prevFiles, file, i) {
    const id = file._id || file.name + file.size + file.lastModified;
    const prevFile = prevFiles.find(fileI => fileI._id === id);
    if (prevFile) return prevFile;

    if (file instanceof File) {
      extractUrlFromFile(file).then(url => this.updateFileUrl(url, i));

      return {
        id,
        url: '',
        title: file.name,
        uploaded: false,
      };
    }
    return {
      id,
      url: `uploads/${file._id}`,
      title: file.name,
      uploaded: true,
    };
  }

  updateStateFiles(props) {
    const { files: prevFiles } = this.state;
    const files = props.files.map((file, i) => this.parseFile(prevFiles, file, i));

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
