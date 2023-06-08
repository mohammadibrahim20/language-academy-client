import { BiBookReader } from "react-icons/bi";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { MdMessage, MdPersonAddAlt1 } from "react-icons/md";

const CLassRow = ({ row }) => {
  const {
    instructor_name,
    title,
    seat_capacity,
    price,
    instructor_photo,
    status,
    calss_image,
    enrolled,
  } = row;
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
          {" "}
          <HiOutlineCurrencyDollar className="text-sky-600" />{" "}
          <strong>{price}</strong>
        </div>
      </td>
      <td>
        <button className="btn btn-success rounded-none btn-sm">Update</button>
      </td>
      <th>
        <div>
          {status === "approved" && (
            <p className="badge badge-success gap-2 btn-sm mb-3">{status}</p>
          )}
          {status === "pending" && (
            <button className="btn btn-warning btn-xs rounded-full">
              {status}
            </button>
          )}
          {status === "denied" && (
            <p className="badge badge-error gap-2 mb-3">{status}</p>
          )}
        </div>
      </th>
      <td>
        <button className="btn btn-outline  btn-xs">
          <MdMessage className="text-blue-500 cursor-pointer  text-center" />
        </button>
      </td>
    </tr>
  );
};

export default CLassRow;
