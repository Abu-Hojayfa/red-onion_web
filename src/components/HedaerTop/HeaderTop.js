import React from "react";
import BgImage from "../../assets/images/bannerbackground.png";

const HeaderTop = () => {
  return (
    <div
      className="bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage: `url('${BgImage}')`,
        backgroundColor: "#FCF4E0",
      }}
    >
      <div className="pb-10 md:py-48 md:pb-72">
        <p className="pt-8 text-lg md:text-6xl font-semibold">
          Best food waiting for your belly!
        </p>
        <div className="flex items-center justify-center">
          <div className="relative w-3/4 md:w-2/5 text-gray-600 focus-within:text-gray-400 mt-4 md:mt-12">
            <input
              type="search"
              className=" p-2 md:p-3.5 pl-4 md:pl-8 text-base md:text-xl w-full text-white bg-white rounded-full focus:outline-none focus:bg-white focus:text-gray-900 "
              placeholder="Search Food Items"
              autoComplete="off"
            />
            <span className="absolute inset-y-0 right-0 flex items-center pl-2">
              <button className="ml-2 md:ml-8 py-1.5 md:py-3.5 font-semibold md:text-xl px-4 md:px-12 rounded-full shadow-md text-white bg-torch-red-500 hover:bg-torch-red-600 ">
                Search
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
