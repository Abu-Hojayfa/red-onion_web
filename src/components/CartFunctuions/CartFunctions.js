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

  let uniqueItemChecking = allCartedProduct.reduce((unique, i) => {
    if (!unique.some((obj) => obj._id === i._id)) {
      unique.push(i);
    }
    return unique;
  }, []);

  console.log(uniqueItemChecking);
};
