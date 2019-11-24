import React from 'react';
import PropTypes from 'prop-types';
import { FormProps } from '../../../../common/prop-types';
import ReduxFormsComponents from './ReduxFormsComponents';

const ReduxFormMain = ({ initialValues, onSubmit }) => (
  <ReduxFormsComponents
    initialValues={initialValues}
    onSubmit={onSubmit}
  />
);

ReduxFormMain.propTypes = {
  initialValues: PropTypes.shape({
    MyFileList: PropTypes.arrayOf(FormProps.ServerFile),
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default ReduxFormMain;
