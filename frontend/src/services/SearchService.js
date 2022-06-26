import { API_URL } from "../util/Constants";

class SearchService {
  search(queryData) {
    return axios.post(API_URL + "api/search", queryData);
  }
}

export default new SearchService();
