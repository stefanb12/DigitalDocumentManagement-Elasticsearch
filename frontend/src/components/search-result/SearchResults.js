import React, { useEffect, useState } from "react";
import SearchResultItem from "./SearchResultItem";

export default function SearchResults(props) {
  const [searchResults, setSearchResults] = useState(props.searchResults);

  useEffect(() => {
    setSearchResults(props.searchResults);
  }, [props]);

  return (
    <div id="content" className="container">
      <div className="panel panel-default">
        <div className="panel-body">
          <h6 className="nomargin">
            {searchResults.length === 1 ? (
              <> About {searchResults.length} result </>
            ) : (
              <> About {searchResults.length} results </>
            )}
            <small className="text-success">
              ({props.searchTime} seconds){" "}
            </small>
          </h6>
          <hr className="nomargin-bottom margin-top-10" />

          {searchResults.map((searchResult, index) => (
            <SearchResultItem
              key={index}
              searchResult={searchResult}
              lastSearchResult={searchResults.length - 1 === index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
