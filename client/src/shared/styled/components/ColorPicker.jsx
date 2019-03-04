import styled from 'react-emotion';
import { AccentColor, LabelColor, MainTextColor } from '../styles';

export const ColorPickerWrapper = styled.div`
  padding: 8px 16px;
`;

export const TopSection = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

export const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SaturationWrapper = styled.div`
  position: relative;
  width: 168px;
  height: 168px;
  margin-right: 8px;
  
  > div,
  > div > div,
  > div > div > div:first-child {
    border-radius: 2px;
  }
`;

export const HueWrapper = styled.div`
  position: relative;
  height: 168px;
  width: 24px;
  margin-left: 8px;
  
  > div > div {
    border-radius: 2px;
  }
`;

export const InputCaption = styled.div`
  font-size: 12px;
  line-height: 17px;
  color: ${LabelColor};
  font-weight: normal;
  text-transform: none;
`;

export const EditableInputWrapper = styled.div`

  input {
    background-color: transparent;
    height: 40px;
    width: 96px;
    border: 2px solid ${MainTextColor};
    border-radius: 4px;
    color: white !important;
    font-size: 14px;
    line-height: 25px;
    padding: 0 16px;
    
    &:active,
    &:focus {
      box-shadow: none;
      outline: none;
      border: 2px solid ${AccentColor};
    }
  }
`;
