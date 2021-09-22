import React, { useState } from "react";

const DeliVeryDetails = ({ uniqProduct }) => {
  const [deliverDetail, setDeliverDetail] = useState(true);
  // style
  const inputClass =
    "w-full px-4 py-3 rounded-lg border border-torch-red-200 focus:border-torch-red-500 text-torch-red-600 placeholder-torch-red-400 focus:outline-none focus:ring-2 focus:ring-torch-red-200 block mx-auto mt-4";

  return (
    <div className="mt-10 mb-10 ml-6 w-full md:w-3/4 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="w-5/6">
        <p className="text-left pb-2 border-b-2 text-3xl font-semibold mb-10">
          Edit Delivery Details
        </p>
        <form>
          {/* delivery details */}
          {deliverDetail ? (
            <>
              <input className={inputClass} type="text" required name="" />
              <input className={inputClass} type="text" required name="" />
              <input className={inputClass} type="text" required name="" />
              <input className={inputClass} type="text" required name="" />
              <textarea className={inputClass} type="text" required name="" />
            </>
          ) : (
            <>
              <input className={inputClass} type="text" required name="" />
              <input className={inputClass} type="text" required name="" />
              <input className={inputClass} type="text" required name="" />
            </>
          )}

          <input
            onClick={e=>deliverDetail? setDeliverDetail(false) : console.log("okay")}
            className=" cursor-pointer py-2 md:py-3.5 text-center px-4 md:px-10 rounded-xl w-full  mt-5 shadow-md text-white bg-torch-red-500 hover:bg-torch-red-600 text-xl block mx-auto"
            type="submit"
            value={deliverDetail ? "Payment Methods" : "Confirm Payment"}
          />
        </form>
      </div>
    </div>
  );
};

export default DeliVeryDetails;
