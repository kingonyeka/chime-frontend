import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const getUserFromLocalStoraage = () => {
  return JSON.parse(localStorage.getItem("user")) || null;
};

const getUserDetFromLocalStoraage = () => {
  return JSON.parse(localStorage.getItem("userDet")) || null;
};

const initialState = {
  user: getUserFromLocalStoraage(),
  userDet: getUserDetFromLocalStoraage(),
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      // console.log(action);
      const user = {
        name: action.payload.user,
        token: action.payload.tokens.jwt,
        rToken: action.payload.tokens.refreshToken,
      };

      // console.log(user);
      state.user = user;

      localStorage.setItem("user", JSON.stringify(user));
    },

    logoutUser: (state) => {
      state.user = null;
      // console.log("logout");
      localStorage.removeItem("user");
      toast("you have been logged out");
    },
    insertUserDet: (state, action) => {
      const userDet = action.payload;
      state.userDet = userDet;
      localStorage.setItem("userDet", JSON.stringify(userDet));
    },
  },
});

export const { loginUser, logoutUser, insertUserDet } = usersSlice.actions;
export default usersSlice.reducer;
