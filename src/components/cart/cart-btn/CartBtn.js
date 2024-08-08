import { useQuery } from "@tanstack/react-query";
import React from "react";
import { BsBag } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cartFetch } from "../../utils/http";

const CartBtn = () => {
  const user = useSelector((state) => state.usersState.user);

  const { isFetching, data } = useQuery({
    queryKey: ["cart"],
    queryFn: () => cartFetch.get(`fetch?email=${user?.name}`),
    enabled: !!user?.name,
    refetchInterval: 10000, 
  });

  let numItemsInCart = 0;

  if (
    user &&
    data?.data?.code !== 404 &&
    data?.data?.message !== "cart not found"
  ) {
    numItemsInCart = data?.data?.cart?.length || 0;
  }

  if (data?.data?.code === 200) {
    numItemsInCart = data?.data?.data?.total_items;
  }

  return (
    <Link to="/cart">
      <div className="cursor-pointer flex relative">
        <BsBag className="text-2xl text-cyan-700" />
        <div className="absolute -right-2 -bottom-2 h-[18px] w-[18px] bg-cyan-900 text-white text-[10px] font-bold rounded-full flex justify-center items-center">
          {isFetching ? (
            <div className="animate-spin h-3 w-3 border-2 border-white border-t-transparent rounded-full"></div>
          ) : (
            numItemsInCart
          )}
        </div>
      </div>
    </Link>
  );
};

export default CartBtn;
