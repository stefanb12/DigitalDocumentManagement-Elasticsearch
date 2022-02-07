import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ApplicationContainer from "./containers/ApplicationContainer";
import SearchContainer from "./containers/SearchContainer";
import GeoLocationSearchContainer from "./containers/GeoLocationSearchContainer";
import StatisticsContainer from "./containers/StatisticsContainer";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./routing/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Redirect exact from="/" to="/application" />
          <Route path="/application" component={ApplicationContainer} />
          <Route path="/search" component={SearchContainer} />
          <Route
            path="/geo-location-search"
            component={GeoLocationSearchContainer}
          />
          <Route path="/statistics" component={StatisticsContainer} />
          <Route path="/*" component={NotFoundPage} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
