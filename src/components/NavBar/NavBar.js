import React, {  useEffect, useState } from "react";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import Swal from "sweetalert2";
import Logo from "../../assets/images/logo2.png";

const NavBar = ({CountCart}) => {
  const [isLogIn, setIsLogIn] = useState(false);
  

  let history = useHistory();

  const logInPage = () => {
    history.push("/login");
  };
  const homePage = () => {
    history.push("/home");
  };

  const email = sessionStorage.getItem("email");
  useEffect(() => {
    if (email) {
      setIsLogIn(true);
    }
  }, [email]);

  const handleLogOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        sessionStorage.clear();
        setIsLogIn(false);
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          title: `Log Out successfully`,
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Something Bad Happen!",
          text: `${error}`,
        });
      });
  };

  return (
    <div className="fixed w-screen md:px-28 bg-torch-red-50">
      <div className="pt-5 p-4 flex justify-between">
        <img className="w-28 md:w-40 " src={Logo} alt="Logo Of Red Onion" />
        <div className="flex  items-center text-sm  md:text-xl font-semibold ">
          <p className="cursor-pointer mr-2 text-torch-red-500 hidden md:block">
            <FontAwesomeIcon className="text-black" icon={faShoppingCart} /> (
            {CountCart})
          </p>
          <p onClick={homePage} className="ml-2 mr-2 cursor-pointer md:ml-8">
            Home
          </p>
          <p onClick={homePage} className="ml-2 mr-2 cursor-pointer md:ml-8">
            Orders
          </p>
          <button
            onClick={email ? handleLogOut : logInPage}
            className="ml-2 md:ml-8 py-1 md:py-2 md:pb-3 px-4 md:px-10 rounded-full shadow-md text-white bg-torch-red-500 hover:bg-torch-red-600 "
          >
            {isLogIn ? "Log Out" : "Sign In"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
