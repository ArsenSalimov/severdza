import axios from 'axios';

const API_URL = 'https://localhost:3000';

export const signIn = (credentials) => axios.post(`${API_URL}/api/sign-in`, credentials);