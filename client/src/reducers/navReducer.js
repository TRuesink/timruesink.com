const INITIAL_STATE = {
  timruesink: "item active",
  blog: "item",
  projects: "item",
};

const BASE_STATE = {
  timruesink: "item",
  blog: "item",
  projects: "item",
};

const navReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TIM_RUESINK":
      return { ...BASE_STATE, timruesink: "item active" };
    case "BLOG":
      return { ...BASE_STATE, blog: "item active" };
    case "PROJECTS":
      return { ...BASE_STATE, projects: "item active" };
    default:
      return state;
  }
};

export default navReducer;
