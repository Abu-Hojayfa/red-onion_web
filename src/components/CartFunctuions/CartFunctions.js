export const updatingCart = (
  allCartedProduct,
  uniqCartedProduct,
  setAllCartedProduct,
  setUniqCartedProduct,
  setCountCart,
  data
) => {
  setAllCartedProduct([...allCartedProduct, data]);
  setCountCart(allCartedProduct.length);
  console.log(allCartedProduct);
};
