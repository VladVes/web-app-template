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
    user: PropTypes.shape({}).isRequired, // todo: add correct typezation
    fetchCurrentUser: PropTypes.func.isRequired,
    clearCurrentUser: PropTypes.func.isRequired,
    theme: PropTypes.shape({}).isRequired,
    themes: PropTypes.arrayOf(PropTypes.string).isRequired,
    setTheme: PropTypes.func.isRequired,
    language: PropTypes.shape({}).isRequired, // todo: add changeLanguage (pass to action?)
    languages: PropTypes.arrayOf(PropTypes.string).isRequired,
    setLanguage: PropTypes.func.isRequired,
  };

  componentDidMount() {
    // user stored in localStorage, but on first run - we need to make sure,
    // that he still logged in (token not expired or damaged)
    this.props.fetchCurrentUser();
  }

  handleLogout = () => {
    // todo: rename to "logOut", even if it would just call clearCurrentUser
    this.props.clearCurrentUser();
  };

  render() {
    const {
      user, theme, language, setTheme, setLanguage,
    } = this.props;
    const { currentUser, isFetching, isError } = user; // todo: consider move all that stuff to mapStateToProps
    const { availableThemes } = theme;
    const { languages } = language;
    const isLogged = !!user.currentUser;
    return (
      <main>
        <ThemeProvider theme={theme.currentTheme.theme}>
          {/* TODO: refactor header */}
          <Header
            isFetching={isFetching}
            isLogged={isLogged}
            onLogout={this.handleLogout}
            languages={languages}
            language={language}
            setLangeage={setLanguage}
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

const mapStateToProps = state => ({
  user: state.app.user,
  theme: state.app.theme,
  language: state.app.language,
});
const mapDispatchToProps = {
  fetchCurrentUser,
  clearCurrentUser,
  setTheme: changeTheme, // todo: what do we do with this shadow prop? Appears only if used with spread
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
