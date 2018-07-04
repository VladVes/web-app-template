import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import SignUp from './components/SignUp';
import SignUpSuccess from './components/SignUpSuccess';
import { fetchSignUp } from './redux/actions';

class SignUpContainer extends Component {
  static propTypes = {
    isSigned: PropTypes.bool.isRequired,
    fetchSignUp: PropTypes.func.isRequired,
  };

  handleSignUpFormSubmit = formValues => this.props.fetchSignUp(formValues);

  render() {
    return (
      <Row className="justify-content-center">
        <Col xs={6}>
          {this.props.isSigned ?
            <SignUpSuccess checkEmail={false} />
          :
            <SignUp
              isSigned={this.props.isSigned}
              onSubmit={this.handleSignUpFormSubmit}
            />
          }
        </Col>
      </Row>
    );
  }
}


function mapStateToProps(state) {
  return { isSigned: state.signUp.done };
}


export default connect(mapStateToProps, { fetchSignUp })(SignUpContainer);
