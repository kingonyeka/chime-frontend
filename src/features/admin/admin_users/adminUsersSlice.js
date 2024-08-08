import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const getUserFromLocalStoraage = () => {
  return JSON.parse(localStorage.getItem("adminUser")) || null;
};

const initialState = {
  admin_user: getUserFromLocalStoraage(),
};

const adminUsersSlice = createSlice({
  name: "admin_users",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      // console.log(action);
      const admin_user = {
        name: action.payload.user,
        token: action.payload.tokens.jwt,
        rToken: action.payload.tokens.refreshToken,
      };

      // console.log(admin_user);
      state.admin_user = admin_user;

      localStorage.setItem("adminUser", JSON.stringify(admin_user));
    },

    logoutAdminUser: (state) => {
      state.user = null;
      // console.log("logout");
      localStorage.removeItem("adminUser");

      toast("you have been logged out");
    },
  },
});

export const { loginUser, logoutAdminUser } = adminUsersSlice.actions;
export default adminUsersSlice.reducer;
