import PropTypes from 'prop-types';
import { ChangeEventHandler } from 'react';

type ISearchBoxProps = {
  searchChange: ChangeEventHandler<HTMLInputElement>;
};
const SearchBox = ({ searchChange }: ISearchBoxProps) => {
  console.log('Search box');
  return (
    <div className="pb3 ">
      <input
        aria-label="search Robot"
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
