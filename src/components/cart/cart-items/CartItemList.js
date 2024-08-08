import React from "react";
import { useSelector } from "react-redux";
import { BsCartPlus } from "react-icons/bs";
import { cartFetch } from "../../utils/http";
import { useQuery } from "@tanstack/react-query";
import CartItem from "./CartItem";

const CartItemList = () => {
  const user = useSelector((state) => state.usersState.user);

  const { data, isLoading } = useQuery({
    queryKey: ["cart"],
    queryFn: () => cartFetch.get(`fetch?email=${user?.name}`),
    enabled: !!user?.name,
  });

  return (
    <section className="pt-10 px-10 md:pt-16">
      <div className="flex flex-col items-center justify-center mb-8 md:mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          Your Courses
        </h2>
        <BsCartPlus className="text-5xl md:text-6xl text-blue-500 mb-2" />
      </div>
      {isLoading ? (
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-cyan-900"></div>
        </div>
      ) : (
        data?.data?.data?.products.map((item, index) => (
          <CartItem key={index} cartItem={item} />
        ))
      )}
    </section>
  );
};

export default CartItemList;
