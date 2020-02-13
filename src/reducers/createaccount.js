import {
  SET_CREATE_ACCOUNT_DATA,
  CLEAN_ACCOUNT_DATA, SELECT_GENDER,
  GET_QUESTIONS_API
} from '../actions/createaccount';
import { DESTROY_SESSION } from '../actions/auth';
const INITIAL_STATE = {
  data: {},
  genderSelect: "",
  questionsObj: {},
};
function accounts(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_CREATE_ACCOUNT_DATA:
      return {
        ...state,
        questionsObj: action.payload
      }
    case GET_QUESTIONS_API:
      return {
        ...state,
        data: action.payload
      }
    case SELECT_GENDER:
      return {
        ...state,
        genderSelect: action.payload
      }
    case CLEAN_ACCOUNT_DATA:
      return INITIAL_STATE;
    case DESTROY_SESSION:
      return INITIAL_STATE;
    default:
      return state;
  }
}
export default accounts;