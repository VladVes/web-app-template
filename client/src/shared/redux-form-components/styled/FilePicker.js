import styled from 'react-emotion';

export const UploadPlace = styled('div')`
  display: inline-flex;
  border: 1px solid #dddddd;
  cursor: pointer;
  width: ${props => props.width};
  height: ${props => props.height};
`;

export const UploadText = styled('div')`
  display: block;
  text-align: center;
  font-family: Roboto;
  font-size: 13px;
  color: #999999;
  margin: auto;
  width: 30%;
  
  .lnr-upload {
    margin-bottom: 5px;
  }
`;

export const ImgWrapper = styled('div')`
  display: inline-flex;
  position: relative;
`;

export const RemoveButton = styled('div')`
  right: 0;
  position: absolute;
  margin-right: 15px;
  margin-top: 15px;
  width: 30px;
  height: 25px;
  background-color: white;
  opacity: 0.65;
  border-radius: 3px;
  display: flex;
  cursor: pointer;
  
  &:hover {
    opacity: 0.8;
  }
`;

export const RemoveIcon = styled('i')`
  margin: auto;
  font-size: 16px;
  color: #999999;
`;
