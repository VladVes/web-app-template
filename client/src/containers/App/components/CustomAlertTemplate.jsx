import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

// region styles

const StyledSmallIcon = styled.svg`
  width: 12px;
  height: 12px;
  transition: 0.3s;
`;

export const CrossSmallIcon = () => (
  <StyledSmallIcon viewBox="0 0 24 24">
    <path
      d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
    />
  </StyledSmallIcon>
);

export const CheckSmallIcon = () => (
  <StyledSmallIcon viewBox="0 0 24 24">
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
  </StyledSmallIcon>
);

export const ExclamationSmallIcon = () => (
  <StyledSmallIcon viewBox="0 0 4 12">
    <path
      d="M1.36238 8.16C1.18104 8.16 1.09038 8.06933 1.09038 7.888L0.898375 1.072C0.898375 0.890666
      0.983708 0.799999 1.15438 0.799999H2.86638C3.03704 0.799999 3.12238 0.890666 3.12238 1.072L2.91438
      7.888C2.91438 8.06933 2.81838 8.16 2.62638 8.16H1.36238ZM1.97038 11.984C1.55438 11.984 1.20771 11.8507
      0.930375 11.584C0.653042 11.3067 0.514375 10.976 0.514375 10.592C0.514375 10.2187 0.658375 9.89867
      0.946375 9.632C1.24504 9.35467 1.58638 9.216 1.97038 9.216C2.35438 9.216 2.69571 9.35467 2.99438
      9.632C3.29304 9.89867 3.44238 10.2187 3.44238 10.592C3.44238 10.976 3.29838 11.3067 3.01038 11.584C2.73304
      11.8507 2.38638 11.984 1.97038 11.984Z"
    />
  </StyledSmallIcon>
);

export const CustomAlert = styled.div`
  max-width: 220px;
  width: 100%;
  min-height: 84px;
  
  padding: 8px;
  
  border-radius: 4px;
  
  background: #FFFFFF;
  box-shadow:
    0 8px 10px rgba(64, 96, 128, 0.1),
    0 6px 30px rgba(64, 96, 128, 0.02),
    0 16px 24px rgba(64, 96, 128, 0.04);
`;

export const CustomAlertHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  
  margin-bottom: 9px;

  font-family: Barlow;
  font-style: normal;
  font-weight: 500;
  line-height: 25px;
  font-size: 14px;

  color: #406080;
  
  text-transform: capitalize;
`;

export const CustomAlertMessage = styled.div`
  margin: 0 8px 8px 36px;

  line-height: 17px;
  font-size: 12px;

  color: #8FADCC;
`;

export const CustomAlertCloseButton = styled.div`
  width: 16px;
  height: 18px;
  margin-left: auto;
  
  svg {
    width: 10px;
    height: 10px;
    fill: #C1D3E6;
  }
  
  &:hover {
    cursor: pointer;
  }
`;

export const CustomAlertCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  margin-right: 12px;

  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${(props) => {
    const alertTypeColors = {
      success: '#00C241',
      error: '#FF0C3E',
      warning: '#FFCE0C',
    };
    return alertTypeColors[props.alertType];
  }};
  
  svg {
    fill: white;
  }
`;

// endregion

const getAlertType = (classNames) => {
  const prefix = 's-alert-';
  const types = ['success', 'warning', 'error'];
  const foundType = types.find(type => classNames.includes(`${prefix}${type}`));
  return foundType;
};

const CustomAlertTemplate = ({
  id,
  classNames,
  message,
  handleClose,
  styles,
}) => {
  const alertType = getAlertType(classNames);
  return (
    <CustomAlert className={classNames} id={id} style={styles}>
      <CustomAlertCloseButton onClick={handleClose}><CrossSmallIcon /></CustomAlertCloseButton>
      <CustomAlertHeader>
        <CustomAlertCircle alertType={alertType}>
          {
          alertType === 'success'
            ? <CheckSmallIcon />
            : <ExclamationSmallIcon />
        }
        </CustomAlertCircle>
        <span>{`${alertType}!`}</span>
      </CustomAlertHeader>
      <CustomAlertMessage>{message}</CustomAlertMessage>
    </CustomAlert>
  );
};

CustomAlertTemplate.propTypes = {
  id: PropTypes.string.isRequired,
  classNames: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
  styles: PropTypes.shape().isRequired,
};

export default CustomAlertTemplate;
