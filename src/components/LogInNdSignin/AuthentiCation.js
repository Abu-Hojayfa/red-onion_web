import React, { useState } from "react";
import { useForm } from "react-hook-form";
import BgImage from "../../assets/images/bannerbackground.png";
import Logo from "../../assets/images/logo2.png";

const AuthentiCation = () => {
  const [logIn, setLogIn] = useState(true);
  const [userInfo, setUserInfo] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => setUserInfo(data);
  // console.log(errors);

  const loginFormChanging = () => {
    setLogIn(!logIn);
  };

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
            logIn ? "md:pr-11" : "md:pr-8"
          } md:mr-80 md:text-center pl-2 border-double border-l-8  border-torch-red-500 text-3xl font-semibold text-torch-red-500`}
        >
          {logIn ? "Sign In" : "Sign Up"}
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          {!logIn && (
            <>
              {" "}
              <input
                className={inputClass}
                type="text"
                placeholder="First name"
                {...register("First name", { required: true })}
              />
              <input
                className={inputClass}
                type="text"
                placeholder="Last name"
                {...register("Last name", { required: true })}
              />
              <input
                className={inputClass}
                type="number"
                placeholder="Phone Number"
                {...register("Phone Number", {
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
            {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          <input
            className={inputClass}
            type="password"
            placeholder="Password"
            {...register("Password", { required: true })}
          />

          <input
            className=" cursor-pointer py-2 md:py-3.5 text-center px-4 md:px-10 rounded-xl w-full md:w-2/6 mt-5 shadow-md text-white bg-torch-red-500 hover:bg-torch-red-600 text-xl block mx-auto"
            type="submit"
            value={logIn ? "Sign In" : "Sign Up"}
          />
          <p
            onClick={loginFormChanging}
            className="pt-3 cursor-pointer inline-block text-torch-red-500 font-semibold text-base md:text-lg"
          >
            {logIn
              ? "Don't have an Account? Create One"
              : "Already Have an Account?"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default AuthentiCation;
