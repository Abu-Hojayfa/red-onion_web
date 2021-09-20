import React from "react";
import Footer from "../components/Footer/Footer";
import HeaderTop from "../components/HedaerTop/HeaderTop";
import MenuPage from "../components/MenuPage/MenuPage";
import NavBar from "../components/NavBar/NavBar";
import WhoChoose from "../components/WhoChoose/WhoChoose";

const Home = ({
  CountCart,
  stateOfProduct,
  setStateOfProduct,
  foodData,
  loader,
  setLoader,
}) => {
  return (
    <div>
      <NavBar CountCart={CountCart} />
      <div className="pt-12 md:pt-20">
        <HeaderTop />
      </div>
      <MenuPage
        stateOfProduct={stateOfProduct}
        setStateOfProduct={setStateOfProduct}
        foodData={foodData}
        loader={loader}
        setLoader={setLoader}
      />
      <WhoChoose />
      <Footer />
    </div>
  );
};

export default Home;
