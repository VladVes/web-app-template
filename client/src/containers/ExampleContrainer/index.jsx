import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import BtcToUsd from './components/BtcToUsd';
import Links from './components/Links';
import PersonData from './components/PersonData';
import { fetchBitcoinPrice } from './redux/actions';
import PropTypes from 'prop-types';

class ExampleComponent extends Component {
  static propTypes = {
    price: PropTypes.string,
    fetchBitcoinPrice: PropTypes.func
  };

  static defaultProps = {
    price: 0,
    fetchBitcoinPrice: () => {}
  };

  componentDidMount() {
    this.props.fetchBitcoinPrice();
  }

  handleLinksFormSubmit = formValues => console.log(formValues);

  handlePersonDataFormSubmit = formValues => console.log(formValues);

  render() {
    return (
      <Row>
        <Col xs={4}>
          <BtcToUsd price={this.props.price || 0} handleRefresh={this.props.fetchBitcoinPrice}/>
        </Col>
        <Col xs={4}>
          <Links onSubmit={this.handleLinksFormSubmit}/>
        </Col>
        <Col xs={4}>
          <PersonData onSubmit={this.handlePersonDataFormSubmit}/>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (state) => ({
  price: state.example.price
});

const mapDispatchToProps = { fetchBitcoinPrice };

export default connect(mapStateToProps, mapDispatchToProps)(ExampleComponent);
