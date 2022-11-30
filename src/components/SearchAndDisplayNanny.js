import React from "react";

const SearchAndDisplayNanny = ({ insertNanny, query, info }) => {
    const search = () => {
      if (query) {
        return info.filter((item) => (item.name.includes(query))) ;
      }
      return info;
    };
    return <div className="cards">{insertNanny(search(query))}</div>;
  };
  export default SearchAndDisplayNanny