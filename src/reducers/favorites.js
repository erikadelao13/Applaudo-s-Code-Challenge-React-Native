import { SET_TO_FAVORITES, DELETE_FROM_FAVORITES } from '../actions/favorites';

const INITIAL_STATE = {
  favorites: []
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_TO_FAVORITES:
      return {
        ...state,
        favorite: action.payload
      }
    case DELETE_FROM_FAVORITES:
      return {
        ...state,
        favorites: action.payload,
      };
    default:
      return state;
  }
}

export default user;