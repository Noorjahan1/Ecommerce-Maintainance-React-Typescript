import React from "react";
import Styles from "./Cart.module.css";
import { useCart } from "react-use-cart";
import EmptyCart from "./EmptyCart";
import CartList from "./CartList";
function Cart() {
  const { isEmpty} =
    useCart();
  return (
    <>
      {isEmpty ? (
        <EmptyCart />
      ) : (
        <CartList/>
        
      )}
    </>
  );
}

export default Cart;
