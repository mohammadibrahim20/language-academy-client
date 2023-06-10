import { BiBookReader } from "react-icons/bi";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { MdPersonAddAlt1 } from "react-icons/md";

const ClassList = ({ classList }) => {
  console.log(classList);
  const { title, seat_capacity, price, status, calss_image, enrolled, _id } =
    classList;
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
      </td>
      <td>
        <div className="flex justify-center items-center gap-3">
          <HiOutlineCurrencyDollar className="text-sky-600" />
          <strong>{price}</strong>
        </div>
      </td>
     <td><p className="badge badge-neutral">Paid</p></td>
    </tr>
  );
};

export default ClassList;
