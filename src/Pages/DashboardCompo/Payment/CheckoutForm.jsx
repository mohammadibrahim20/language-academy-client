import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import "./CheckoutForm.css";
const CheckoutForm = ({ bookingPay }) => {
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    if (bookingPay.price > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: bookingPay.price })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [bookingPay, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error", error);
      setProcessing(false);
      setCardError(error.message);
    } else {
      setCardError(" ");
      setProcessing(false);
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
      setProcessing(false);

      setCardError(confirmError.message);
    }

    console.log("payment intent", paymentIntent);

    if (paymentIntent.status === "succeeded") {
      const paymentInfo = {
        // ...bookingPay,

        transactionId: paymentIntent.id,
        date: new Date(),
      };
      axiosSecure
        .patch(`/booking/update/${bookingPay._id}`, paymentInfo)
        .then((res) => {
          console.log(res.data);
          toast.success("payment success");
          if (res.data) {
            console.log(bookingPay.bookingId);
            // navigate("/dashboard/enrolled");
            const seat_capacity = bookingPay.seat_capacity
            const enrolled = bookingPay.enrolled
            const doc = {
              seat_capacity,
              enrolled,
            };
            console.log(doc);
            axiosSecure
              .put(`/enrolled/${bookingPay.bookingId}`, doc)
              .then((data) => {
                console.log(data);
                navigate('/dashboard/enrolled')
                toast.success("pay and updated");
                setProcessing(false);
              })
              .catch((err) => {
                setProcessing(false);
                console.log(err);
              });
          }
        })
        .catch((error) => {
          console.log(error);
          setProcessing(false);
        });
    }
  };

  return (
    <>
      <form className="my-2" onSubmit={handleSubmit}>
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
        <div className="flex mt-2 justify-around">
          {/* <button
            type="button"
            className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
          >
            Cancel
          </button> */}
          <button
            type="submit"
            disabled={!stripe || !clientSecret || processing}
            className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
          >
            {processing ? <p>processing</p> : `Pay${bookingPay?.price}`}
          </button>
        </div>
      </form>
      {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
    </>
  );
};

export default CheckoutForm;
