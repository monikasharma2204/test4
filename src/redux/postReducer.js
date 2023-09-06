import { posts } from "../data";

const initialState = {
  posts: posts,
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_POST":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case "UPDATE_POSTS":
      return {
        ...state,
        ...{ posts: [...state.posts, ...action.payload] },
      };
    case "REPLACE_POSTS":
      return {
        ...state,
        ...{ posts: action.payload },
      };
    default:
      return state;
  }
};

export default postsReducer;
