import { connect } from 'react-redux';
import Example from '../components';
import {
  fetchBitcoinPrice,
  fetchTest,
  fetchSum,
  fetchFiles,
  postPersonData,
  uploadFiles,
} from '../actions';

const mapStateToProps = state => ({
  price: state.example.bitcoin.price,
  testText: state.example.test.text,
  sum: state.example.sum.value,
  isBTCtoUSDFetching: state.example.bitcoin.isFetching,
});

const mapDispatchToProps = {
  fetchBitcoinPrice,
  fetchTest,
  fetchSum,
  fetchFiles,
  postPersonData,
  uploadFiles,
};

export default connect(mapStateToProps, mapDispatchToProps)(Example);
