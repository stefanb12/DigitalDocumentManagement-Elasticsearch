import React, { useState } from "react";
import cities from "../../data/cities.json";

export default function GeoSearchInputField(props) {
  const [selectedCity, setSelectedCity] = useState(
    cities[0].lat + ";" + cities[0].lng
  );
  const [distance, setDistance] = useState(1);

  const handleSelectCity = (event) => {
    setSelectedCity(event.target.value);
  };

  const handleChangeDistance = (event) => {
    setDistance(event.target.value);
  };

  const handleSearch = () => {
    const lat_lon = selectedCity.split(";");
    const queryData = {
      latitude: lat_lon[0],
      longitude: lat_lon[1],
      distance,
    };
    props.geoSearch(queryData);
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
                      <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                        <select
                          className="form-control"
                          id="exampleFormControlSelect1"
                          value={selectedCity}
                          onChange={handleSelectCity}
                        >
                          {cities.map((city, index) => (
                            <option
                              key={index}
                              value={city.lat + ";" + city.lng}
                            >
                              {city.city}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="col-lg-8 col-md-6 col-sm-12 p-0">
                        <input
                          type="number"
                          min="1"
                          placeholder="Distance in kilometers"
                          className="form-control"
                          id="search"
                          name="search"
                          value={distance}
                          onChange={handleChangeDistance}
                        />
                      </div>
                      <div className="col-lg-1 col-md-3 col-sm-12 p-0">
                        <button className="btn btn-base" onClick={handleSearch}>
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
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                          </svg>
                        </button>
                      </div>
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
