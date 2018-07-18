import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from './components/Header';

import { clearCurrentUser } from './Redux/actions';

function mapStateToProps(state) {
  return {
    isFetching: state.currentUser.isFetching,
    isLogged: !!state.currentUser.data,
  };
}

class HeaderContainer extends Component {
  static propTypes = {
    isFetching: PropTypes.bool.isRequired,
    isLogged: PropTypes.bool.isRequired,
    clearCurrentUser: PropTypes.func.isRequired,
  };

  handleLogout = () => {
    this.props.clearCurrentUser();
  };

  render() {
    return (<Header
      isFetching={this.props.isFetching}
      isLogged={this.props.isLogged}
      onLogout={this.handleLogout}
    />);
  }
}

export default connect(mapStateToProps, { clearCurrentUser })(HeaderContainer);
