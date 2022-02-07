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
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-sm-6">
            <div class="card-box bg-blue" onClick={navigateToApplicationPage}>
              <div class="inner">
                <h3> Application </h3>
                <p> Apply for a job </p>
              </div>
              <div class="icon">
                <i class="fa fa-file-pdf-o" aria-hidden="true"></i>
              </div>
              <Link to="/application" class="card-box-footer">
                View More <i class="fa fa-arrow-circle-right"></i>
              </Link>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="card-box bg-green" onClick={navigateToSearchPage}>
              <div class="inner">
                <h3> Search </h3>
                <p> Search applicants </p>
              </div>
              <div class="icon">
                <i class="fa fa-search" aria-hidden="true"></i>
              </div>
              <Link to="/search" class="card-box-footer">
                View More <i class="fa fa-arrow-circle-right"></i>
              </Link>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="card-box bg-orange" onClick={navigateToGeoLocationPage}>
              <div class="inner">
                <h3> Geo Location </h3>
                <p> Search by location radius </p>
              </div>
              <div class="icon">
                <i class="fa fa-map-marker" aria-hidden="true"></i>
              </div>
              <Link to="/geo-location-search" class="card-box-footer">
                View More <i class="fa fa-arrow-circle-right"></i>
              </Link>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="card-box bg-red" onClick={navigateToStatisticsPage}>
              <div class="inner">
                <h3> Statistics </h3>
                <p> Application statistics </p>
              </div>
              <div class="icon">
                <i class="fa fa-line-chart"></i>
              </div>
              <Link to="/statistics" class="card-box-footer">
                View More <i class="fa fa-arrow-circle-right"></i>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div>{props.children}</div>
        </div>
      </div>
      <div class="col-md-12">
        <div class="container bootstrap snippets bootdey">
          <footer class="footer">
            <hr />
            <p>&copy; UDD Elasticsearch 2022</p>
          </footer>
        </div>
      </div>
    </div>
  );
}
