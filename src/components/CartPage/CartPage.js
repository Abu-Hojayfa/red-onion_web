import React, { useContext } from "react";
import { cartContext } from "../../App";

const CartPage = () => {
  const [allCartedProduct, uniqCartedProduct, setUniqCartedProduct] =
    useContext(cartContext);

  // setUniqCartedProduct(
  //   allCartedProduct.filter(
  //     (ele, ind) =>
  //       ind === allCartedProduct.findIndex((elem) => elem._id === ele._id)
  //   )
  // );

  console.log( uniqCartedProduct)

  return (<div></div>);
};

export default CartPage;
