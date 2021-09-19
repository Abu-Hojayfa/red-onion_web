export const updatingCart = (
  allCartedProduct,
  setAllCartedProduct,
  setCountCart,
  data
) => {
  setAllCartedProduct([...allCartedProduct, data]);
  setCountCart(allCartedProduct.length);
};
