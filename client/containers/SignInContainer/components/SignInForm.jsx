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

class SignInForm extends Component {
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
          id='email'
          name='email'
          type='email'
          component={this.renderInput}
          placeholder='E-mail'
          label='E-mail'
        />
        <Field
          id='password'
          name='password'
          type='password'
          component={this.renderInput}
          placeholder='Password'
          label='Password'
        />
        <Button
          type='submit'
          color='primary'
          className='mr-3'
        >
          Sign in
        </Button>
      </Form>
    );
  }
}

export default SignInForm;
