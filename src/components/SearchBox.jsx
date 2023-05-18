import PropTypes from 'prop-types';

const SearchBox = ({ searchChange }) => {
  console.log('Search box');
  return (
    <div className="pb3 ">
      <input
        type="search"
        placeholder="Search Robots"
        className="br2  pa2"
        onChange={searchChange}
      />
    </div>
  );
};

SearchBox.propTypes = {
  searchChange: PropTypes.func,
};
export default SearchBox;
