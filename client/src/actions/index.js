import axios from "axios";
import typicode from "../apis/typicode";

import { FETCH_USER, FETCH_POSTS } from "./types";

export const fetchUser = () => {
  return async (dispatch) => {
    const response = await axios.get("/api/user");
    console.log(response);
    dispatch({ type: FETCH_USER, payload: response.data });
  };
};

// blog post REST API actions

export const fetchPosts = () => {
  return async (dispatch) => {
    const response = await typicode.get("/posts");
    console.log(response);
    dispatch({ type: FETCH_POSTS, payload: response.data });
  };
};
