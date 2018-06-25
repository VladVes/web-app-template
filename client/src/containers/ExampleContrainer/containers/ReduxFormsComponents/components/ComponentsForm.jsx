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
  FilePicker,
  Radio,
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
          id="select"
          name="select"
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
          id="FilePicker"
          name="FilePicker"
          component={FilePicker}
          disabled
          label="FilePicker"
        />
        {/* <Field */}
        {/* id="TimePicker" */}
        {/* name="TimePicker" */}
        {/* component={TimePicker} */}
        {/* label="TimePicker" */}
        {/* /> */}
        {/* <Field */}
        {/* id="FilePicker" */}
        {/* name="FilePicker" */}
        {/* component={FilePicker} */}
        {/* disabled */}
        {/* label="FilePicker" */}
        {/* /> */}
        {/* <Field */}
        {/* id="Radio" */}
        {/* name="Radio" */}
        {/* component={Radio} */}
        {/* label="Radio" */}
        {/* /> */}
        {/* <Field */}
        {/* id="Captcha" */}
        {/* name="Captcha" */}
        {/* component={Captcha} */}
        {/* label="Verify you are not a robot" */}
        {/* /> */}
        <Button
          fullWidth
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
