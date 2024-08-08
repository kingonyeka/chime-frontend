import React from 'react'
import { userFetch } from '../../utils/http';
import { redirect, useLoaderData } from 'react-router-dom';
import { store } from '../../../store';
import { insertUserDet } from '../../../features/users/UsersSlice';

const Orders = () => {
    const data= useLoaderData()
    console.log(data);
  return (
    <div>Orders</div>
  )
}

export default Orders


export const ordersLoader = async () => {
    const state = store.getState();
    const user = state.usersState.user;
  
    // console.log(user);
    if (!user) {
      return redirect("/");
    }
  
    try {
      const res = await userFetch.get("details", {
        params: { email: user.name },
      });
  
      const data = res?.data;
  
      if (data) {
        const userDet = {
          first_name: data.first_name,
          last_name: data.last_name,
          address: data.address,
          middle_name: data.middle_name || "",
        };
  
        store.dispatch(insertUserDet(userDet));
      }
  
      return data;
    } catch (error) {
      console.error("Error fetching user details:", error);
      return redirect("/");
    }
  };