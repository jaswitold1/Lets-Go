import React from "react";

function Search({ handleSearch, search }) {
  return (
    <div className='search'>
      <p>⌕</p>
      <input
        onChange={handleSearch}
        name='search'
        value={search}
        placeholder='Search'
      />
    </div>
  );
}

export default Search;
