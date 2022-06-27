import React, { useState } from "react";
import SearchPage from "../pages/SearchPage";
import SearchService from "../services/SearchService";

export default function SearchContainer() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchTime, setSearchTime] = useState("");

  const handleSearch = async (queryData) => {
    let startTime = Date.now();
    SearchService.search(queryData)
      .then((response) => {
        setSearchResults(response.data);
        calculateSearchTime(startTime);
      })
      .catch((error) => {
        alert(error);
      });
  };

  const calculateSearchTime = (startTime) => {
    let now = Date.now();
    let seconds = Math.floor((now - startTime) / 1000);
    let milliseconds = Math.floor((now - startTime) % 1000);
    setSearchTime(`${seconds}.${milliseconds} seconds`);
  };

  return (
    <SearchPage
      search={handleSearch}
      searchResults={searchResults}
      searchTime={searchTime}
    />
  );
}
