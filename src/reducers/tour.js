import { DISABLE_SHOW_TOUR } from '../actions/tour';
import { DESTROY_SESSION } from '../actions/auth';

const INITIAL_STATE = {
  showTour: true,
};

function tour(state = INITIAL_STATE, action) {
  switch (action.type) {
    case DISABLE_SHOW_TOUR:
      return {
        ...state,
        ...action.payload
      }
    /*default:
        return state; */
    case DESTROY_SESSION:
      return INITIAL_STATE;
    default:
      return state;
  }
}

export default tour;