import React from "react";
import "./SearchBar.css"
const SearchBar = ({placeholderText}) => {
    return (
        <input placeholder={placeholderText}  className="searchbar" />
    )
}

export default SearchBar;