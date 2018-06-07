import React from 'react';
import PropTypes from 'prop-types';
import AppMain from './App';
import DevTools from './DevTools';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

const App = props => (
  <AppMain>
    <div>
      {props.children}
      <DevTools />
    </div>
  </AppMain>
);

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;
