import * as api from '../api';

export const signIn = async (context, credentials) => {
    context.state.user = await api.signIn(credentials);
};

export const signUp = async (context, userInfo) => {
    await api.signUp(userInfo);
};