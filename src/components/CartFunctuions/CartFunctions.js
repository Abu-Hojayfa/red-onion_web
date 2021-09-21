import Swal from "sweetalert2";

export const updatingCart = (
  allCartedProduct,
  setAllCartedProduct,
  setCountCart,
  data
) => {
  setAllCartedProduct([...allCartedProduct, data]);
  setCountCart(allCartedProduct.length);
  if (allCartedProduct.length > 0) {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
    });

    Toast.fire({
      icon: "success",
      title: "Product successfully Added",
    });
  }
};
