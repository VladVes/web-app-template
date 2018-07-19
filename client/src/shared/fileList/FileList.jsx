import React from 'react';
import PropTypes from 'prop-types';

const FileList = ({ files, itemComponent: Item, handleItemRemove }) => (
  <div>
    {files.map((file, i) =>
      <Item key={file.id} file={file} onRemove={handleItemRemove ? e => handleItemRemove(e, i) : null} />)
    }
  </div>
);

FileList.propTypes = {
  files: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string,
    title: PropTypes.string,
  })),
  itemComponent: PropTypes.func.isRequired,
  handleItemRemove: PropTypes.func,
};

FileList.defaultProps = {
  handleItemRemove: null,
  files: [],
};

export default FileList;
