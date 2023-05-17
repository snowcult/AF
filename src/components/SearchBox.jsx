import PropTypes from "prop-types";
const SearchBox = ({ searchChange }) => {
  return (
    <div className="pb4 ">
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
