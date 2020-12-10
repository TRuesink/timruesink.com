import { combineReducers } from "redux";
import authReducer from "./authReducer";
import navReducer from "./navReducer";
import postReducer from "./postReducer";
import { reducer as formReducer } from "redux-form";
import buttonReducer from "./buttonReducer";

export default combineReducers({
  auth: authReducer,
  posts: postReducer,
  nav: navReducer,
  form: formReducer,
  button: buttonReducer,
});
