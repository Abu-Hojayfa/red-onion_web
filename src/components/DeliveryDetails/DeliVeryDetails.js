import React, { useState } from "react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";

const DeliVeryDetails = ({ uniqProduct }) => {
  const [locationAndProduct, setLocationAndProduct] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => setLocationAndProduct(data);

  // style
  const inputClass =
    "w-full px-4 py-3 font-semibold text-lg rounded-lg border border-torch-red-200 focus:border-torch-red-500 text-torch-red-600 placeholder-torch-red-300 focus:outline-none focus:ring-2 focus:ring-torch-red-200 block mx-auto mt-4";

  return (
    <div className="mt-10 pl-10 md:pl-0 md:mt-16 mb-10 w-full md:w-3/4 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="w-4/5">
        <p className="text-left pb-2 border-b-2 text-3xl font-semibold mb-10">
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
            className={`resize-none h-40 ${inputClass}`}
            type="text"
            placeholder="Add Delivery Instructor (optional)"
            {...register("deliveryInstructor", { required: true })}
          />

          <div className="flex items-center ml-1.5">
            <FontAwesomeIcon className="text-white w-12 h-12 rounded-full bg-torch-red-500" icon={faCheck} />
          </div>

          <input
            onClick={(e) => console.log(locationAndProduct)}
            className=" cursor-pointer py-2 md:py-3.5 text-center px-4 md:px-10 rounded-xl w-full  mt-5 shadow-md text-white bg-torch-red-500 hover:bg-torch-red-600 text-xl block mx-auto"
            type="submit"
            defaultValue="Save Address"
          />
        </form>
      </div>
      <div>
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
          temporibus! Est nisi doloribus delectus dolores ipsam necessitatibus
          repellat ipsa, sapiente perferendis atque rerum consequatur alias
          architecto aliquid voluptatum quis aut laborum non accusantium veniam.
          Quas reprehenderit enim minus ducimus expedita libero quis assumenda,
          vero ex deserunt, harum mollitia veritatis placeat incidunt magni eos
          temporibus dolorem provident! Quis aut harum hic. Rerum at, facere
          quod dignissimos maiores, beatae dolorum reiciendis sint, sit eligendi
          harum exercitationem fugiat autem! Vitae perspiciatis, ipsa modi error
          consequatur, earum ratione culpa aliquid accusantium, placeat eius.
          Dolore adipisci architecto tempora, dolores est illum fugit officiis
          voluptatem ab pariatur, ad iusto provident, nam suscipit? Fugit soluta
          labore similique assumenda, commodi distinctio possimus atque quae
          amet fugiat architecto cupiditate doloremque sapiente eveniet sequi
          error adipisci! Dolores voluptate sapiente quia ducimus ad,
          consequatur sunt, adipisci eum aperiam inventore eos est error,
          aliquam exercitationem? Voluptatum error magni nemo illum eligendi
          quos reiciendis, quidem eveniet aperiam alias molestias, esse quaerat
          libero blanditiis culpa, adipisci ratione dicta ad laudantium quisquam
          repudiandae a aliquid quis! Reprehenderit doloremque laborum tenetur
          recusandae ipsum unde in ipsam, laudantium voluptate harum sunt dolore
          libero necessitatibus accusantium quia explicabo ex, ducimus maiores?
          Impedit incidunt dolorum vitae porro suscipit consectetur illum
          perspiciatis ullam, deserunt voluptatum culpa reprehenderit
          repudiandae esse non qui iusto distinctio vero! Repellat animi, rerum
          adipisci dicta, necessitatibus, id doloribus unde est cumque vero
          ratione magnam numquam officia dolorum iusto quibusdam dignissimos
          ipsum molestiae. Facilis eius harum molestiae provident ut architecto
          suscipit exercitationem vero repellendus, tenetur est ipsum sequi
          excepturi dicta. Dolore quisquam soluta maiores incidunt dolor.
          Adipisci facere maiores magnam dolor labore unde quas odit sint vel
          voluptatem consequatur assumenda dolorum, ipsum quaerat, mollitia
          itaque! Quisquam, voluptate tempore nesciunt eveniet quae ea
          praesentium voluptatem fuga, sit dolore voluptatibus corporis quasi
          corrupti est rem, nemo esse laborum dignissimos. Delectus enim
          quaerat, accusamus nemo eos minus at aliquid suscipit beatae incidunt
          quibusdam quam! Sequi labore voluptate, temporibus ab quas non earum
          nobis cum dolores quia perferendis ullam provident, obcaecati
          inventore animi tenetur ipsa excepturi laudantium rem facere ex
          tempora architecto saepe? Accusamus aspernatur rem animi quis eius
          voluptatem ipsa veniam delectus atque ratione! Ab repellat officiis
          perferendis autem ipsam, placeat temporibus, nihil unde odio
          laboriosam architecto quae laudantium nisi maiores nesciunt
          consequatur recusandae. Dolorem officia provident officiis sed,
          molestias atque! Ducimus nihil cumque doloribus aliquam dolor
          quibusdam ab, at vel dicta libero maxime consequuntur ea ipsam! Quasi
          incidunt quae sed dolore expedita tenetur accusantium. Nesciunt
          tenetur sint officiis dolor necessitatibus eos, commodi rerum iste
          facilis nam similique accusantium eius sit culpa itaque veritatis
          laboriosam ipsa tempore cumque mollitia asperiores assumenda dicta
          velit dignissimos. Error, veniam maxime. Et fugiat quo, laudantium
          soluta sunt explicabo natus non officia, assumenda facilis cum velit
          laborum, exercitationem dolores corporis. Enim incidunt voluptates
          sequi modi eum repellendus aliquam nulla facilis, voluptas ea ad?
        </h2>
      </div>
    </div>
  );
};

export default DeliVeryDetails;
