import axios from 'axios';

export async function loadFeed({commit}) {
    const response = await axios.get('http://localhost:3000/api/feed');
    commit('addFeed', response.data);
}