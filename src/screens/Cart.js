import React, { useContext, useState } from "react";
import { cartContext } from "../App";
import CartPage from "../components/CartPage/CartPage";
import NavBar from "../components/NavBar/NavBar";

const Cart = ({ CountCart }) => {
  const [allCartedProduct] = useContext(cartContext);

  const uniqProduct = allCartedProduct.filter(
    (ele, ind) =>
      ind === allCartedProduct.findIndex((elem) => elem._id === ele._id)
  );
    console.log(uniqProduct)
  return (
    <div>
      <NavBar CountCart={CountCart} />
      <CartPage uniqProduct={uniqProduct} />
    </div>
  );
};

export default Cart;
