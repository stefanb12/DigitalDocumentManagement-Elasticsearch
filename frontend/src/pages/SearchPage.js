import React, { useState } from "react";
import "../assets/css/searchStyle.css";
import SearchInputField from "../components/search/SearchInputField";

export default function SearchPage() {
  const [numberOfSearchFields, setNumberOfSearchFields] = useState(1);

  const handleAddSearchInputField = () => {
    let currentNumber = numberOfSearchFields;
    if (currentNumber !== 4) {
      setNumberOfSearchFields((currentNumber += Number(1)));
    } else {
      alert("You can not add more than four search fields");
    }
  };

  const handleSubSearchInputField = () => {
    let currentNumber = numberOfSearchFields;
    setNumberOfSearchFields((currentNumber -= Number(1)));
  };

  const handleSearch = () => {
    console.log("Call search");
  };

  return [...Array(numberOfSearchFields)].map((number, index) => (
    <SearchInputField
      search={handleSearch}
      addSearchInputField={handleAddSearchInputField}
      subSearchInputField={handleSubSearchInputField}
      isSearchButtonVisible={index === numberOfSearchFields - 1}
    />
  ));
}
