import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppMain from './App';
// import DevTools from '../../DevTools'; todo

const propTypes = {
  children: PropTypes.node
};

class App extends Component {
  render() {
    return (
      <AppMain>
        <div>
          {this.props.children}
          {/* <DevTools />*/}
        </div>
      </AppMain>
    );
  }
}

App.propTypes = propTypes;

export default App;
