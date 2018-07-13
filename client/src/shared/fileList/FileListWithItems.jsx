import React from 'react';
import FileList from './FileList';

const FileListWithItems = FileListItem => ({ ...props }) => <FileList itemComponent={FileListItem} {...props} />;

export default FileListWithItems;
