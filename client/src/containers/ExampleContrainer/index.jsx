import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import BtcToUsd from './components/BtcToUsd';
import Links from './containers/Links/';
import PersonData from './containers/PersonData';
import { fetchBitcoinPrice } from './redux/actions';

class ExampleComponent extends Component {
  static propTypes = {
    price: PropTypes.string,
    fetchBitcoinPrice: PropTypes.func,
    isLinksFetching: PropTypes.bool.isRequired
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
          <BtcToUsd price={this.props.price || 0} handleRefresh={this.props.fetchBitcoinPrice}/>
        </Col>
        <Col xs={4}>
          <Links isFetching={this.props.isLinksFetching}/>
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
  isLinksFetching: state.example.links.isFetching
});

const mapDispatchToProps = {
  fetchBitcoinPrice
};

export default connect(mapStateToProps, mapDispatchToProps)(ExampleComponent);
