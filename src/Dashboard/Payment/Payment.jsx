import { useLoaderData } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_METHOD_PK);

const Payment = () => {
  const data = useLoaderData();
  // console.log(data);

  return (
    <div className="items-center h-full grid justify-center  ">
      {/* <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img className="w-full h-96" src={data?.classImage} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="card-title text-2xl capitalize text-[#00000098]">
                class name: {data?.name}
                <span className="badge badge-secondary">$ {data?.price}</span>
              </h2>
              <p className=" text-lg font-medium">
                Instructor Name: {data?.instructorName}
              </p>
              <p className="text-blue-500 font-bold text-md">
                Please Pay for this class Only ${data?.price}
              </p>
            </div>
            <div><p>this is payment form</p></div>
          </div>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
        <p></p>
      </div> */}

      <div className="border-2 w-[] p-20 border-[orange] rounded-md bg-[#ffa60010]">
        <h2 className="text-2xl font-medium capitalize my-5 text-[#00000094]">
          Pay <span className=" text-[orange]">${data?.price}</span> for{" "}
          <span className=" text-blue-500 font-bold">{data?.name}</span> class
        </h2>

        <Elements stripe={stripePromise}>
          <CheckoutForm data={data} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
