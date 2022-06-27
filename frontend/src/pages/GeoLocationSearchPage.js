import React, { useEffect, useState } from "react";
import "../assets/css/searchStyle.css";
import GeoSearchInputField from "../components/geo-search/GeoSearchInputField";
import SearchResults from "../components/search-result/SearchResults";

export default function GeoLocationSearchPage(props) {
  const [searchResults, setSearchResults] = useState(props.searchResults);
  const [searchTime, setSearchTime] = useState(props.searchTime);

  useEffect(() => {
    setSearchResults(props.searchResults);
    setSearchTime(props.searchTime);
  }, [props]);

  const handleGeoSearch = (queryData) => {
    props.geoSearch(queryData);
  };

  return (
    <>
      <GeoSearchInputField geoSearch={handleGeoSearch} />
      {searchResults.length > 0 ? (
        <SearchResults searchResults={searchResults} searchTime={searchTime} />
      ) : (
        <></>
      )}
    </>
  );
}
