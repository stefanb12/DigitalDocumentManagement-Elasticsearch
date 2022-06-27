import React from "react";
import SearchPage from "../pages/SearchPage";
import SearchService from "../services/SearchService";

export default function SearchContainer() {
  const handleSearch = async (queryData) => {
    console.log(queryData);
    // SearchService.search(queryData)
    //   .then((response) => {
    //     alert(response.data);
    //   })
    //   .catch((error) => {
    //     alert(error);
    //   });
  };

  return <SearchPage search={handleSearch} />;
}
