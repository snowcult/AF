import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import Scroll from '../components/Scroll.jsx';
import ErrorBoundary from '../components/ErrorBoundary.jsx';
import { requestRobots, setSearchField } from '../actions/actions.js';
import Header from '../components/Header.jsx';
import MainPage from '../components/pages/Mainpage.jsx';

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    error: state.requestRobots.error,
    isPending: state.requestRobots.isPending,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => {
      return dispatch(setSearchField(event.target.value));
    },
    onRequestRobots: () => dispatch(requestRobots()),
  };
};

function App(props) {
  return <MainPage {...props} />;
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
