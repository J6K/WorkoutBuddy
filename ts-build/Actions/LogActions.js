export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
const loginSuccess = (profile) => {
    return {
        type: LOGIN_SUCCESS,
        profile,
    };
};
const loginError = (err) => {
    return {
        type: LOGIN_SUCCESS,
        err,
    };
};
export const login = (history) => {
    const lock = new Auth0Lock('waLh6LFI5mkxJEckZDmaYc5q54nIYB4p', 'workoutbuddy.auth0.com');
    console.log('login gets fired');
    return (dispatch) => {
        console.log('we get chea');
        lock.show((err, profile, token) => {
            console.log('are we getting to this part?');
            if (err) {
                console.log('the error is ,', err);
                return dispatch(loginError(err));
            }
            console.log('we get chea2');
            localStorage.setItem('profile', JSON.stringify(profile));
            localStorage.setItem('id_token', token);
            history.push('/dashboard');
            return dispatch(loginSuccess(profile));
        });
    };
};
export const logoutSuccess = (profile) => {
    return {
        type: LOGOUT_SUCCESS,
    };
};
export const logout = () => {
    return (dispatch) => {
        localStorage.removeItem('id_token');
        localStorage.removeItem('profile');
        // @ts-ignore
        return dispatch(logoutSuccess());
    };
};
//# sourceMappingURL=LogActions.js.map