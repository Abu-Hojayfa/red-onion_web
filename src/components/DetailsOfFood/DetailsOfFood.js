import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useContext } from "react";
import { cartContext } from "../../App";
import { useLocation } from "react-router";
import LoaderGif from "../../assets/images/loading.gif";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import { updatingCart } from "../CartFunctuions/CartFunctions";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const DetailsOfFood = ({
  stateOfProduct,
  setStateOfProduct,
  foodData,
  loader,
  setLoader,
}) => {
  const location = useLocation();
  const [allCartedProduct, setAllCartedProduct, setCountCart] =
    useContext(cartContext);

  const [detailsOnClick, setDetailsOnClick] = useState(location.state.selected);

  const onClickHandler = (e) => {
    setStateOfProduct(e);
    setLoader(true);
  };

  // Styles
  const styleOfIndicator =
    "mx-4 md:mx-10 text-lg font-semibold md:text-2xl cursor-pointer border-b-2 border-transparent  px-2 ";
  const styleOfIndicatorActive = "text-torch-red-500 border-torch-red-500";

  return (
    <div className="pt-16 md:pt-20">
      {/* Semi Nav  */}
      <div className="flex justify-center pt-3">
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

      {/* Main Details Page */}
      <div className="mt-4 mb-4 md:mt-10 md:mb-0 w-5/6 md:w-3/4 mx-auto overflow-hidden h-auto md:h-noScr">
        {detailsOnClick && (
          <div className="grid grid-cols-1 md:grid-cols-2 pt-2 md:pt-8">
            <div className="text-justify">
              <p className="text-2xl md:text-3xl font-semibold pt-0 md:pt-16 pb-2 md:pb-4">
                {detailsOnClick.foodName}
              </p>
              <p className="text-lg md:text-xl w-full md:w-3/4 font-semibold text-gray-500 pb-4">
                {detailsOnClick.shrtDis} .It’s not true that money can’t buy
                happiness. I mean, have you tried buying ice cream? It’s the
                same thing!
              </p>
              <div className="flex">
                <p className="text-3xl font-semibold ">
                  ${detailsOnClick.price}
                </p>
              </div>
              <button onClick={(e) =>
                    updatingCart(
                      allCartedProduct,
                      setAllCartedProduct,
                      setCountCart,
                      detailsOnClick
                    )
                  } className=" mt-4 mb-4 py-2 md:pb-3 px-8 md:px-10 rounded-full text-xl shadow-md text-white bg-torch-red-500 hover:bg-torch-red-600">
                <FontAwesomeIcon icon={faShoppingCart} /> Add
              </button>
            </div>
            <img
              className="w-full md:w-4/5 mx-auto mt-10"
              src={detailsOnClick.imgURL}
              alt="Food_Image"
            />
          </div>
        )}

        {loader ? (
          <img
            className=" w-56 md:w-60 mx-auto md:transform md:-translate-y-24 md:-translate-x-96"
            src={LoaderGif}
            alt="loading_animation"
          />
        ) : (
          <div className="w-80 md:w-3/6 pt-10 md:transform md:-translate-y-28 mySwiperDetail">
            <Swiper
              slidesPerView={3}
              spaceBetween={5}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              className="mySwiper"
            >
              {foodData &&
                foodData.map((single) => (
                  <SwiperSlide
                    onClick={(e) => setDetailsOnClick(single)}
                    key={single._id}
                  >
                    <img
                      className="w-24 cursor-pointer md:w-48 md:h-44 mx-0 md:mx-18  mb-8"
                      src={single.imgURL}
                      alt="Food_image"
                    />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailsOfFood;
