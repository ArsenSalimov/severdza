import axios from 'axios';

const API_URL = 'http://localhost:3000/';

export default axios.create({
   baseUrl:  API_URL
});