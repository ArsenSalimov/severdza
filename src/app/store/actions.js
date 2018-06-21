import * as api from '../api';

export const signIn = async (context, credentials) => {
    try {
        context.state.user = await api.signIn(credentials);
    } catch (error) {
        console.log(error);
    }
};