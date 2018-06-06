import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import { GET_ERRORS, SET_CURRENT_USER } from '../actions/types';

// Register User action Funtion
// eslint-disable-next-line
export const registerUser = (userData, history) => (dispatch) => {
  axios.post('/api/users/register', userData)
    .then(res => history.push('/login'))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    }));
};

export const loginUser = userData => dispatch => {
  axios.post('/api/users/login', userData)
  .then(res => {
    // Save to local Storage
    const { token } = res.data;
    localStorage.setItem('jwtToken', token);
    // Set Auth Header on a file header = 'Authorization'
    setAuthToken(token);
    const decoded = jwt_decode(token);
    // Set current user
    dispatch(setCurrentUser(decoded));
  })
  .catch(err => dispatch({
    type: GET_ERRORS,
    payload: err.response.data
  })
);
};

// Set Logged in User
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};
