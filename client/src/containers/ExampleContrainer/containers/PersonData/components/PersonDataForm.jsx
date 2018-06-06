import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Input,
  Form,
  Button
} from 'reactstrap';
import Field from '../../../../../components/redux-form-components/CustomField';

class PersonDataForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
  };

  render() {
    const { handleSubmit, onSubmit } = this.props;

    return (
      <Form onSubmit={handleSubmit(onSubmit)}>
        <strong>Form with submit validation</strong>
        <Field
          id='name'
          name='name'
          type='text'
          component={Input}
          placeholder='Name'
          label='Name'
        />
        <Field
          id='surname'
          name='surname'
          type='text'
          component={Input}
          placeholder='Surname'
          label='Surname'
        />
        <Button
          type='submit'
          color='primary'
          className='mr-3'
        >
          Submit
        </Button>
      </Form>
    );
  }
}

export default PersonDataForm;
