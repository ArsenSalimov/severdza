import axios from 'axios';

export async function loadFeed({commit}, page = 0) {
    const {data: {items, total}} = await axios.get(`http://localhost:3000/api/feed?page=${page}`);
    commit('addFeed', {items, total});

}