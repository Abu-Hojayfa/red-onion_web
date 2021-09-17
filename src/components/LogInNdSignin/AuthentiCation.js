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
  const onSubmit = (data) => console.log(data);
  // console.log(errors);
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
      <div className="pt-16 md:pt-20 w-3/4 mx-auto">
        <img
          className="mt-3 md:mt-8 w-2/3 md:w-1/5 mx-auto"
          src={Logo}
          alt=""
        />

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="px-4 py-2 rounded-lg border border-green-500 text-green-600 placeholder-green-600 focus:outline-none focus:ring-2 focus:ring-green-200 block"
            type="text"
            placeholder="First name"
            {...register("First name", { required: true })}
          />
          <input
            className="px-4 py-2 rounded-lg border border-green-500 text-green-600 placeholder-green-600 focus:outline-none focus:ring-2 focus:ring-green-200 block"
            type="text"
            placeholder="Last name"
            {...register("Last name", { required: true })}
          />
          <input
            className="px-4 py-2 rounded-lg border border-green-500 text-green-600 placeholder-green-600 focus:outline-none focus:ring-2 focus:ring-green-200 block"
            type="number"
            style={{
              
            }}
            placeholder="Phone Number"
            {...register("Phone Number", {
              required: true,
              min: 6,
            })}
          />
          <input
            className="px-4 py-2 rounded-lg border border-green-500 text-green-600 placeholder-green-600 focus:outline-none focus:ring-2 focus:ring-green-200 block"
            type="email"
            placeholder="Email"
            {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          <input
            className="px-4 py-2 rounded-lg border border-green-500 text-green-600 placeholder-green-600 focus:outline-none focus:ring-2 focus:ring-green-200 block"
            type="password"
            placeholder="Password"
            {...register("Password", { required: true })}
          />

          <input
            className=" cursor-pointer mb-4 py-1 md:py-2 md:pb-3 px-4 md:px-10 rounded-full shadow-md text-white bg-torch-red-500 hover:bg-torch-red-600"
            type="submit"
            value="Login"
          />
        </form>
      </div>
    </div>
  );
};

export default AuthentiCation;
