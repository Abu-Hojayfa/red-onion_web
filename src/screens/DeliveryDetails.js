import React, { useContext } from "react";
import { cartContext } from "../App";
import DeliVeryDetails from "../components/DeliveryDetails/DeliVeryDetails";
import NavBar from "../components/NavBar/NavBar";

const Cart = ({ CountCart }) => {
  const [allCartedProduct] = useContext(cartContext);

  const uniqProduct = allCartedProduct.filter(
    (ele, ind) =>
      ind === allCartedProduct.findIndex((elem) => elem._id === ele._id)
  );
  return (
    <div>
      <NavBar CountCart={CountCart} />

      <div className="pt-12 md:pt-20">
        <DeliVeryDetails allCartedProduct={allCartedProduct} uniqProduct={uniqProduct} />
      </div>
    </div>
  );
};

export default Cart;
