import axios from "axios";

export default {
  // Gets all examples
  getExamples: function () {
    return axios.get("/api/example");
  },
  // Gets the example with the given id
  getExample: function (id) {
    return axios.get(`/api/example/${id}`);
  },
  // Deletes the example with the given id
  deleteExample: function (id) {
    return axios.delete(`/api/example/${id}`);
  },
  // Saves an example to the database
  saveExample: function (exampleData) {
    return axios.post("/api/example", exampleData);
  },
  getQuestions: function () {
    return axios.get("/api/questions");
  },
  createQuestion: function (questionData) {
    return axios.post('/api/newquestion', questionData);
  },
  register: function (registerData) {
    return axios.post("/api/authentication/register", registerData);
  },
  login: function (loginData) {
    return axios.post("/api/authentication/login", loginData);
  }
};
