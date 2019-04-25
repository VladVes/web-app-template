import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';
import { ThemeProvider } from 'emotion-theming';
import Routes from './Routes';
import { fetchCurrentUser, clearCurrentUser, changeTheme } from '../Redux/app/actions';
import Footer from './Footer';
import Header from './Header';

class Main extends Component {
  static propTypes = {
    user: PropTypes.shape({}).isRequired, // todo: add correct typization
    fetchCurrentUser: PropTypes.func.isRequired,
    clearCurrentUser: PropTypes.func.isRequired,
    theme: PropTypes.shape({}).isRequired,
    themes: PropTypes.arrayOf(PropTypes.string).isRequired,
    setTheme: PropTypes.func.isRequired,
    languages: PropTypes.arrayOf(PropTypes.string).isRequired, // todo: connect with i18n somehow and pass to header
  };

  componentDidMount() {
    // user stored in localStorage, but on first run - we need to make sure,
    // that he still logged in (token is not expired or damaged)
    this.props.fetchCurrentUser();
  }

  handleLogout = () => {
    // todo: rename to "logOut", even if it would just call clearCurrentUser
    this.props.clearCurrentUser();
  };

  render() {
    const {
      user, theme, setTheme,
    } = this.props;
    const { currentUser, isFetching, isError } = user; // todo: consider move all that stuff to mapStateToProps
    const { availableThemes } = theme;
    const isLogged = !!user.currentUser;
    return (
      <main>
        <ThemeProvider theme={theme.currentTheme.theme}>
          {/* TODO: refactor header */}
          <Header
            isFetching={isFetching}
            isLogged={isLogged}
            onLogout={this.handleLogout}
            theme={theme}
            themes={availableThemes}
            setTheme={setTheme}
          />
          <Container className="mt-3">
            <Routes {...{ currentUser, isFetching, isError }} />
          </Container>
          <Footer />
        </ThemeProvider>
      </main>
    );
  }
}

// todo: less confusing naming
// keep in mind that user and theme - are reducers, not actual object
// (for values use user.currentUser and same for theme)
const mapStateToProps = state => ({
  user: state.app.user,
  theme: state.app.theme,
});
const mapDispatchToProps = {
  fetchCurrentUser,
  clearCurrentUser,
  setTheme: changeTheme, // in order to avoid shadowing - we use different name, alternative - call via this.props
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
