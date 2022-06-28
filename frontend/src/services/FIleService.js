import axios from "axios";
import { API_URL } from "../util/Constants";

class FileService {
  download(fileName) {
    return axios.get(API_URL + "api/file/download/" + fileName, {
      responseType: "blob",
    });
  }
}

export default new FileService();
