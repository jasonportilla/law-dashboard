import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import { GET_ERRORS, SET_CURRENT_USER, ADD_NEW_CLIENT, GET_ALL_CLIENTS } from '../actions/types';

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

// Create new Client action Funtion
// eslint-disable-next-line

export const createNewClient = (userData, history) => (dispatch) => {
  axios.post('/api/client-profile/', userData)
    .then((res) => {
      dispatch({
        type: ADD_NEW_CLIENT,
        payload: res.data,
      });
      history.push('/dashboard/clients');
    })
    .catch(err => dispatch({
      type: ADD_NEW_CLIENT,
      payload: {},
    }));
};

// get all Clients action Funtion
// eslint-disable-next-line
export const getClientList = () => (dispatch) => {
  axios.get('/api/client-profile/')
    .then((res) => {
      dispatch({
        type: GET_ALL_CLIENTS,
        payload: res.data,
      });
    })
    .catch(err => dispatch({
      type: GET_ALL_CLIENTS,
      payload: {},
    }));
};

export const loginUser = userData => (dispatch) => {
  axios.post('/api/users/login', userData)
    .then((res) => {
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
      payload: err.response.data,
    }));
};

// Set Logged in User
export const setCurrentUser = decoded => ({
  type: SET_CURRENT_USER,
  payload: decoded,
});

export const logoutUser = () => (dispatch) => {
  // Remove token from localstorage
  localStorage.removeItem('jwtToken');
  // remove auth header for future requests
  setAuthToken(false);
  // set Current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};

