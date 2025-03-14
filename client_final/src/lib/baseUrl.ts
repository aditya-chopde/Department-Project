import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000/api", // Replace with your actual API URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
