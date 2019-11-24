import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { CustomField } from '..';

const StyledText = styled.div`
  color: lightblue;
  font-family: "Comic Sans MS";
`;

const errorComponent = ({ error }) => <StyledText>{error}</StyledText>;
errorComponent.propTypes = {
  error: PropTypes.string.isRequired,
};

const labelComponent = ({ label }) => <StyledText>{label}</StyledText>;
labelComponent.propTypes = {
  label: PropTypes.string.isRequired,
};

export default props => <CustomField labelComponent={labelComponent} errorComponent={errorComponent} {...props} />;
