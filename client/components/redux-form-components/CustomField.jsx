import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import {
  FormGroup,
  Label
} from 'reactstrap';

class CustomField extends Component {
  static propTypes = {
    component: PropTypes.func.required,
    id: PropTypes.any.required,
    name: PropTypes.string.required,
    label: PropTypes.string.required,
    errorComponent: PropTypes.func,
    labelComponent: PropTypes.func
  };

  renderError = (error) => {
    if (this.props.errorComponent) return this.props.errorComponent;

    return (
      <div><strong>{error}</strong></div>
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
        <ChildComponent value={value} onChange={onChange} id={id}
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
