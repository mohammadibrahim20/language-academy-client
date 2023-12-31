import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import ModalData from "../Payment/ModalData";
import ClassRow from "./ClassRow";

const MySelectedClass = () => {
  const { user, loading } = useAuth();

  const [bookingPay, setBookingPay] = useState({});
  const [axiosSecure] = useAxiosSecure();
  /*   const { data: bookings = [], refetch } = useQuery(
    ["my-class", user?.email],
    async () => {
      const res = await axios.get(
        `https://assignment-final-server.vercel.app/my-class/${user?.email}`
      );
      return res.data;
    }
  ); */
  const { data: bookings = [], refetch } = useQuery({
    queryKey: ["my-class", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/my-class/${user?.email} `);
      return res.data;
    },
  });
  // useEffect(() => {
  //   axios.get(`https://assignment-final-server.vercel.app/my-class/${user?.email}`).then((data) => {
  //     setBookings(data.data);
  //   });
  // }, [user?.email]);
  const openModal = (booking) => {
    window.my_modal_3.showModal();
    setBookingPay(booking);
  };

  return (
    <div>
      <div className=" bg-white shadow-xl rounded-lg px-5 py-7 space-y-3">
        <h2 className="text-2xl font-bold">My Selected Class</h2>
        <p>Manage your courses and delete, pay and enrolled </p>
        <hr />
        <div>
          <table className="table">
            {/* head */}
            <thead className="rounded-none bg-gray-200 text-black">
              <tr>
                <th>Details</th>
                <th>Student & Price</th>
                <th>Delete</th>
                <th>Payment</th>
                {/* <th>Feedback</th> */}
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {bookings?.map((booking, index) => (
                <ClassRow
                  key={index + 1}
                  booking={booking}
                  refetch={refetch}
                  openModal={openModal}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <dialog id="my_modal_3" className="modal">
        <div method="dialog" className="modal-box">
          <button
            htmlFor="my-modal-3"
            className="border-0 absolute right-2 top-2"
          >
            ESC <small className="text-red-600 font-semibold">Close Modal</small>
          </button>
          <h3 className="font-bold text-lg text-blue-600 pb-3">Payment Now!</h3>
          <hr />
          <ModalData bookingPay={bookingPay} />
        </div>
      </dialog>
    </div>
  );
};

export default MySelectedClass;
