import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";

const CheckoutForm = ({ data }) => {
  // console.log(data);

  const { price } = data;

  const { user } = useContext(AuthContext);

  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransectionId] = useState("");

  useEffect(() => {
    axios
      .post(`${import.meta.env.VITE_API_LINK}/payment-intent`, { price })
      .then((res) => {
        // console.log(res.data);
        setClientSecret(res.data.clientSecret);
      });
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    setProcessing(true);

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error", error);
      toast.error(error.message);
    } else {
      // console.log("PaymentMethod", paymentMethod);
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "un none",
            email: user?.email || "anonymous Email",
          },
        },
      });
    if (confirmError) {
      toast.error(confirmError.message);
      // console.log(confirmError);
    }

    setProcessing(false);

    console.log("PAYMENTiNTENT", paymentIntent);
    if (paymentIntent?.status === "succeeded") {
      // const transactionId = paymentIntent?.id;
      setTransectionId(paymentIntent?.id);
      toast.success(`$ ${data?.price} Payed successful`);
      // TODO next stps
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="bg-[orange] mt-4 px-4 py-2 rounded-md text-white font-medium"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay Now
        </button>
        <Toaster />
      </form>
    </>
  );
};

export default CheckoutForm;
