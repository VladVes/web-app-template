import React, { PureComponent } from 'react';
import Dropzone from 'react-dropzone';
import PropTypes from 'prop-types';
import {
  ImgWrapper,
  RemoveButton,
  RemoveIcon,
  UploadPlace,
  UploadText,
} from './styled/FilePicker';

const FileProp = PropTypes.shape({
  lastModified: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
});

export default class DropZone extends PureComponent {
  static propTypes = {
    maxImageSize: PropTypes.number,
    accept: PropTypes.string,
    multiple: PropTypes.bool,
    value: PropTypes.oneOfType([FileProp, PropTypes.arrayOf(FileProp), PropTypes.shape({})]),
    isRemovable: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    value: null,
    maxImageSize: 5242880, // 5 Mb
    accept: 'image/jpeg, image/png, image/gif',
    multiple: true,
    isRemovable: true,
  };

  // eslint-disable-next-line no-unused-vars
  onDrop = (filesToUpload, e) => {
    const { multiple } = this.props;
    this.props.onChange(multiple ? filesToUpload : filesToUpload[0]);
  };

  removeFile = index => (e) => {
    e.preventDefault();
    e.stopPropagation(); // prevent "pick file" event
    if (!this.props.multiple) return this.props.onChange(null);
    const arrayCopy = [...this.props.value];
    arrayCopy.splice(index, 1);
    return this.props.onChange(arrayCopy);
  };

  renderFile = (file, index) => {
    const { isRemovable } = this.props;
    return (
      <div key={index}>
        {
    !file || !file.preview
      ?
        <UploadPlace>
          <UploadText>Drop files here</UploadText>
        </UploadPlace>
      :
        <ImgWrapper>
          <img src={file.preview} alt="drop-img" />
          {
          isRemovable &&
          <RemoveButton onClick={this.removeFile(index)}>
            <RemoveIcon >delete</RemoveIcon>
          </RemoveButton>
        }
        </ImgWrapper>
  }
      </div>
    );
  };

  renderFiles = () => {
    const { multiple, value } = this.props;
    if (!multiple || !value || !value.length) return this.renderFile(value, 0);
    return value.map((file, index) => this.renderFile(file, index));
  };

  render() {
    const {
      value, maxImageSize, accept, multiple,
    } = this.props;

    return (
      <div>
        <Dropzone
          accept={accept}
          maxSize={maxImageSize}
          name={value && value.name}
          multiple={multiple}
          onDrop={this.onDrop}
        />
        {this.renderFiles()}
      </div>
    );
  }
}
