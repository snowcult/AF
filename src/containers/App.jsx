import { connect } from 'react-redux';
import CardList from '../components/CardList.jsx';
import SearchBox from '../components/SearchBox.jsx';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import Scroll from '../components/Scroll.jsx';
import ErrorBoundary from '../components/ErrorBoundary.jsx';

import { requestRobots, setSearchField } from '../actions/actions.js';
import Header from '../components/Header.jsx';

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
  const { searchField, onSearchChange, robots, isPending } = props;
  useEffect(() => {
    props.onRequestRobots();
  }, []);

  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchField);
  });

  return !isPending ? (
    <div className="tc">
      <Header />
      <h2 className="red">Loading...</h2>;
    </div>
  ) : (
    <section className="tc">
      <Header />
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundary>
          <CardList robots={filteredRobots} />
        </ErrorBoundary>
      </Scroll>
    </section>
  );
}

App.propTypes = {
  store: PropTypes.object,
  onSearchChange: PropTypes.func,
  searchField: PropTypes.string,
  onRequestRobots: PropTypes.func,
  robots: PropTypes.array,
  isPending: PropTypes.bool,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
