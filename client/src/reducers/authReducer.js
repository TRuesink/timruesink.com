import { CREATE_USER, FETCH_USER } from "../actions/types";

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_USER:
      return action.payload;
    case CREATE_USER:
      return action.payload;
    default:
      return state;
  }
};

export default authReducer;
