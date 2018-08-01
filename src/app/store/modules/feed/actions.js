import axios from 'axios';

export async function loadFeed({commit}, page = 0) {
    const isProduction = process.env.NODE_ENV === 'production';
    const host = process.env.HOST;
    const port = process.env.PORT;
    const schema = isProduction ? 'https' : 'http';
    const baseUrl = `${schema}://${host}:${port}`;

    const {data: {items, total}} = await axios.get(`${baseUrl}/api/feed?page=${page}`);
    commit('addFeed', {items, total});
}