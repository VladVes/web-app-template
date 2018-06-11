import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { hideModal } from './redux/actions';
import withSpinner from '../hocs/withSpinner';

import ExampleModal from '../../containers/ExampleContrainer/containers/ExampleModal';

const modals = {
  ExampleModal,
};

class MainModal extends Component {
  static propTypes = {
    modal: PropTypes.shape({
      type: PropTypes.string, // name of modal from modals array
      show: PropTypes.bool,
      modalProps: PropTypes.object,
      loading: PropTypes.bool,
      error: PropTypes.shape({ message: PropTypes.string, data: PropTypes.any }),
    }).isRequired,
    hideModal: PropTypes.func.isRequired,
  };

  getModalContent = (modalType, error) => {
    if (error) throw new Error(error);
    if (!modalType) throw new Error('modalType not specified');
    const ModalContent = modals[modalType];
    if (!ModalContent) throw new Error(`${modalType} not found in modals list`);
    return withSpinner(ModalContent);
  };

  handleCloseModal = () => {
    this.props.hideModal();
  };

  render() {
    const {
      show, modalProps, type, loading, error,
    } = this.props.modal;

    if (!show) return null;

    const ModalContent = this.getModalContent(type, error);
    // todo: loader HOC
    return (
      <Modal
        isOpen={show}
        onRequestClose={this.handleCloseModal}
      >
        <ModalContent {...modalProps} isFetching={loading} />
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  modal: state.modal,
});

const mapDispatchToProps = { hideModal };

export default connect(mapStateToProps, mapDispatchToProps)(MainModal);
