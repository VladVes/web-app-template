import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import {
  Collapse,
  Container,
  Navbar,
  Nav,
} from 'reactstrap';
import withSpinner from 'Shared/hocs/withSpinner';
import HeaderItems from './HeaderItems';

const HeaderItemsWithSpinner = withSpinner(HeaderItems);

const Header = ({ isFetching, isLogged, onLogout }) => (
  <Navbar expand dark color="dark">
    <Container>
      <Collapse navbar className="w-100">
        <NavLink className="navbar-brand" to="/">Aspirity Web Template</NavLink>
        <Nav navbar className="ml-auto">
          <HeaderItemsWithSpinner isFetching={isFetching} isLogged={isLogged} onLogout={onLogout} />
        </Nav>
      </Collapse>
    </Container>
  </Navbar>
);

Header.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  isLogged: PropTypes.bool.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default Header;
