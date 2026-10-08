import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/api/students`;

export const getStudents = () => {
  return axios.get(API_URL);
};

export const createStudent = (student) => {
  return axios.post(API_URL, student);
};

export const deleteStudent = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};