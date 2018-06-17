import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import clientReducer from './clientReducer';

export default combineReducers({
  myClients: clientReducer,
  auth: authReducer,
  errors: errorReducer,
});
