// action - account reducer
export const LOGIN = '@auth/LOGIN';
export const LOGOUT = '@auth/LOGOUT';
export const REGISTER = '@auth/REGISTER';

export const loginSuccess = (user) => ({
    type: LOGIN,
    payload: user,
});

export const logoutSuccess = () => ({
    type: LOGOUT,
});