import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import FIleService from "../../services/FIleService";

export default function SearchResultItem(props) {
  const [searchResult, setSearchResult] = useState(props.searchResult);

  useEffect(() => {
    setSearchResult(props.searchResult);
  }, [props]);

  const handleDownloadFile = () => {
    FIleService.download(searchResult.filename)
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", searchResult.filename);
        document.body.appendChild(link);
        link.click();
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <>
      <div className="clearfix search-result">
        <h4>
          <Link to="#" onClick={handleDownloadFile}>
            {searchResult.filename}
          </Link>
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
