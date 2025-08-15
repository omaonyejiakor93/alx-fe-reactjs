import axios from 'axios';

const BASE_URL = 'https://api.github.com/users/';

/**
 * Fetch GitHub user data by username
 * @param {string} username - GitHub username
 * @returns {Promise<Object>} - User data from GitHub API
 */
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}${username}`);
    return response.data;
  } catch (error) {
    throw new Error('User not found');
  }
};

// For quick testing with your username
// fetchUserData('Omaonyejiakor93').then(console.log).catch(console.error);