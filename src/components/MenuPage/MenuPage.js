import React, { useEffect, useState } from "react";

const MenuPage = () => {
  const [stateOfProduct, setStateOfProduct] = useState("lunch");
  const [foodData, setFoodData] = useState([]);

  const styleOfIndicator =
    "mx-4 md:mx-10 text-lg font-semibold md:text-2xl cursor-pointer border-b-2 border-transparent  px-2 ";
  const styleOfIndicatorActive = "text-torch-red-500 border-torch-red-500";

  const onClickHandler = (e) => {
    setStateOfProduct(e);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/${stateOfProduct}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [stateOfProduct]);

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
    </div>
  );
};

export default MenuPage;
