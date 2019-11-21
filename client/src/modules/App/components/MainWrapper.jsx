import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';
import Footer from './Footer';
import Header from './Header';

class MainWrapper extends React.Component {
  static propTypes = {
    isUserDataLoaded: PropTypes.bool.isRequired,
    children: PropTypes.arrayOf(PropTypes.element).isRequired,

    fetchCurrentUser: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    if (!props.isUserDataLoaded) {
      props.fetchCurrentUser();
    }
  }
  render() {
    return (
      <main>
        <Header />
        <Container className="mt-3">
          {this.props.children}
        </Container>
        <Footer />
      </main>
    );
  }
}

export default MainWrapper;
