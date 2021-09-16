import React from "react";
import HeaderTop from "../components/HedaerTop/HeaderTop";
import MenuPage from "../components/MenuPage/MenuPage";
import NavBar from "../components/NavBar/NavBar";
import WhoChoose from "../components/WhoChoose/WhoChoose";

const Home = () => {
  return (
    <div>
      <NavBar />
      <div className="pt-12 md:pt-20">
        <HeaderTop />
      </div>
      <MenuPage />
      <WhoChoose />
    </div>
  );
};

export default Home;
