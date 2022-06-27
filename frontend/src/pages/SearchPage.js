import React, { useEffect, useState } from "react";
import "../assets/css/searchStyle.css";
import SearchFields from "../components/search/SearchFields";
import SearchResults from "../components/search-result/SearchResults";

export default function SearchPage(props) {
  const [searchResults, setSearchResults] = useState(props.searchResults);
  const [searchTime, setSearchTime] = useState(props.searchTime);

  useEffect(() => {
    setSearchResults(props.searchResults);
    setSearchTime(props.searchTime);
  }, [props]);

  const handleSearch = (queryData) => {
    props.search(queryData);
  };

  return (
    <>
      <SearchFields search={handleSearch} />
      {searchResults.length > 0 ? (
        <SearchResults searchResults={searchResults} searchTime={searchTime} />
      ) : (
        <></>
      )}
    </>
  );
}
