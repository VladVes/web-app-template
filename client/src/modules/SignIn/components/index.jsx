import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import SignInMain from './SignInMain';

class SignIn extends Component {
  static propTypes = {
    fetchSignIn: Proptypes.func.isRequired,
  };

  handleSignInFormSubmit = formValues => this.props.fetchSignIn(formValues);

  render() {
    return (
      <Row className="justify-content-center">
        <Col xs={4}>
          <SignInMain
            onSubmit={this.handleSignInFormSubmit}
          />
        </Col>
      </Row>
    );
  }
}

export default SignIn;
