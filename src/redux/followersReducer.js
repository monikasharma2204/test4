import { followers } from "../data";

const initialState = {
  followers: followers,
};

const followersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_FOLLOWERS": {
      return {
        ...state,
        ...{ followers: action.payload },
      };
    }
    default:
      return state;
  }
};

export default followersReducer;
