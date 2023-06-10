import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import PaymentRow from "./PaymentRow";

const PaymentHistory = () => {
  const { user, loading } = useAuth();

  const [axiosSecure] = useAxiosSecure();
  const { data: payments = [], refetch } = useQuery({
    queryKey: ["/payment-history", user?.email],
    // enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/payment-history/${user?.email} `);

      return res.data;
    },
  });

  console.log(payments);
  return (
    <div>
      <div className=" bg-white shadow-xl rounded-lg px-5 py-7 space-y-3">
        <h2 className="text-2xl font-bold">My Selected Class</h2>
        <p>Manage your courses and delete, pay and enrolled </p>
        <hr />
      </div>
      <div>
        <table className="table">
          {/* head */}
          <thead className="rounded-none bg-gray-200 text-black">
            <tr>
              <th>Title</th>
              <th>Instructor</th>
              <th>Price</th>
              <th>Date</th>
              <th>Transaction Id</th>
            </tr>
          </thead>
          <tbody>
            {payments?.map((payment) => (
              <PaymentRow key={payment._id} payment={payment} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
