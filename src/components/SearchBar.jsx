import React from "react";
import { BsSearch } from "react-icons/bs";

const SearchBar = ({ placeholder }) => {
  const handleSearch = () => {};
  return (
    <div className="searchbar-container">
      <BsSearch
        style={{
          position: "absolute",
          left: "10px",
          fontSize: "13px",
          fontWeight: "800"
        }}
      />
      <input
        type="text"
        style={{
          width: "250px",
          borderRadius: "3px",
          border: "1px solid #eee",
          padding: "5px 15px 5px 35px"
        }}
        placeholder={placeholder}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
