import { ADD_NEW_CLIENT, GET_ALL_CLIENTS } from '../actions/types';

const initialState = {
  client: null,
  clients: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_NEW_CLIENT:
      return {
        ...state,
        client: action.payload,
      };
    case GET_ALL_CLIENTS:
      return {
        ...state,
        clients: action.payload
      };
    default:
      return state;
  }
}
