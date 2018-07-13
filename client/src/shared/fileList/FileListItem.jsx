import React from 'react';
import PropTypes from 'prop-types';

const FileListItem = ({ file: { url, title }, onRemove }) => (
  <div key={title} style={{ border: '1px solid black', height: '100px', display: 'inline-block' }}>
    {onRemove &&
      <button>×</button>
    }
    <img alt={title} src={url} style={{ height: '100px' }} />
    <div>{title}</div>
  </div>
);

FileListItem.propTypes = {
  file: PropTypes.shape({
    url: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  onRemove: PropTypes.func,
};

FileListItem.defaultProps = {
  onRemove: null,
}

export default FileListItem;
