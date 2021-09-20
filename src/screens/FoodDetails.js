import React from "react";
import DetailsOfFood from "../components/DetailsOfFood/DetailsOfFood";
import NavBar from "../components/NavBar/NavBar";

const FoodDetails = ({
  CountCart,
  stateOfProduct,
  setStateOfProduct,
  foodData,
  loader,
  setLoader,
  firstFood
}) => {
  return (
    <div>
      <NavBar CountCart={CountCart} />
      <DetailsOfFood
        stateOfProduct={stateOfProduct}
        setStateOfProduct={setStateOfProduct}
        foodData={foodData}
        loader={loader}
        setLoader={setLoader}
        firstFood={firstFood}
      />
    </div>
  );
};

export default FoodDetails;
