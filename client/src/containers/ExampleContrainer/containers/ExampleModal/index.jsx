import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showModal } from 'Shared/modal/redux/actions';
import { customModalStyle, customOverlayStyle } from './styled/overridedStylesExample';

class ExampleModal extends Component {
  static propTypes = {
    showModal: PropTypes.func.isRequired,
  };

  showSimpleExampleModal = () => {
    this.props.showModal('SimpleExampleModal');
  };

  showCustomExampleModal = () => {
    const modalProps = { title: 'hello world! ', content: 'Custom Content from props' };
    const wrapperProps = {
      modalStyleName: customModalStyle,
      overlayStyleName: customOverlayStyle,
    };
    this.props.showModal(
      'CustomExampleModal',
      modalProps,
      wrapperProps,
    );
  };

  render() {
    return (
      <div>
        <button type="button" onClick={this.showSimpleExampleModal}>SHOW SIMPLE MODAL</button>
        <button type="button" onClick={this.showCustomExampleModal}>SHOW CUSTOM MODAL</button>
      </div>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = { showModal };

export default connect(mapStateToProps, mapDispatchToProps)(ExampleModal);
