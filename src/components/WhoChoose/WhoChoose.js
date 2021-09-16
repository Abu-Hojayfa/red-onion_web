import React from "react";
import FastDeli from "../../assets/images/fastDelever.png";
import Chef from "../../assets/images/chefCook.png";
import HomeDeli from "../../assets/images/homeDelever.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBus } from "@fortawesome/free-solid-svg-icons";

const WhoChoose = () => {
  return (
    <div className="text-left mb-10 w-5/6 md:w-5/6 mx-auto mt-4">
      <p className="text-2xl md:text-4xl md:pb-3 font-semibold ">
        Why You Choose Us
      </p>
      <p className="text-gray-600 font-medium md:text-lg pt-3 w-100 md:w-2/5">
        Barton waited twenty always repair in within we do. An delighted
        offending curiosity my is basswoods at. Boy prosperous increasing
        surrounded.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5">
        <div className="shadow-xl md:shadow-none cursor-pointer hover:shadow-2xl rounded-xl rounded-t-3xl mb-4">
          <img src={FastDeli} alt="Fast_Delivery" />
          <div className="flex p-2 ml-4 mt-4 mb-4">
            <FontAwesomeIcon
              className="text-white text-5xl bg-torch-red-500 rounded-full p-4 mr-5"
              icon={faBus}
            />
            <div className="w-3/4 text-justify">
              <p className="text-xl font-semibold pb-3">Fast Delivery</p>
              <p className="text-gray-500 font-semibold">
                Keep your systems in sync with automated web hook based
                notifications each time link is paid and how er dream about our
                future.
              </p>
              <p className="text-blue-500 font-semibold text-lg pt-3 flex items-center">
                See More
                <p className="text-white w-9 h-9 text-2xl text-center font-bold rounded-full bg-green-400 ml-10">
                  &#8594;
                </p>
              </p>
            </div>
          </div>
        </div>

        <div className="shadow-lg cursor-pointer hover:shadow-2xl rounded-xl rounded-t-3xl mb-4">
          <img src={Chef} alt="Fast_Delivery" />
          <div className="flex p-2 ml-4 mt-4 mb-4">
            <FontAwesomeIcon
              className="text-white text-5xl bg-torch-red-500 rounded-full p-4 mr-5"
              icon={faBus}
            />
            <div className="w-3/4 text-justify">
              <p className="text-xl font-semibold pb-3">Fast Delivery</p>
              <p className="text-gray-500 font-semibold">
                Keep your systems in sync with automated web hook based
                notifications each time link is paid and how er dream about our
                future.
              </p>
              <p className="text-blue-500 font-semibold text-lg pt-3 flex items-center">
                See More
                <p className="text-white w-9 h-9 text-2xl text-center font-bold rounded-full bg-green-400 ml-10">
                  &#8594;
                </p>
              </p>
            </div>
          </div>
        </div>

        <div className="shadow-xl md:shadow-none cursor-pointer hover:shadow-2xl rounded-xl rounded-t-3xl mb-4">
          <img src={HomeDeli} alt="Fast_Delivery" />
          <div className="flex p-2 ml-4 mt-4 mb-4">
            <FontAwesomeIcon
              className="text-white text-5xl bg-torch-red-500 rounded-full p-4 mr-5"
              icon={faBus}
            />
            <div className="w-3/4 text-justify">
              <p className="text-xl font-semibold pb-3">Fast Delivery</p>
              <p className="text-gray-500 font-semibold">
                Keep your systems in sync with automated web hook based
                notifications each time link is paid and how er dream about our
                future.
              </p>
              <p className="text-blue-500 font-semibold text-lg pt-3 flex items-center">
                See More
                <p className="text-white w-9 h-9 text-2xl text-center font-bold rounded-full bg-green-400 ml-10">
                  &#8594;
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoChoose;
