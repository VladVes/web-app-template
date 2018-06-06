import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import BtcToUsd from './components/BtcToUsd';
import Links from './containers/Links/';
import PersonData from './containers/PersonData';
import { fetchBitcoinPrice } from './redux/actions';
import withSpinner from '../../components/hocs/withSpinner';

const BtcToUsdWithSpinner = withSpinner(BtcToUsd);

class ExampleComponent extends Component {
  static propTypes = {
    price: PropTypes.string,
    fetchBitcoinPrice: PropTypes.func,
    isBTCtoUSDFetching: PropTypes.bool.isRequired
  };

  static defaultProps = {
    price: 0,
    fetchBitcoinPrice: () => {}
  };

  componentDidMount() {
    this.props.fetchBitcoinPrice();
  }

  handlePersonDataFormSubmit = formValues => console.log(formValues);

  render() {
    return (
      <Row>
        <Col xs={4}>
          <BtcToUsdWithSpinner
            price={this.props.price}
            handleRefresh={this.props.fetchBitcoinPrice}
            isFetching={this.props.isBTCtoUSDFetching}
          />
        </Col>
        <Col xs={4}>
          <Links/>
        </Col>
        <Col xs={4}>
          <PersonData onSubmit={this.handlePersonDataFormSubmit}/>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (state) => ({
  price: state.example.bitcoin.price,
  isBTCtoUSDFetching: state.example.bitcoin.isFetching
});

const mapDispatchToProps = {
  fetchBitcoinPrice
};

export default connect(mapStateToProps, mapDispatchToProps)(ExampleComponent);
