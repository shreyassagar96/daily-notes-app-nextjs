import React from "react";
import { MdSearch } from "react-icons/md";

const Search = ({ handleSearchText }) => {
  return (
    <div className="search">
      <MdSearch />
      <input
        onChange={(e) => handleSearchText(e.target.value)}
        type="text"
        placeholder="Search your notes..."
      />
    </div>
  );
};

export default Search;
