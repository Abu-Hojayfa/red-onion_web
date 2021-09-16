import React from "react";
import FooterLogo from "../../assets/images/logo.png";

const Footer = () => {
  const pStyling = "leading-6 text-lg cursor-pointer m-2 hover:underline";
  return (
    <div className="bg-black mt-4 text-white">
      <div className="w-5/6 md:w-5/6 mx-auto pt-8 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <img
            className="w-40 md:h-12 md:w-40 mx-auto mt-1 mb-4 md:m-0"
            src={FooterLogo}
            alt=""
          />
          <div className="ml-20 md:ml-0 md:flex justify-center text-justify mb-6">
            <div className="md:mr-52 mb-6">
              <p className={pStyling}>About Online Food</p>
              <p className={pStyling}>Read Our Blog</p>
              <p className={pStyling}>Sign Up to Deliver</p>
              <p className={pStyling}>Add Your Restaurant</p>
            </div>
            <div>
              <p className={pStyling}>About Online Food</p>
              <p className={pStyling}>Read Our Blog</p>
              <p className={pStyling}>Sign Up to Deliver</p>
              <p className={pStyling}>Add Your Restaurant</p>
            </div>
          </div>
          <div className="md:flex">
            <p className={pStyling}>Privacy policy</p>
            <p className={pStyling}>Terms and Conditions</p>
            <p className={pStyling}>Pricing</p>
          </div>
          <p className="mt-3 mb-3 text-gray-400">
            Copyright RED ONION
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
