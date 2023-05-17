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
export default SearchBox;
