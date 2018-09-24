/* eslint-disable no-unused-vars */
import React, { PureComponent } from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import { FormProps } from 'PropTypes';
import { Form, Button } from 'reactstrap';
import {
  CustomField as Field,
  Captcha,
  Select,
  DatePicker,
  FileInput,
} from 'Shared/redux-form-components';
import Image from 'Shared/Image';

class ComponentsForm extends PureComponent {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    selectOptions: FormProps.SelectOptions.isRequired,
  };

  renderImages = ({ value: images }) => {
    if (!images) return null;
    return images.map((image, index) => (
      <div>
        <Image image={image} key={`image_${image._id}`} index={index} />
      </div>
    ));
  };

  render() {
    const { handleSubmit, onSubmit, selectOptions } = this.props;

    return (
      <Form onSubmit={handleSubmit(onSubmit)}>
        <strong>Form with custom components</strong>
        <Field
          id="Select"
          name="Select"
          component={Select}
          options={selectOptions}
          label="Select"
        />
        <Field
          id="DatePicker"
          name="DatePicker"
          component={DatePicker}
          label="DatePicker"
        />
        <Field
          id="Captcha"
          name="Captcha"
          component={Captcha}
          label="Verify you are not a robot"
        />
        <Field
          id="MyFile"
          name="MyFile"
          component={FileInput}
          label="Upload image with preview"
          preview
          accept="image/*"
        />
        <h2>GALLERY</h2>
        <ImagesWrapper>
          <Field
            id="MyFileList"
            name="MyFileList"
            component={this.renderImages}
          />
          <ImagePlaceFieldWrap>
            <Field
              id="MyFileList"
              name="MyFileList"
              component={FileInput}
              multiple
              preview={false}
            />
          </ImagePlaceFieldWrap>
        </ImagesWrapper>
        <Button
          type="submit"
          className="mr-3"
        >
          Submit
        </Button>
      </Form>
    );
  }
}

export const ImagesArea = styled.div`
  width: 100%;
  max-width: 240px;
  margin-right: -16px;
`;

export const ImagesWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: wrap;
  margin-bottom: 16px;
`;

export const ImagePlaceFieldWrap = styled.div`
  width: 104px;
  min-width: 104px;
  height: 104px;
  margin-right: 16px;
  margin-bottom: 16px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  
  svg{
    position: absolute;
    fill: #EDAC1A;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  div, label {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
  
  label{
    display: flex;
    padding: 0;
    left: 0;
    width: 96px;
    min-width: 96px;
    height: 96px;
    background-color: white;
    border-radius: 4px;
    border: 2px dashed #B2EAFF;
    box-shadow: 0 0 0 4px #ffffff;
    transition: 0.3s;
    margin: 4px;
    
    &[data-preview="true"] {
      border: solid transparent;
      box-shadow: none;
      background: transparent;        
    }
    
    &:hover{
      border-color: #7BDCFF;
    }
  }
`;

export default ComponentsForm;
