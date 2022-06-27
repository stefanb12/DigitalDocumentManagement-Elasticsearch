import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

export default function SearchResultItem(props) {
  const [searchResult, setSearchResult] = useState(props.searchResult);

  useEffect(() => {
    setSearchResult(props.searchResult);
  }, [props]);

  return (
    <>
      <div className="clearfix search-result">
        <h4>
          <Link to="#">{searchResult.filename}</Link>
        </h4>
        <p>
          <i className="text-info">Name:</i> {searchResult.name}
        </p>
        <p>
          <i className="text-info">Surname:</i> {searchResult.surname}
        </p>
        <p>
          <i className="text-info">Email:</i> {searchResult.email}
        </p>
        <p>
          <i className="text-info">Address:</i> {searchResult.address}
        </p>
        <p>
          <i className="text-info">Degree of education:</i>{" "}
          {searchResult.degreeOfEducation}
        </p>
        <p>
          <i className="text-success">Highlight:</i>{" "}
          {parse(searchResult.highlight)}
        </p>
      </div>
      {props.lastSearchResult ? (
        <></>
      ) : (
        <hr className="nomargin-bottom margin-top-10" />
      )}
    </>
  );
}
