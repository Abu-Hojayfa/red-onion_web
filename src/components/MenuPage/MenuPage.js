import React, { useContext } from "react";
import { useHistory } from "react-router";
import { cartContext } from "../../App";
import LoaderGif from "../../assets/images/loading.gif";
import { updatingCart } from "../CartFunctuions/CartFunctions";

const MenuPage = ({
  stateOfProduct,
  setStateOfProduct,
  foodData,
  loader,
  setLoader,
}) => {
  const [allCartedProduct, setAllCartedProduct, setCountCart] =
    useContext(cartContext);

  const onClickHandler = (e) => {
    setStateOfProduct(e);
    setLoader(true);
  };

  let history = useHistory();
  const goToDetails = (e) => {
    history.push("/detailspage",{selected: e});
  };


  // style(data)s
  const checkoutBtnStyleInActive = "bg-gray-300  text-white cursor-not-allowed";
  const styleOfIndicator =
    "mx-4 md:mx-10 text-lg font-semibold md:text-2xl cursor-pointer border-b-2 border-transparent  px-2 ";
  const styleOfIndicatorActive = "text-torch-red-500 border-torch-red-500";

  return (
    <div className="pt-6 md:mt-10">
      <div className="flex justify-center ">
        <p
          onClick={(e) => onClickHandler("breakfast")}
          className={`${styleOfIndicator} ${
            stateOfProduct === "breakfast" && styleOfIndicatorActive
          }`}
        >
          Breakfast
        </p>
        <p
          onClick={(e) => onClickHandler("lunch")}
          className={`${styleOfIndicator} ${
            stateOfProduct === "lunch" && styleOfIndicatorActive
          }`}
        >
          Lunch
        </p>
        <p
          onClick={(e) => onClickHandler("dinner")}
          className={`${styleOfIndicator} ${
            stateOfProduct === "dinner" && styleOfIndicatorActive
          }`}
        >
          Dinner
        </p>
      </div>

      {loader ? (
        <img
          className=" w-56 md:w-96 mx-auto"
          src={LoaderGif}
          alt="loading_animation"
        />
      ) : (
        <div className="mt-10 mb-10 w-5/6 md:w-3/4 mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          {foodData &&
            foodData.map((data) => (
              <div
                className="mt-2 shadow-lg md:shadow-none md:hover:shadow-lg py-4 rounded-xl"
                key={data._id}
              >
                <img
                  onClick={e=>goToDetails(data)}
                  className="w-44 md:w-72 mx-auto  cursor-pointer"
                  src={data.imgURL}
                  alt="Food_Image"
                />
                <p
                  onClick={e=>goToDetails(data)}
                  className="text-xl pt-4 font-semibold  cursor-pointer"
                >
                  {data.foodName}
                </p>
                <p
                  onClick={e=>goToDetails(data)}
                  className="text-base w-2/3 mx-auto text-gray-500 pt-2 font-semibold  cursor-pointer"
                >
                  {data.shrtDis}
                </p>
                <p
                  onClick={e=>goToDetails(data)}
                  className="text-2xl py-4 font-bold  cursor-pointer"
                >
                  ${data.price}
                </p>
                <button
                  onClick={(e) =>
                    updatingCart(
                      allCartedProduct,
                      setAllCartedProduct,
                      setCountCart,
                      data
                    )
                  }
                  className=" mb-4 py-1 md:py-2 md:pb-3 px-4 md:px-10 rounded-full shadow-md text-white bg-torch-red-500 hover:bg-torch-red-600"
                >
                  Add to Cart
                </button>
              </div>
            ))}
        </div>
      )}

      <button
        className={`py-3 px-10 mb-10  font-semibold text-lg rounded-full ${checkoutBtnStyleInActive}`}
      >
        Checkout Your Food
      </button>
    </div>
  );
};

export default MenuPage;
