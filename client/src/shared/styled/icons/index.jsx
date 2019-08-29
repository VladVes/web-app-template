import React from 'react';
import styled from '@emotion/styled';

const StyledIcon = styled.svg`
  width: 20px;
  height: 20px;
  transition: 0.3s;
  fill: #EDAC1A;
`;

export const LoadIcon = () => (
  <StyledIcon viewBox="0 0 24 24">
    <path
      d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"
    />
  </StyledIcon>
);

export const CloseIcon = () => (
  <StyledIcon viewBox="0 0 24 24">
    <path
      d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
    />
  </StyledIcon>
);

export const RemovingIcon = () => (
  <StyledIcon viewBox="0 0 24 24">
    <path
      d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
    />
  </StyledIcon>
);
