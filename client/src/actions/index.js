import axios from "axios";
import typicode from "../apis/typicode";
import history from "../history";

import { FETCH_USER, FETCH_POSTS, CREATE_USER } from "./types";

export const fetchUser = () => {
  return async (dispatch) => {
    const response = await axios.get("/api/user");
    //console.log(response);
    dispatch({ type: FETCH_USER, payload: response.data });
  };
};

// blog post REST API actions

export const fetchPosts = () => {
  return async (dispatch) => {
    const response = await typicode.get("/posts");
    //console.log(response);
    dispatch({ type: FETCH_POSTS, payload: response.data });
  };
};

// action to change active nav item

export const changeNav = (item) => {
  return { type: item };
};

export const buttonLoading = (item) => {
  return { type: item };
};

// register action
export const registerUser = (registerData) => {
  console.log(registerData);
  return async (dispatch) => {
    const response = await axios.post("/api/register", {
      firstName: registerData.first,
      lastName: registerData.last,
      email: registerData.email,
      password: registerData.password,
    });
    console.log(response);
    dispatch({ type: CREATE_USER, payload: response.data });
    history.push("/");
  };
};
