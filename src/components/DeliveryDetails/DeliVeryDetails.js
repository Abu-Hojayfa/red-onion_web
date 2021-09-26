import React, { useState } from "react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useHistory } from "react-router";

const DeliVeryDetails = ({ uniqProduct }) => {
  const [locationAndProduct, setLocationAndProduct] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => setLocationAndProduct(data);

  let history = useHistory();

  const goToHome = () => {
    history.push("/home");
  }

  // style
  const inputClass =
    "w-full px-2 md:px-4 py-2 md:py-3  font-medium text-base md:text-lg rounded-lg border border-torch-red-200 focus:border-torch-red-500   focus:outline-none focus:ring-2 focus:ring-torch-red-200 block mx-auto mt-4";

  const buttonStyle = "cursor-pointer py-2 md:py-3.5 text-center px-4 md:px-10 rounded-xl w-full mt-5 shadow-md text-white bg-torch-red-500 hover:bg-torch-red-600 text-xl block mx-auto";

  return (
    <div className="mt-10 px-5 md:px-0 md:mt-16 mb-10 w-full md:w-3/4 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="w-full md:w-4/5">
        <p className="text-left pb-2 border-b-2 text-2xl md:text-3xl font-semibold mb-6 md:mb-10">
          Edit Delivery Details
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className={inputClass}
            type="text"
            placeholder="Full Name"
            {...register("receiverName", { required: true })}
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
          <input
            className={inputClass}
            type="text"
            placeholder="Road Name"
            {...register("roadName", { required: true })}
          />
          <input
            className={inputClass}
            type="text"
            placeholder="City"
            {...register("city", { required: true })}
          />
          <input
            className={inputClass}
            type="text"
            {...register("country", { required: true })}
            placeholder="Country"
          />
          <textarea
            className={`resize-none h-32 md:h-40 ${inputClass}`}
            type="text"
            placeholder="Add Delivery Instructor (optional)"
            {...register("deliveryInstructor", { required: false })}
          />

          <div className="flex items-center ml-1.5 mt-5">
            <div className="bg-torch-red-500 w-6 h-6 text-center rounded-full">
              <FontAwesomeIcon className="text-white" icon={faCheck} />
            </div>
            <p className="pl-3 text-lg font-semibold">Cash On Delivery</p>
          </div>

          <input
            onClick={(e) =>
              locationAndProduct.length > 3 &&
              Swal.fire({
                icon: "success",
                title: "Location Saved!",
                text: "Now Please Proceed to Checkout.",
                confirmButtonColor: "rgb(249, 25, 68)",
              })
            }
            className={buttonStyle}
            type="submit"
            value="Save Address"
          />
        </form>
      </div>
      <div className="w-full md:w-4/5 ml-0 md:ml-32 text-left pt-4 md:pt-16">
        {uniqProduct.length ? (
          <>
            <p className="text-lg font-medium pb-1">
              From <span>Gulshan Plaza Restaura GPR</span>
            </p>
            <p className="text-lg font-medium pb-1">Arriving in 20-30 min</p>
            <p className="text-lg font-medium pb-1">107 Rd No 8</p>

            {uniqProduct.map((product) => (
              <div key={product._id}>
                <p>{product.foodName}</p>
              </div>
            ))}
          </>
        ) : (
          <>
            <p className="text-2xl font-semibold pb-3">No Foods In The Cart</p>
            <p className="text-lg font-medium text-gray-500">
              A testy and good food like your future, yea we think about your
              future .It’s not true that money can’t buy happiness. I mean, have
              you tried buying ice cream? It’s the same thing!
            </p>
            <button onClick={goToHome} className={buttonStyle}>Go to Menu Page for Order</button>
          </>
        )}
      </div>
    </div>
  );
};

export default DeliVeryDetails;
