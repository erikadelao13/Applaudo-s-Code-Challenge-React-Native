import { SET_TO_FAVORITE } from '../actions/favorites';

const INITIAL_STATE = {};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_TO_FAVORITE:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
}

export default user;