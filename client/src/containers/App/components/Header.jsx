import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import {
  Collapse,
  Container,
  Navbar,
  Nav,
} from 'reactstrap';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import withSpinner from 'Shared/hocs/withSpinner';
import HeaderItems from './HeaderItems';

const HeaderItemsWithSpinner = withSpinner(HeaderItems);

export const ThemedButton = styled.button`
  background: ${props => (props.theme.header.backgroundColor)};
`;

const Header = ({
  isFetching, isLogged, onLogout, themes, setTheme,
}) => {
  const { t, i18n } = useTranslation('common');
  return (
    <Navbar expand dark color="dark">
      <Container>
        <Collapse navbar className="w-100">
          <NavLink className="navbar-brand" to="/">{t('example.AWT')}</NavLink>
          {themes.map(theme => (
            <ThemedButton id={`theme-${theme._id}`} type="button" onClick={() => setTheme(theme)}>
              {t('example.themeProp', { name: theme.name })}
            </ThemedButton>
          ))}
          <ThemedButton type="button" onClick={() => i18n.changeLanguage('en')}>{t('language.en')}</ThemedButton>
          <ThemedButton type="button" onClick={() => i18n.changeLanguage('ru')}>{t('language.ru')}</ThemedButton>
          <Nav navbar className="ml-auto">
            <HeaderItemsWithSpinner isFetching={isFetching} isLogged={isLogged} onLogout={onLogout} />
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

Header.propTypes = {
  theme: PropTypes.shape({}).isRequired, // could be used to figure out which theme currently in use
  themes: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  setTheme: PropTypes.func.isRequired,
  /* TODO:
  language: PropTypes.shape({}).isRequired,
  languages: PropTypes.arrayOf(PropTypes.string).isRequired,
  setLanguage: PropTypes.func.isRequired,
  */
  isFetching: PropTypes.bool.isRequired,
  isLogged: PropTypes.bool.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default Header;
