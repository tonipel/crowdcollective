import axios from 'axios';

const API_URL = "http://localhost:8000/api/token/";

export const loginUser = async (username: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}`, { username, password });
    localStorage.setItem("access", response.data.access);
    localStorage.setItem("refresh", response.data.refresh);
    return response.data;
  } catch (error) {
    console.error("Login error:", error);
    return null;
  }
};

export const refreshToken = async () => {
  try {
    const response = await axios.post(`${API_URL}refresh/`, {
      refresh: localStorage.getItem("refresh"),
    });
    localStorage.setItem("access", response.data.access);
    return response.data.access;
  } catch (error) {
    console.error("Error refreshing token:", error);
    return null;
  }
};

export const client = axios.create({
  baseURL: "http://localhost:8000/",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("access")}`,
  },
});
