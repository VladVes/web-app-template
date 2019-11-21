import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { customModalStyle, customOverlayStyle } from '../../../../styles/styledComponents/ExampleModal';

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
        <button onClick={this.showSimpleExampleModal}>SHOW SIMPLE MODAL</button>
        <button onClick={this.showCustomExampleModal}>SHOW CUSTOM MODAL</button>
      </div>
    );
  }
}

export default ExampleModal;
