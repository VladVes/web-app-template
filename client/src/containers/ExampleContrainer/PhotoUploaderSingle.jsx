import React from 'react';
import Gallery from 'react-fine-uploader';
import 'react-fine-uploader/gallery/gallery.css';
import uploader from './uploader';

const PhotoUploaderSingle = () => (
  <Gallery
    fileInput-children="Select files"
    uploader={uploader}
  />
);

export default PhotoUploaderSingle;
