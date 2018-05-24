import React, { Component } from 'react';
import { connect } from 'react-redux';
import BtcToUsd from './components/BtcToUsd';
import { fetchBitcoinPrice } from './redux/actions';
import PropTypes from 'prop-types';

class ExampleComponent extends Component {
  static propTypes = {
    price: PropTypes.any,
    fetchBitcoinPrice: PropTypes.func
  };

  static defaultProps = {
    price: 0,
    fetchBitcoinPrice: () => {}
  };

  componentDidMount() {
    this.props.fetchBitcoinPrice();
  }

  render() {
    return (
      <div>
        <BtcToUsd price={this.props.price || 0} handleRefresh={this.props.fetchBitcoinPrice}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  price: state.example.price
});

const mapDispatchToProps = { fetchBitcoinPrice };

export default connect(mapStateToProps, mapDispatchToProps)(ExampleComponent);
