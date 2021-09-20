import React, { useState } from "react";
import { useLocation } from "react-router";
import LoaderGif from "../../assets/images/loading.gif";

const DetailsOfFood = ({
  stateOfProduct,
  setStateOfProduct,
  firstFood,
  foodData,
  loader,
  setLoader,
}) => {
  const location = useLocation();

  const [detailsOnClick, setDetailsOnClick] = useState(location.state.selected);

  const onClickHandler = (e) => {
    setStateOfProduct(e);
    setLoader(true);
    setDetailsOnClick(firstFood);
  };
  console.log(foodData);
  console.log(detailsOnClick);
  // Styles
  const styleOfIndicator =
    "mx-4 md:mx-10 text-lg font-semibold md:text-2xl cursor-pointer border-b-2 border-transparent  px-2 ";
  const styleOfIndicatorActive = "text-torch-red-500 border-torch-red-500";

  return (
    <div className="pt-12 md:pt-20">
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
      {loader ? (
        <img
          className=" w-56 md:w-96 mx-auto"
          src={LoaderGif}
          alt="loading_animation"
        />
      ) : (
        <div>

        </div>
      )}
    </div>
  );
};

export default DetailsOfFood;
