import axios from 'axios';

export async function loadFeed({commit}, page = 0) {
    const host = process.env.NODE_ENV == 'production'
        ?  '94.250.249.85'
        : '127.0.0.1';
    const {data: {items, total}} = await axios.get(`http://${host}:3000/api/feed?page=${page}`);
    commit('addFeed', {items, total});

}