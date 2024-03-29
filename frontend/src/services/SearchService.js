import axios from "axios";
import { API_URL } from "../util/Constants";

class SearchService {
  search(queryData) {
    return axios.post(API_URL + "api/search", queryData);
  }

  geoSearch(queryData) {
    return axios.post(API_URL + "api/search/geo", queryData);
  }
}

export default new SearchService();
