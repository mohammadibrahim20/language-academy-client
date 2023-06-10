import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const ModalData = ({ bookingPay }) => {
  const { title, seat_capacity, price, status, calss_image, enrolled, _id } =
    bookingPay;
  const stripePromise = loadStripe(import.meta.env.VITE_Payment_Getway_PK);

  return (
    <div>
      <h2 className="text-lg font-bold">{title}</h2>
      <p>Price: {price}</p>
      <p>Seat Capacity: {seat_capacity}</p>
      <Elements stripe={stripePromise}>
        <CheckoutForm bookingPay={bookingPay} />
      </Elements>
    </div>
  );
};

export default ModalData;
