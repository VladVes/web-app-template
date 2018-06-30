import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'reactstrap';
import {
  CustomField as Field,
  Captcha,
  Select,
  DatePicker,
  FilePicker,
} from 'Shared/redux-form-components';

class ComponentsForm extends PureComponent {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    selectOptions: PropTypes.arrayOf(PropTypes.shape({ value: PropTypes.string, label: PropTypes.string })).isRequired,
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
          id="FilePicker"
          name="FilePicker"
          component={FilePicker}
          disabled
          label="FilePicker"
        />
        <Field
          id="Captcha"
          name="Captcha"
          component={Captcha}
          label="Verify you are not a robot"
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
