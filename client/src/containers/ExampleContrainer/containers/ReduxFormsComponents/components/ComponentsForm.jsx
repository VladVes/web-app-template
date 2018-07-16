/* eslint-disable no-unused-vars */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormProps } from 'PropTypes';
import { Form, Button } from 'reactstrap';
import {
  CustomField as Field,
  Captcha,
  Select,
  DatePicker,
  TimePicker,
  Radio,
  FileInput,
} from 'Shared/redux-form-components';

class ComponentsForm extends PureComponent {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    selectOptions: FormProps.SelectOptions.isRequired,
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
          label="Upload file"
        />
        <Field
          id="MyFileList"
          name="MyFileList"
          component={FileInput}
          label="Upload files"
          multiple
        />
        <Field
          id="MyFileListPreview"
          name="MyFileListPreview"
          component={FileInput}
          label="Upload images with preview"
          multiple
          preview
          accept="image/*"
        />
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

export default ComponentsForm;
