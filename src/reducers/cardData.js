import { SET_DATA_CARD } from '../actions/cardData';

const INITIAL_STATE = {};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_DATA_CARD:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
}

export default user;