import React, { useState } from "react";
import GeoLocationSearchPage from "../pages/GeoLocationSearchPage";
import SearchService from "../services/SearchService";

export default function GeoLocationSearchContainer() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchTime, setSearchTime] = useState("");

  const handleGeoSearch = async (queryData) => {
    let startTime = Date.now();
    SearchService.geoSearch(queryData)
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
    <GeoLocationSearchPage
      geoSearch={handleGeoSearch}
      searchResults={searchResults}
      searchTime={searchTime}
    />
  );
}
