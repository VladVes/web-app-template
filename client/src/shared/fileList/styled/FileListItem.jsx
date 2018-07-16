import styled from 'react-emotion';

const FileListItemWraper = styled.div`
  display: inline-block;
  position: relative;
  padding: 5px;
  margin: 5px;
  border: 1px solid black;
`;

const FileListItemImage = styled.img`
  height: ${props => props.height};
`;

export { FileListItemWraper, FileListItemImage };
