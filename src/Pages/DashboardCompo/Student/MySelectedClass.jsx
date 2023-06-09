import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import ClassRow from "./ClassRow";

const MySelectedClass = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState();

  /*   const { data: bookings = [], refetch } = useQuery(
    ["my-class", user?.email],
    async () => {
      const res = await axios.get(
        `http://localhost:5000/my-class/${user?.email}`
      );
      return res.data;
    }
  ); */
  useEffect(() => {
    axios.get(`http://localhost:5000/my-class/${user?.email}`).then((data) => {
      setBookings(data.data);
    });
  }, [user?.email]);

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
              {bookings?.map((booking) => (
                <ClassRow
                  key={booking._id}
                  booking={booking}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MySelectedClass;
