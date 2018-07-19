import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ServerFile } from 'Shared/prop-types/FormProps';
import { RawFileList } from 'Shared/fileList';

class FileInput extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(ServerFile),
    ]).isRequired,
    id: PropTypes.string.isRequired,
    preview: PropTypes.bool,
    invalid: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    preview: false,
  };

  handleChangeInput = (e) => {
    const newFiles = Object.values(e.target.files);
    this.updateValueFiles(newFiles);
  };

  handleRemoveItem = (e, i) => {
    e.preventDefault();
    const { onChange, value } = this.props;

    const files = [...value];
    files.splice(i, 1);

    onChange(files);
  };

  updateValueFiles(newFiles) {
    const { onChange, value } = this.props;

    let files = value ? [...value] : [];
    files = files.concat(newFiles);

    onChange(files);
  }

  renderFileNames() {
    const files = this.props.value || [];

    return files.length ? files.map(file => file.name || file).join(', ') : 'Not selected';
  }

  render() {
    const {
      value, id, preview, invalid, ...otherProps
    } = this.props;

    return (
      <div>
        {preview && <RawFileList files={value || []} handleItemRemove={this.handleRemoveItem} />}
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
