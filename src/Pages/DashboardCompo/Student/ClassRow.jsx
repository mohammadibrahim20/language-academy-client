import axios from "axios";
import { BiBookReader } from "react-icons/bi";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { MdOutlineCancel, MdPersonAddAlt1 } from "react-icons/md";
import Swal from "sweetalert2";

const ClassRow = ({ booking, refetch, openModal }) => {
  const { title, seat_capacity, price, status, calss_image, enrolled, _id } =
    booking;

  const handleDelte = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`https://assignment-final-server.vercel.app/delete-book/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire("Deleted!", "Your class has been deleted.", "success");
          }
        });
      }
    });
  };

  return (
    <tr>
      <td>
        <div className="flex items-start space-x-3">
          <div className="avatar">
            <div className="w-24 h-24">
              <img src={calss_image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{title}</div>
            <span className="flex items-center">
              <BiBookReader className="text-red-500 mr-3" />
              <strong>Availble Seat:</strong> {seat_capacity}
            </span>
          </div>
        </div>
      </td>
      <td className="text-start">
        <div className="flex justify-center items-center gap-3">
          <MdPersonAddAlt1 className="text-blue-600" />
          <strong>{enrolled}</strong>
        </div>
        <div className="flex justify-center items-center gap-3">
          <HiOutlineCurrencyDollar className="text-sky-600" />
          <strong>{price}</strong>
        </div>
      </td>
      <td>
        <button
          onClick={() => handleDelte(_id)}
          className="btn btn-error btn-sm w-full"
          disabled={booking.date}
        >
          <span className="flex justify-center items-center gap-1 ">
            <MdOutlineCancel className="text-xl text-white" /> Delete
          </span>
        </button>
      </td>
      <td className="h-24 space-y-3">
        <button
        disabled={booking.date}
          onClick={() => openModal(booking)}
          className="btn btn-xs btn-outline border-green-500 w-full"
        >
          Pay
        </button>
      </td>
    </tr>
  );
};

export default ClassRow;
