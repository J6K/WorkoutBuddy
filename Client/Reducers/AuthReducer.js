import { LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT_SUCCESS } from '../Actions/LogActions';

const jwtDecode = require('jwt-decode');

const checkTokenExpiry = () => {
  const jwt = localStorage.getItem('id_token');
  if (jwt) {
    const jwtExp = jwtDecode(jwt).exp;
    const expiryDate = new Date(0);
    expiryDate.setUTCSeconds(jwtExp);

    if (new Date() < expiryDate) {
      return true;
    }
  }
  return false;
};


const getProfile = () => {
  const profile = localStorage.getItem('profile');
  return JSON.parse(profile);
};

const auth = (state = {
  isAuthenticated: checkTokenExpiry(),
  profile: getProfile(),
  err: '',
}, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS :
      return Object.assign({}, state, { isAuthenticated: true, profile: action.profile });
    case LOGIN_ERROR :
      return Object.assign({}, state, { isAuthenticated: false, profile: null, error: action.error });
    case LOGOUT_SUCCESS :
      return Object.assign({}, state, { isAuthenticated: false, profile: null });
    default:
      return state;
  }
};

export default auth;
