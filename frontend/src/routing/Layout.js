import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "../assets/css/layoutStyle.css";

export default function Layout(props) {
  let history = useHistory();

  const navigateToApplicationPage = () => {
    history.push("/application");
  };

  const navigateToSearchPage = () => {
    history.push("/search");
  };

  const navigateToGeoLocationPage = () => {
    history.push("/geo-location-search");
  };

  const navigateToStatisticsPage = () => {
    history.push("/statistics");
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <div
              className="card-box bg-blue"
              onClick={navigateToApplicationPage}
            >
              <div className="inner">
                <h3> Application </h3>
                <p> Apply for a job </p>
              </div>
              <div className="icon">
                <i className="fa fa-file-pdf-o" aria-hidden="true"></i>
              </div>
              <Link to="/application" className="card-box-footer">
                View More <i className="fa fa-arrow-circle-right"></i>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="card-box bg-green" onClick={navigateToSearchPage}>
              <div className="inner">
                <h3> Search </h3>
                <p> Search applicants </p>
              </div>
              <div className="icon">
                <i className="fa fa-search" aria-hidden="true"></i>
              </div>
              <Link to="/search" className="card-box-footer">
                View More <i className="fa fa-arrow-circle-right"></i>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div
              className="card-box bg-orange"
              onClick={navigateToGeoLocationPage}
            >
              <div className="inner">
                <h3> Geo Location </h3>
                <p> Search by location radius </p>
              </div>
              <div className="icon">
                <i className="fa fa-map-marker" aria-hidden="true"></i>
              </div>
              <Link to="/geo-location-search" className="card-box-footer">
                View More <i className="fa fa-arrow-circle-right"></i>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="card-box bg-red" onClick={navigateToStatisticsPage}>
              <div className="inner">
                <h3> Statistics </h3>
                <p> Application statistics </p>
              </div>
              <div className="icon">
                <i className="fa fa-line-chart"></i>
              </div>
              <Link to="/statistics" className="card-box-footer">
                View More <i className="fa fa-arrow-circle-right"></i>
              </Link>
            </div>
          </div>
        </div>
        {props.children}
      </div>
      <div className="col-md-12">
        <div className="container bootstrap snippets bootdey">
          <footer className="footer">
            <hr />
            <p>&copy; UDD Elasticsearch 2022</p>
          </footer>
        </div>
      </div>
    </div>
  );
}
