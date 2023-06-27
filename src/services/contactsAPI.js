import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export async function registerUserAPI(userData) {
  try {
    const response = await axios.post('/users/signup', userData);
    return response.data;
  } catch (error) {
    console.error('Registration failed:', error);
    throw error;
  }
}

export async function loginUserAPI(userData) {
  try {
    const response = await axios.post('/users/login', userData);
    return response.data;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
}
