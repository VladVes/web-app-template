import styled from 'react-emotion';
import { darken } from 'polished';

const primaryButtonColor = '#FF0000';
const size = 24;

const CloseModalButton = styled.button`
  width: ${size}px;
  height: ${size}px;
  position: absolute;
  right: ${-size / 2}px;
  top: ${-size / 2}px;
  border: none;
  border-radius: ${size / 2}px;
  background-color: ${primaryButtonColor};
  
  &:not([disabled]) {
    cursor: pointer;
  }
  &:hover, &:active, &:focus {
    background-color: ${darken(0.1, primaryButtonColor)};
  }
  
  &:before{
    content: '×';
    display: block;
    margin: auto;
    font-size: 18px;
    font-weight: bold;
    color: white;
  }
  
`;

export default CloseModalButton;
