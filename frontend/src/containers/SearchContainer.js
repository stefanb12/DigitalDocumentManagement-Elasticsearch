import React, { useState } from "react";
import SearchResult from "../components/search/SearchResult";
import SearchPage from "../pages/SearchPage";
import SearchService from "../services/SearchService";

export default function SearchContainer() {
  const [searchResult, setSearchResult] = useState([]);
  const [searchTime, setSearchTime] = useState("");

  const handleSearch = async (queryData) => {
    // console.log(queryData);
    let startTime = Date.now();
    SearchService.search(queryData)
      .then((response) => {
        setSearchResult(response.data);
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
    <>
      <SearchPage search={handleSearch} />
      {searchResult.length > 0 ? (
        <SearchResult searchResult={searchResult} searchTime={searchTime} />
      ) : (
        <></>
      )}
    </>
  );
}
