import { connect } from 'react-redux';

import ExampleModule from '../components';
import {
  fetchBitcoinPrice,
  fetchTest,
  fetchSum,
} from '../actions/mainActions';

import states from '../../../constants/states';

const mapStateToProps = state => ({
  price: state.example.bitcoin.price,
  testText: state.example.test.text,
  sum: state.example.sum.value,
  isBTCtoUSDFetching: state.example.bitcoin.dataState === states.requested,
});

const mapDispatchToProps = {
  fetchBitcoinPrice,
  fetchTest,
  fetchSum,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExampleModule);
