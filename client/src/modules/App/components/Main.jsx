import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';
import { ThemeProvider } from 'emotion-theming';
import Routes from './Routes';
import Footer from './Footer';
import Header from './Header';

class Main extends Component {
  static propTypes = {
    user: PropTypes.shape({
      currentUser: PropTypes.shape(),
      isError: PropTypes.shape(),
    }).isRequired,
    fetchCurrentUser: PropTypes.func.isRequired,
    logOutUser: PropTypes.func.isRequired,
    theme: PropTypes.shape({
      availableThemes: PropTypes.shape(),
      currentTheme: PropTypes.shape({
        theme: PropTypes.shape(),
      }),
    }).isRequired,
    themes: PropTypes.arrayOf(PropTypes.string).isRequired,
    setTheme: PropTypes.func.isRequired,
    languages: PropTypes.arrayOf(PropTypes.string).isRequired, // todo: connect with i18n somehow and pass to header
    isUserFetching: PropTypes.bool.isRequired,
  };

  componentDidMount() {
    // user stored in localStorage, but on first run - we need to make sure,
    // that he still logged in (token is not expired or damaged)
    this.props.fetchCurrentUser();
  }

  handleLogout = () => {
    this.props.logOutUser();
  };

  render() {
    const {
      user, theme, setTheme, isUserFetching,
    } = this.props;
    const { currentUser, isError } = user; // todo: consider move all that stuff to mapStateToProps
    const { availableThemes } = theme;
    const isLogged = !!user.currentUser;
    return (
      <main>
        <ThemeProvider theme={theme.currentTheme.theme}>
          {/* TODO: refactor header */}
          <Header
            isFetching={isUserFetching}
            isLogged={isLogged}
            onLogout={this.handleLogout}
            theme={theme}
            themes={availableThemes}
            setTheme={setTheme}
          />
          <Container className="mt-3">
            <Routes {...{ currentUser, isFetching: isUserFetching, isError }} />
          </Container>
          <Footer />
        </ThemeProvider>
      </main>
    );
  }
}

export default Main;
