import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import withSpinner from '../../../decorators/withSpinner';
import Links from '../containers/Links';
import PersonData from './PersonData';
import ExampleModal from '../containers/ExampleModal';
import ComponentsForm from '../containers/ReduxFormsComponents';
import BtcToUsd from './BtcToUsd';

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
    postPersonData: PropTypes.func.isRequired,
    uploadFiles: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.fetchBitcoinPrice();
    this.props.fetchTest();
    this.props.fetchSum();
    this.props.fetchFiles();
  }

  handlePersonDataFormSubmit = async (formValues) => {
    try {
      await this.props.postPersonData(formValues);
    } catch (e) {
      throw e;
    }
  };

  handleSubmit = (formValues) => {
    // eslint-disable-next-line no-alert
    alert(JSON.stringify(formValues));
    this.props.uploadFiles(formValues.MyFile);
    this.props.uploadFiles(formValues.MyFileList);
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
          <div className="mb-3">
            Text from server:
            {testText}
          </div>
          <div className="mb-3">
            Sum from server:
            {sum}
          </div>
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

export default ExampleComponent;
