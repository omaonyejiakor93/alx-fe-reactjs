// src/services/github.services.js
import axios from "axios";

const BASE_URL = "https://api.github.com/users";

// Hardcoded to your username — no parameters
export const fetchMyUser = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/Omaonyejiakor93`);
    return data; // user object
  } catch (error) {
    console.error("Error fetching GitHub user:", error);
    return null;
  }
};