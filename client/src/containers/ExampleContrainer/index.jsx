import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import { SubmissionError } from 'redux-form';
import withSpinner from 'Shared/hocs/withSpinner';
import Links from './containers/Links';
import PersonData from './containers/PersonData';
import ExampleModal from './containers/ExampleModal';
import ComponentsForm from './containers/ReduxFormsComponents';
import BtcToUsd from './components/BtcToUsd';
import {
  fetchBitcoinPrice,
  fetchTest,
  fetchSum,
  fetchFiles,
  uploadFiles,
} from './redux/actions';

const BtcToUsdWithSpinner = withSpinner(BtcToUsd);

class ExampleComponent extends Component {
  static propTypes = {
    price: PropTypes.string.isRequired,
    sum: PropTypes.number.isRequired,
    testText: PropTypes.string.isRequired,
    fetchBitcoinPrice: PropTypes.func.isRequired,
    fetchSum: PropTypes.func.isRequired,
    fetchFiles: PropTypes.func.isRequired,
    fetchTest: PropTypes.func.isRequired,
    isBTCtoUSDFetching: PropTypes.bool.isRequired,
    uploadFiles: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.fetchBitcoinPrice();
    this.props.fetchTest();
    this.props.fetchSum();
    this.props.fetchFiles();
  }

  handlePersonDataFormSubmit = (formValues) => {
    const error = {};

    if (!formValues.name) {
      error.name = 'Name required';
    }

    if (!formValues.surname) {
      error.surname = 'Surname required';
    }

    if (Object.keys(error).length) {
      throw new SubmissionError(error);
    }
  };

  handleSubmit = (formValues) => {
    // eslint-disable-next-line no-alert
    alert(JSON.stringify(formValues));
    this.props.uploadFiles(formValues.MyFile);
    this.props.uploadFiles(formValues.MyFileList);
    this.props.uploadFiles(formValues.MyFileListPreview);
  };

  render() {
    const {
      price,
      isBTCtoUSDFetching,
      testText,
      sum,
    } = this.props;

    return (
      <Row>
        <Col xs={12} sm={3} className="d-flex align-items-center flex-column ">
          <BtcToUsdWithSpinner
            price={price}
            handleRefresh={this.props.fetchBitcoinPrice}
            isFetching={isBTCtoUSDFetching}
          />
          <div className="mb-3">Text from server: {testText}</div>
          <div className="mb-3">Sum from server: {sum}</div>
          <ExampleModal />
        </Col>
        <Col xs={12} sm={3} className="d-flex justify-content-center my-5 my-sm-0">
          <Links />
        </Col>
        <Col xs={12} sm={3} className="d-flex justify-content-center">
          <PersonData onSubmit={this.handlePersonDataFormSubmit} />
        </Col>
        <Col xs={12} sm={3} className="d-flex justify-content-center">
          <ComponentsForm onSubmit={this.handleSubmit} />
        </Col>
      </Row>
    );
  }
}

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
  uploadFiles,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExampleComponent);
