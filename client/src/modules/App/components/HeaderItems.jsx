import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { NavItem, NavLink as NavLink2 } from 'reactstrap';

const HeaderItems = ({ isLogged, onLogout }) => (
  isLogged
    ? (
      <NavItem className="mr-2">
        <NavLink2 className="nav-link" href="#" onClick={onLogout}>Log Out</NavLink2>
      </NavItem>
    )
    : (
      <Fragment>
        <NavItem className="mr-2">
          <NavLink to="/signin" className="nav-link">Sign In</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/signup" className="nav-link">Sign Up</NavLink>
        </NavItem>
      </Fragment>
    )
);

HeaderItems.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default HeaderItems;
