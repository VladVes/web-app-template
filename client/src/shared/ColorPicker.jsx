import React from 'react';
import PropTypes from 'prop-types';
import { CustomPicker } from 'react-color';
import {
  Saturation,
  Hue,
  EditableInput,
} from 'react-color/lib/components/common';
import {
  ColorPickerWrapper,
  TopSection,
  BottomSection,
  SaturationWrapper,
  HueWrapper,
  InputCaption,
  EditableInputWrapper,
} from './styled/components/ColorPicker';

const ColorPicker = ({
  onChange, hsl, hsv, hex,
}) => (
  <ColorPickerWrapper>
    <TopSection>
      <SaturationWrapper>
        <Saturation
          onChange={onChange}
          hsl={hsl}
          hsv={hsv}
        />
      </SaturationWrapper>
      <HueWrapper>
        <Hue
          hsl={hsl}
          onChange={onChange}
          direction="vertical"
        />
      </HueWrapper>
    </TopSection>
    <BottomSection>
      <InputCaption>
        HEX Color Code
      </InputCaption>
      <EditableInputWrapper>
        <EditableInput
          value={hex}
          onChange={onChange}
        />
      </EditableInputWrapper>
    </BottomSection>
  </ColorPickerWrapper>
);

ColorPicker.propTypes = {
  onChange: PropTypes.func.isRequired,
  hex: PropTypes.string,
  hsv: PropTypes.shape(),
  hsl: PropTypes.shape(),
};

ColorPicker.defaultProps = {
  hex: '#ffffff',
  hsv: null,
  hsl: null,
};

export default CustomPicker(ColorPicker);
