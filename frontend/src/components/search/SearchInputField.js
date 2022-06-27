import React, { useState } from "react";
import { convertDegreeOfEducation } from "../../util/Converter";

const boolOperatorOptions = [
  {
    label: "AND",
    value: "AND",
  },
  {
    label: "OR",
    value: "OR",
  },
];

export default function SearchInputField(props) {
  const [selectedFieldName, setSelectedFieldName] = useState(
    props.fieldNameOptions[0].value || "name"
  );
  const [selectedBoolOperator, setSelectedBoolOperator] = useState("AND");
  const [searchValue, setSearchValue] = useState("");

  const handleClickAdd = () => {
    if (searchValue === "") {
      alert("Search value can not be empty");
    } else if (selectedFieldName === "degreeOfEducation") {
      let convertedValue = convertDegreeOfEducation(searchValue);
      if (convertedValue === "invalid") {
        alert("Degree of education must be between 1 and 8");
      } else {
        props.addSearchInputField(
          selectedFieldName,
          convertedValue,
          selectedBoolOperator
        );
      }
    } else {
      props.addSearchInputField(
        selectedFieldName,
        searchValue,
        selectedBoolOperator
      );
    }
  };

  const handleClickSub = () => {
    props.subSearchInputField();
  };

  const handleChangeFieldName = (event) => {
    props.changeFieldName(event.target.value);
    setSelectedFieldName(event.target.value);
  };

  const handleChangeBoolOperator = (event) => {
    props.changeBoolOperator(event.target.value);
    setSelectedBoolOperator(event.target.value);
  };

  const handleChangeSearchValue = (event) => {
    if (selectedFieldName === "degreeOfEducation") {
      let currentSearchValue = searchValue;
      if (currentSearchValue === "") {
        currentSearchValue = "1";
      } else {
        currentSearchValue = event.target.value.toString();
      }
      let convertedValue = convertDegreeOfEducation(currentSearchValue);
      if (convertedValue === "invalid") {
        alert("Degree of education must be between 1 and 8");
      } else {
        props.changeSearchValue(convertedValue);
        setSearchValue(currentSearchValue);
      }
    } else {
      props.changeSearchValue(event.target.value);
      setSearchValue(event.target.value);
    }
  };

  const handleSearch = () => {
    if (searchValue === "") {
      alert("Search value can not be empty");
    } else if (selectedFieldName === "degreeOfEducation") {
      let convertedValue = convertDegreeOfEducation(searchValue);
      if (convertedValue === "invalid") {
        alert("Degree of education must be between 1 and 8");
      } else {
        props.search(selectedFieldName, convertedValue, selectedBoolOperator);
      }
    } else {
      props.search(selectedFieldName, searchValue, selectedBoolOperator);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 card-margin">
          <div className="card search-form">
            <div className="card-body p-0">
              <div id="search-form">
                <div className="row">
                  <div className="col-12">
                    <div className="row no-gutters">
                      <div className="col-lg-4 col-md-3 col-sm-12 p-0">
                        <select
                          className="form-control"
                          value={selectedFieldName}
                          onChange={handleChangeFieldName}
                        >
                          {props.fieldNameOptions.map((option, index) => (
                            <option key={index} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>
                      {selectedFieldName === "degreeOfEducation" ? (
                        <div
                          className={
                            props.isSearchButtonVisible
                              ? "col-lg-6 col-md-6 col-sm-12 p-0"
                              : "col-lg-5 col-md-6 col-sm-12 p-0"
                          }
                        >
                          <input
                            type="number"
                            min="1"
                            max="8"
                            placeholder="Search"
                            className="form-control"
                            id="search"
                            name="search"
                            onChange={handleChangeSearchValue}
                          />
                        </div>
                      ) : (
                        <div
                          className={
                            props.isSearchButtonVisible
                              ? "col-lg-6 col-md-6 col-sm-12 p-0"
                              : "col-lg-5 col-md-6 col-sm-12 p-0"
                          }
                        >
                          <input
                            type="text"
                            placeholder="Search"
                            className="form-control"
                            id="search"
                            name="search"
                            onChange={handleChangeSearchValue}
                          />
                        </div>
                      )}
                      {props.isSearchButtonVisible ? (
                        <div className="col-lg-1 col-md-3 col-sm-12 p-0">
                          <button
                            className="btn btn-base"
                            onClick={handleSearch}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-search"
                            >
                              <circle cx="11" cy="11" r="8"></circle>
                              <line
                                x1="21"
                                y1="21"
                                x2="16.65"
                                y2="16.65"
                              ></line>
                            </svg>
                          </button>
                        </div>
                      ) : (
                        <div className="col-lg-2 col-md-3 col-sm-12 p-0">
                          <select
                            className="form-control"
                            value={selectedBoolOperator}
                            onChange={handleChangeBoolOperator}
                          >
                            {boolOperatorOptions.map((option, index) => (
                              <option key={index} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      )}
                      {(() => {
                        if (
                          props.isSearchButtonVisible &&
                          props.isLastSearchInputField
                        ) {
                          return (
                            <div className="col-lg-1 col-md-3 col-sm-12 p-0">
                              <button
                                className="btn btn-base"
                                onClick={handleClickSub}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-activity"
                                >
                                  <circle cx="12" cy="12" r="10"></circle>
                                  <line x1="8" y1="12" x2="16" y2="12"></line>
                                </svg>
                              </button>
                            </div>
                          );
                        } else if (props.isSearchButtonVisible) {
                          return (
                            <div className="col-lg-1 col-md-3 col-sm-12 p-0">
                              <button
                                className="btn btn-base"
                                onClick={handleClickAdd}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-activity"
                                >
                                  <circle cx="12" cy="12" r="10"></circle>
                                  <line x1="12" y1="8" x2="12" y2="16"></line>
                                  <line x1="8" y1="12" x2="16" y2="12"></line>
                                </svg>
                              </button>
                            </div>
                          );
                        } else {
                          return (
                            <div className="col-lg-1 col-md-3 col-sm-12 p-0">
                              <button
                                className="btn btn-base"
                                onClick={handleClickSub}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-activity"
                                >
                                  <circle cx="12" cy="12" r="10"></circle>
                                  <line x1="8" y1="12" x2="16" y2="12"></line>
                                </svg>
                              </button>
                            </div>
                          );
                        }
                      })()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
