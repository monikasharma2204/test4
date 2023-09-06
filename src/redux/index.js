import { combineReducers } from "redux";
import postReducer from "./postReducer";
import myProfileReducer from "./myProfileReducer";
import followersReducer from "./followersReducer";
import usersReducer from "./usersListReducers";

const rootReducer = combineReducers({
  postReducer,
  myProfileReducer,
  followersReducer,
  usersReducer,
});

export default rootReducer;
