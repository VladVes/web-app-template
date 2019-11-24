import React, { Component } from 'react';
import PropTypes from 'prop-types';
import api from 'Utils/api/fileApi';
import { LoadIcon } from '../styled/icons';

class FileInput extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.shape({
        _id: PropTypes.string,
        name: PropTypes.string,
      }),
      PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string,
        name: PropTypes.string,
      })),
    ]).isRequired,
    id: PropTypes.string.isRequired,
    preview: PropTypes.bool,
    invalid: PropTypes.bool.isRequired,
    multiple: PropTypes.bool,
  };

  static defaultProps = {
    preview: false,
    multiple: false,
  };

  handleChangeInput = (e) => {
    const newFiles = Object.values(e.target.files);
    this.updateValueFiles(newFiles);
  };

  async updateValueFiles(newFiles) {
    // todo: refactor working with multiple
    const { onChange, value, multiple } = this.props;

    let files = value ? [...value] : [];
    const formData = new FormData();

    Object.values(newFiles).forEach((file) => {
      formData.append('uploadfiles[]', file);
    });

    const response = await api.setFiles(formData);
    const uploadedFiles = response.data;

    if (!multiple) {
      return onChange(uploadedFiles[0]);
    }

    files = files.concat(uploadedFiles);
    return onChange(files);
  }

  render() {
    const {
      value, id, preview, invalid, ...otherProps
    } = this.props;

    return (
      <div>
        <label htmlFor={id} data-preview={value && preview}>
          {preview && value && <img alt="Loading..." src={`/uploads/${value._id}`} />}
          {(!preview || !value)
          && (
          <div>
            <LoadIcon />
          </div>
          )
          }
          <input
            {...otherProps}
            type="file"
            id={id}
            onChange={this.handleChangeInput}
            value=""
            accept=".jpg, .jpeg, .png, .gif"
            hidden
          />
        </label>
      </div>
    );
  }
}

export default FileInput;
