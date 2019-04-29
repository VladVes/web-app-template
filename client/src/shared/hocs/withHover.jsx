import React from 'react';
import PropTypes from 'prop-types';

const withHover = AdditionalComponent => WrappedComponent => (
  class extends React.Component {
    static propTypes = {
      children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
    };

    state = {
      isMouseInside: false,
    };

    handleMouseEnter = () => this.setState({ isMouseInside: true });

    handleMouseLeave = () => this.setState({ isMouseInside: false });

    render() {
      const { children, ...other } = this.props;
      const { isMouseInside } = this.state;

      return (
        <WrappedComponent
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          {children}
          {<div hidden={!isMouseInside}><AdditionalComponent {...other} /></div>}
        </WrappedComponent>
      );
    }
  }
);

export default withHover;
