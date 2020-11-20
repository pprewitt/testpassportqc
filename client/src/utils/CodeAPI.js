import axios from "axios";

export default {
  // Gets all code
  getCodes: function() {
    return axios.get("/api/code");
  },
  // Gets the snips with the given keywords
  getCodesByKey: function(keywords) {
    return axios.get("/api/codes/" + keywords);
  },
  getCode: function(id) {
    return axios.get("/api/code/" + id);
  },
  // Deletes the snip with the given id
  deleteCode: function(id) {
    return axios.delete("/api/codes/" + id);
  },
  // Saves a snip to the database
  saveCode: function(codeData) {
    return axios.post("/api/codes", codeData);
  }
};
