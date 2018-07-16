import styled from 'react-emotion';

const FileListItemWraper = styled.div`
  border: 1px solid black;
  display: inline-block; 
`;

const FileListItemImage = styled.img`
  height: ${(props) => {
    console.log('IMG PROPS', props);
    return props.height;
  }};
`;

export { FileListItemWraper, FileListItemImage };
