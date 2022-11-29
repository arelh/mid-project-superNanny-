import React from "react";
import Avatar from "./Avatar";

function Map({ personsArr, inputValue }) {
  const insertPerson = () => {
    let filtered = personsArr;
    if (inputValue) {
      filtered = personsArr.filter((person) => {
        return person.name.toLowerCase().includes(inputValue.toLowerCase());
      });
    }
    return filtered.map((person, i) => <Avatar key={i} personData={person} />);
  };
  return <>{insertPerson()}</>;
}

export default Map;
