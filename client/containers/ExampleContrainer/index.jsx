import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ExampleComponent extends Component {
  render() {
    return (<Link to='/1'><div>HELLO WORLD</div></Link>);
  }
}
