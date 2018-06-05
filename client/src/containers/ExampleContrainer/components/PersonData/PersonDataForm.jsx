import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import {
  Form,
  FormGroup,
  Input,
  Label,
  Button
} from 'reactstrap';

class PersonDataForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
  };

  renderInput = ({
    input,
    id,
    name,
    placeholder,
    label,
    type
  }) => (
    <FormGroup>
      <Label for={id}>{label}</Label>
      <Input
        {...input}
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
      />
    </FormGroup>
  );

  render() {
    const { handleSubmit, onSubmit } = this.props;

    return (
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Field
          id='name'
          name='name'
          type='text'
          component={this.renderInput}
          placeholder='Name'
          label='Name'
        />
        <Field
          id='surname'
          name='surname'
          type='text'
          component={this.renderInput}
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
