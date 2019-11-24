import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyledModalContent,
  StyledClose,
  CloseIcon,
} from './styled';

class SimpleExampleModal extends Component {
  static propTypes = {
    hideModal: PropTypes.func.isRequired,
  };

  closeModal = (e) => {
    e.preventDefault();
    this.props.hideModal();
  };

  render() {
    return (
      <StyledModalContent>
        <StyledClose onClick={this.closeModal}>
          <CloseIcon />
        </StyledClose>
        MODAL CONTENT
      </StyledModalContent>
    );
  }
}

export default SimpleExampleModal;
