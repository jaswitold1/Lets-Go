import React, { useState } from "react";

function Search() {
  const [search, setSearch] = useState();

  const handleSearch = (event) => {
    setSearch({
      ...search,
      [event.target.name]: event.target.value,
    });
  };
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
