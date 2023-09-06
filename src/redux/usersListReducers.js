import { users } from "../data";

const initialState = {
  users: users,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default usersReducer;
