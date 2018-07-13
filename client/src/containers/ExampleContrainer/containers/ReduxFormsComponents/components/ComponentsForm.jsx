/* eslint-disable no-unused-vars */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
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
  };

  state = {
    selectOptions: [
      { value: 'AK', label: 'Alaska' },
      { value: 'AS', label: 'American Samoa' },
      { value: 'AZ', label: 'Arizona' },
      { value: 'AR', label: 'Arkansas' },
      { value: 'CA', label: 'California' },
      { value: 'CO', label: 'Colorado' },
      { value: 'CT', label: 'Connecticut' },
      { value: 'DE', label: 'Delaware' },
      { value: 'DC', label: 'District Of Columbia' },
    ],
  };

  render() {
    const { handleSubmit, onSubmit } = this.props;

    return (
      <Form onSubmit={handleSubmit(onSubmit)}>
        <strong>Form with submit validation</strong>
        <Field
          id="Select"
          name="Select"
          component={Select}
          options={this.state.selectOptions}
          label="Select"
        />
        <Field
          id="DatePicker"
          name="DatePicker"
          component={DatePicker}
          label="DatePicker"
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
          label="Upload files with preview"
          multiple
          preview
        />
        {/**/}
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
