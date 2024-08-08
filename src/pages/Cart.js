import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import EmptyCart from "../components/cart/EmptyCart";
import CartItemList from "../components/cart/cart-items/CartItemList";
import CartTotals from "../components/cart/cart-total/CartTotals";
import CModal from "../components/modals/CModal";
import { useQuery } from "@tanstack/react-query";
import { cartFetch } from "../components/utils/http";

const Cart = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const user = useSelector((state) => state.usersState.user);

  const { data, isLoading } = useQuery({
    queryKey: ["cart"],
    queryFn: () => cartFetch.get(`fetch?email=${user?.name}`),
    enabled: !!user?.name,
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

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      setShowModal(true);
    }
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
    navigate("/login");
  };

  if (showModal) {
    return (
      <CModal
        message="Please log in to view your cart."
        onClose={handleCloseModal}
      />
    );
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-cyan-900"></div>
      </div>
    );
  }

  if (numItemsInCart === 0) {
    return <EmptyCart />;
  }

  return (
    <section className="py-20 px-10 bg-gray-200">
      <CartItemList />
      <div>
        <CartTotals />
      </div>
    </section>
  );
};

export default Cart;
