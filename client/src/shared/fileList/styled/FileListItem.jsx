import styled from 'react-emotion';

const FileListItemWraper = styled.div`
  display: inline-block;
  position: relative;
  padding: 5px;
  margin: 5px;
  border: 1px solid ${({ uploaded }) => (uploaded ? 'green' : 'red')};
`;

const FileListItemImage = styled.img`
  height: ${({ height }) => height};
`;

export { FileListItemWraper, FileListItemImage };
