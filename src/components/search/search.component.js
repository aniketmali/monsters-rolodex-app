import React from "react";
import '../search/search.style.css';

export const SearchBox = ({placeholder, handleChange}) => {
  return (
    <div className='search'>
      <input
        type="search"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};
