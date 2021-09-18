import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router";
import BgImage from "../../assets/images/bannerbackground.png";
import Logo from "../../assets/images/logo2.png";
import { createUserWithMail, signInWithMail } from "./Esstentials/LoginMethod";

const AuthentiCation = () => {
  const [isLogIn, setIsLogIn] = useState(true);
  const [userInfo, setUserInfo] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => setUserInfo(data);
  // console.log(errors);

  const loginFormChanging = () => {
    setIsLogIn(!isLogIn);
  };

  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  // styles
  const inputClass =
    "w-full  md:w-2/6 px-4 py-3 rounded-lg border border-torch-red-200 focus:border-torch-red-500 text-torch-red-600 placeholder-torch-red-400 focus:outline-none focus:ring-2 focus:ring-torch-red-200 block mx-auto mt-4";
  return (
    <div
      className="bg-no-repeat bg-center bg-cover min-h-screen"
      style={{
        backgroundImage: ` linear-gradient(
          rgba(255, 255, 255, 0.55), 
          rgba(255, 255, 255, 0.55)
        ),url('${BgImage}')`,
        backgroundColor: "#FCF4E0",
      }}
    >
      <div className="pt-32 md:pt-20 w-3/4 mx-auto">
        <img
          className="mt-3 md:mt-8 w-2/3 md:w-1/5 mx-auto"
          src={Logo}
          alt=""
        />
        <p
          className={`mt-12 md:mt-20 mb-8 text-left md:inline-block ${
            isLogIn ? "md:pr-11" : "md:pr-8"
          } md:mr-80 md:text-center pl-2 border-double border-l-8  border-torch-red-500 text-3xl font-semibold text-torch-red-500`}
        >
          {isLogIn ? "Sign In" : "Sign Up"}
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          {!isLogIn && (
            <>
              {" "}
              <input
                className={inputClass}
                type="text"
                placeholder="First name"
                {...register("firstName", { required: true })}
              />
              <input
                className={inputClass}
                type="text"
                placeholder="Last name"
                {...register("lastName", { required: true })}
              />
              <input
                className={inputClass}
                type="number"
                placeholder="Phone Number"
                {...register("phoneNumber", {
                  required: true,
                  min: 6,
                })}
              />
            </>
          )}
          <input
            className={inputClass}
            type="email"
            placeholder="Email"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          <input
            className={inputClass}
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
          />

          <input
            onClick={
              userInfo.email && userInfo.password
                ? signInWithMail(userInfo, history, from)
                : createUserWithMail(userInfo, setIsLogIn, isLogIn)
            }
            className=" cursor-pointer py-2 md:py-3.5 text-center px-4 md:px-10 rounded-xl w-full md:w-2/6 mt-5 shadow-md text-white bg-torch-red-500 hover:bg-torch-red-600 text-xl block mx-auto"
            type="submit"
            value={isLogIn ? "Sign In" : "Sign Up"}
          />
          <p
            onClick={loginFormChanging}
            className="pt-3 cursor-pointer inline-block text-torch-red-500 font-semibold text-base md:text-lg"
          >
            {isLogIn
              ? "Don't have an Account? Create One"
              : "Already Have an Account?"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default AuthentiCation;
