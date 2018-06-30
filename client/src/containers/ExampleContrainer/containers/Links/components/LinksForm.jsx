import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  Input,
} from 'reactstrap';
import Field from 'Shared/redux-form-components/CustomField';
import StyledField from 'Shared/redux-form-components/styled/StyledField';
import { PrimaryButton, CancelButton } from 'Shared/styledComponents/Button';

class LinksForm extends PureComponent {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
  };

  render() {
    const { handleSubmit, onSubmit, reset } = this.props;

    return (
      <Form onSubmit={handleSubmit(onSubmit)}>
        <strong>Form with sync validation</strong>
        <StyledField
          id="link1"
          name="link1"
          type="text"
          component={Input}
          placeholder="Link1"
          label="Link1 with custom field"
        />
        <Field
          id="link2"
          name="link2"
          type="text"
          component={Input}
          placeholder="Link2"
          label="Link2"
        />
        <PrimaryButton
          type="submit"
          className="mr-3"
        >
          Submit
        </PrimaryButton>
        <CancelButton
          type="button"
          onClick={reset}
        >
          Cancel
        </CancelButton>
      </Form>
    );
  }
}

export default LinksForm;
