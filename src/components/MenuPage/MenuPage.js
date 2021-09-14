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
      .then((data) => setFoodData(data));
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

      <div className="mt-10 mb-10 w-5/6 md:w-3/4 mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        {foodData && foodData.map((data, index) => 
            <div className="hover:shadow-lg py-4 rounded-xl cursor-pointer" key={data.id}>
              <img className="w-44 md:w-72 mx-auto" src={data.imgURL} alt="Food_Image" />
            </div>
        )}
      </div>
    </div>
  );
};

export default MenuPage;