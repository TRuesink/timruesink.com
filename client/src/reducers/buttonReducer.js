const buttonReducer = (state = "", action) => {
  switch (action.type) {
    case "LOADING":
      return "loading";
    case "NOT_LOADING":
      return "";
    default:
      return state;
  }
};

export default buttonReducer;
