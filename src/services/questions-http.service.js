import http from './http-common';

export const getAllQuestions = () => {
  console.log("getAllQuestions");
  return http.get("/questions");
};

export const getQuestion = (id) => {
  console.log("getQuestion");
  return http.get(`/questions/${id}`)
};

export const createQuestion = (data) => {
  console.log("createQuestion=" + JSON.stringify(data));
  return http.post(`/users/`, data);
};

export const updateQuestion = (id, data) => {
  console.log("updateQuestion=" + JSON.stringify(data));
  return http.patch(`/users/${id}`, data);
};

export const removeQuestion = (id) => {
  console.log("removeQuestion");
  return http.delete(`/users/${id}`);
};