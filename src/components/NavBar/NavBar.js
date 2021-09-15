import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Logo from "../../assets/images/logo2.png";

const NavBar = () => {
  return (
    <div className="fixed w-screen md:px-28 bg-torch-red-50">
      <div className="pt-5 p-4 flex justify-between">
        <img className="w-28 md:w-40 " src={Logo} alt="Logo Of Red Onion" />
        <div className="flex  items-center text-sm  md:text-xl font-semibold ">
          <p className="cursor-pointer mr-2 text-torch-red-500">
            <FontAwesomeIcon
              className="text-black"
              icon={faShoppingCart}
            />{" "}
            (0)
          </p>
          <p className="ml-2 mr-2 cursor-pointer md:ml-8">Home</p>
          <button className="ml-2 md:ml-8 py-1 md:py-2 md:pb-3 px-4 md:px-10 rounded-full shadow-md text-white bg-torch-red-500 hover:bg-torch-red-600 ">LogIn</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
