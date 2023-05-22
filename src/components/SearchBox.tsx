import React from 'react';
import PropTypes from 'prop-types';
import { ChangeEventHandler } from 'react';
import { Input, TextField } from '@mui/material';

type ISearchBoxProps = {
  searchChange: ChangeEventHandler<HTMLInputElement>;
};
const SearchBox = ({ searchChange }: ISearchBoxProps) => {
  console.log('Search box');
  return (
    <TextField
      sx={{ margin: '1.5rem', color: 'primary' }}
      label="Search Robots"
      InputProps={{ style: { color: 'white' } }}
      focused
      onChange={searchChange}
    ></TextField>
  );
};

SearchBox.propTypes = {
  searchChange: PropTypes.func,
};
export default SearchBox;
