import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import {
  FormGroup,
  Label,
  FormFeedback
} from 'reactstrap';

class CustomField extends Component {
  static propTypes = {
    component: PropTypes.func.isRequired,
    id: PropTypes.any.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    errorComponent: PropTypes.func,
    labelComponent: PropTypes.func
  };

  renderError = (error) => {
    if (this.props.errorComponent) return this.props.errorComponent;

    return (
      <FormFeedback>{error}</FormFeedback>
    );
  };

  renderLabel = (id, label) => {
    if (this.props.labelComponent) return this.props.labelComponent;

    return (
      <Label for={id}>{label}</Label>
    );
  };

  renderComponent = ChildComponent => (childProps) => {
    const { input, meta, id, label, ...other } = childProps;
    const { value, onChange } = input;
    const { touched, error } = meta;

    return (
      <FormGroup>
        {this.renderLabel(id, label)}
        <ChildComponent
          invalid={Boolean(touched && error)}
          value={value}
          onChange={onChange}
          id={id}
          {...other}
        />
        {touched && error && this.renderError(error)}
      </FormGroup>
    );
  };

  render() {
    const { component: ChildComponent, ...other } = this.props;

    return (
      <Field component={this.renderComponent(ChildComponent)} {...other}/>
    );
  }
}

export default CustomField;
