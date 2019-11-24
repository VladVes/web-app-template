import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import SignUp from './SignUp';
import SignUpSuccess from './SignUpSuccess';

class SignUpMain extends Component {
  static propTypes = {
    isSigned: PropTypes.bool.isRequired,
    fetchSignUp: PropTypes.func.isRequired,
  };

  handleSignUpFormSubmit = formValues => this.props.fetchSignUp(formValues);

  render() {
    const { isSigned } = this.props;
    return (
      <Row className="justify-content-center">
        <Col xs={6}>
          {isSigned
            ? <SignUpSuccess checkEmail={false} />
            : (
              <SignUp
                isSigned={isSigned}
                onSubmit={this.handleSignUpFormSubmit}
              />
            )
          }
        </Col>
      </Row>
    );
  }
}

export default SignUpMain;
