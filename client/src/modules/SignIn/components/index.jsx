import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import SignIn from './SignIn';

class SignInMain extends Component {
  static propTypes = {
    fetchSignIn: Proptypes.func.isRequired,
  };

  handleSignInFormSubmit = formValues => this.props.fetchSignIn(formValues);

  render() {
    return (
      <Row className="justify-content-center">
        <Col xs={4}>
          <SignIn
            onSubmit={this.handleSignInFormSubmit}
          />
        </Col>
      </Row>
    );
  }
}

export default SignInMain;
