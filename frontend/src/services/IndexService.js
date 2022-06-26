import axios from "axios";
import { API_URL } from "../util/Constants";

class IndexService {
  index(cvApplication) {
    const formData = new FormData();
    formData.append("name", cvApplication.name);
    formData.append("surname", cvApplication.surname);
    formData.append("email", cvApplication.email);
    formData.append("address", cvApplication.address);
    formData.append("degreeOfEducation", cvApplication.degreeOfEducation);
    formData.append("file", cvApplication.file);
    formData.append("latitude", cvApplication.latitude);
    formData.append("longitude", cvApplication.longitude);

    return axios.post(API_URL + "api/index", formData);
  }
}

export default new IndexService();
