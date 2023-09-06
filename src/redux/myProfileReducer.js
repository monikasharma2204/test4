import { myProfile } from "../data";

const initialState = {
  myProfile: myProfile,
};

const myProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default myProfileReducer;
