import React from 'react';

const SearchBar = (props) => {
  const handleUpdate = (event) => {
    props.onSearch(event.target.value);
  };

  return (
    <input
      type="text"
      className="form-control form-search"
      onChange={handleUpdate}
    />
  );
};

export default SearchBar;
