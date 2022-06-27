import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import { Link } from "react-router-dom";

export default function SearchResult(props) {
  const [searchResult, setSearchResult] = useState(props.searchResult);

  useEffect(() => {
    setSearchResult(props.searchResult);
  }, [props]);

  return (
    <div id="content" className="container">
      <div className="panel panel-default">
        <div className="panel-body">
          <h6 className="nomargin">
            {searchResult.length === 1 ? (
              <> About {searchResult.length} result </>
            ) : (
              <> About {searchResult.length} results </>
            )}
            <small className="text-success">
              ({props.searchTime} seconds){" "}
            </small>
          </h6>
          <hr className="nomargin-bottom margin-top-10" />

          {searchResult.map((item, index) => (
            <>
              <div className="clearfix search-result" key={index}>
                <h4>
                  <Link to="#">{item.filename}</Link>
                </h4>
                <p>
                  <i className="text-info">Name:</i> {item.name}
                </p>
                <p>
                  <i className="text-info">Surname:</i> {item.surname}
                </p>
                <p>
                  <i className="text-info">Email:</i> {item.email}
                </p>
                <p>
                  <i className="text-info">Address:</i> {item.address}
                </p>
                <p>
                  <i className="text-info">Degree of education:</i>{" "}
                  {item.degreeOfEducation}
                </p>
                <p>
                  <i className="text-success">Highlight:</i>{" "}
                  {parse(item.highlight)}
                </p>
              </div>
              {searchResult.length !== index + 1 ? (
                <hr className="nomargin-bottom margin-top-10" />
              ) : (
                <></>
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
