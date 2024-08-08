import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/CartSlice";
import usersReducer from "./features/users/UsersSlice";
import adminUsersReducer from "./features/admin/admin_users/adminUsersSlice";

export const store = configureStore({
  reducer: {
    cartState: cartReducer,
    usersState: usersReducer,
    adminUsersState:adminUsersReducer 
  },
});
