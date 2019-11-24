import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyledModalContent,
  StyledClose,
  CloseIcon,
} from './styled';

class CustomExampleModal extends Component {
  static propTypes = {
    hideModal: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  };

  closeModal = (e) => {
    e.preventDefault();
    this.props.hideModal();
  };

  render() {
    const { title, content } = this.props;

    return (
      <StyledModalContent>
        <StyledClose onClick={this.closeModal}>
          <CloseIcon />
        </StyledClose>
        title:
        {' '}
        {title}
        content:
        {' '}
        {content}
      </StyledModalContent>
    );
  }
}

export default CustomExampleModal;
