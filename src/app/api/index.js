import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const signIn = (credentials) => axios.post(`${API_URL}/auth/sign-in`, credentials);

export const signUp = (userInfo) => axios.post(`${API_URL}/auth/sign-up`, userInfo);