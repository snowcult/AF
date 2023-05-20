import CardList from '../CardList.jsx';
import SearchBox from '../SearchBox.jsx';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import Scroll from '../Scroll.jsx';
import ErrorBoundary from '../ErrorBoundary.jsx';
import Header from '../Header.jsx';

function MainPage(props) {
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

MainPage.propTypes = {
  store: PropTypes.object,
  onSearchChange: PropTypes.func,
  searchField: PropTypes.string,
  onRequestRobots: PropTypes.func,
  robots: PropTypes.array,
  isPending: PropTypes.bool,
};

export default MainPage;
