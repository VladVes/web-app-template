import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FileProps from 'Shared/props';
import { RawFileList } from 'Shared/fileList';

class FileInput extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([
      // eslint-disable-next-line no-consoles
      PropTypes.string, // redux-form bug - is not set init value or set it to null, component get ''
      PropTypes.arrayOf(PropTypes.oneOfType([
        PropTypes.string,
        FileProps,
      ])),
    ]),
    id: PropTypes.string.isRequired,
    preview: PropTypes.bool,
  };

  static defaultProps = {
    value: null,
    preview: false,
  };

  handleChangeInput = (e) => {
    const newFiles = Object.values(e.target.files);
    this.updateValueFiles(newFiles);
  };

  handleRemoveItem = (i) => {
    const { onChange, value } = this.props;

    const files = [...value];
    files.splice(i, 1);

    onChange(files);
  };

  updateValueFiles(newFiles) {
    const { onChange, value } = this.props;

    const newFileNames = newFiles.map(file => file.name);
    console.log(newFileNames);

    let files = value ? [...value] : [];
    files = files.filter(file => !newFileNames.includes(file.name || file.split('/').pop()));
    files = files.concat(newFiles);

    onChange(files);
  }

  renderFileNames() {
    const files = this.props.value || [];

    return files.length ? files.map(file => file.name || file).join(', ') : 'Not selected';
  }

  render() {
    const {
      value, id, preview, ...otherProps
    } = this.props;

    return (
      <div>
        {preview && <RawFileList files={value} onItemRemove={this.handleRemoveItem} />}
        <label htmlFor={id} className="btn btn-primary">
          Browses
          <input
            {...otherProps}
            type="file"
            id={id}
            onChange={this.handleChangeInput}
            value=""
            hidden
          />
        </label>
        {!preview && this.renderFileNames()}
      </div>
    );
  }
}

export default FileInput;
