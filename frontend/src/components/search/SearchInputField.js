import React, { useState } from "react";

export default function SearchInputField(props) {
  const [selectedFieldName, setSelectedFieldName] = useState("name");
  const [selectedBoolOperator, setSelectedBoolOperator] = useState("AND");
  const [searchValue, setSearchValue] = useState("");
  const [fieldNameOptions] = useState([
    {
      label: "Name",
      value: "name",
    },
    {
      label: "Surname",
      value: "surname",
    },
    {
      label: "Degree of education",
      value: "degreeOfEducation",
    },
    {
      label: "CV Document (PDF)",
      value: "fileContent",
    },
  ]);
  const [boolOperatorOptions] = useState([
    {
      label: "AND",
      value: "AND",
    },
    {
      label: "OR",
      value: "OR",
    },
  ]);

  const handleClickAdd = () => {
    props.addSearchInputField();
  };

  const handleClickSub = () => {
    props.subSearchInputField();
  };

  const handleChangeFieldName = (event) => {
    setSelectedFieldName(event.target.value);
  };

  const handleChangeBoolOperator = (event) => {
    setSelectedBoolOperator(event.target.value);
  };

  const handleChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = () => {
    console.log(searchValue);
    props.search(); // ADD PARAMS
  };

  return (
    <div classNameName="container">
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
                          {fieldNameOptions.map((option) => (
                            <option value={option.value}>{option.label}</option>
                          ))}
                        </select>
                      </div>
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
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
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
                            {boolOperatorOptions.map((option) => (
                              <option value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      )}
                      {props.isSearchButtonVisible ? (
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
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="feather feather-activity"
                            >
                              <circle cx="12" cy="12" r="10"></circle>
                              <line x1="12" y1="8" x2="12" y2="16"></line>
                              <line x1="8" y1="12" x2="16" y2="12"></line>
                            </svg>
                          </button>
                        </div>
                      ) : (
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
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="feather feather-activity"
                            >
                              <circle cx="12" cy="12" r="10"></circle>
                              <line x1="8" y1="12" x2="16" y2="12"></line>
                            </svg>
                          </button>
                        </div>
                      )}
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
