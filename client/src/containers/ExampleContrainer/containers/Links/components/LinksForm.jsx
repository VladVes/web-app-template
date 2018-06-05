import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Field from '../../../../components/redux-form-components/CustomField';
import {
  Form,
  Input,
  Button
} from 'reactstrap';

class LinksForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
  };

  render() {
    const { handleSubmit, onSubmit } = this.props;

    return (
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Field
          id='link1'
          name='link1'
          type='text'
          component={Input}
          placeholder='Link1'
          label='Link1'
        />
        <Field
          id='link2'
          name='link2'
          type='text'
          component={Input}
          placeholder='Link2'
          label='Link2'
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

export default LinksForm;
