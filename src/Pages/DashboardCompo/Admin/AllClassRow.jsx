import axios from "axios";
import { BiBookReader } from "react-icons/bi";
import { FcApproval } from "react-icons/fc";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { MdMessage, MdOutlineCancel, MdPersonAddAlt1 } from "react-icons/md";
import Swal from "sweetalert2";

const AllClassRow = ({ row }) => {
  const { title, seat_capacity, price, status, calss_image, enrolled, _id } =
    row;

  const handleDeny = (row) => {
    Swal.fire({
      title: "Class Denied",
      icon: "question",
      text: "Feedback Message",
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Send Feedback",
      showLoaderOnConfirm: true,
      preConfirm: (text) => {
        console.log(text);
        console.log(row._id);
        const doc = { feedback: text, status: "denied" };
        axios
          .put(`http://localhost:5000/update-class/${row._id}`, doc)
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => console.log(err));
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `Successfully send your Feedback and update role status`,
          imageUrl: result.value.avatar_url,
        });
      }
    });
  };
  const handleApprove = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Class Approve!",
      icon: "success",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, approved!",
    }).then((result) => {
      if (result.isConfirmed) {
        const doc = { status: "approved", feedback: false };
        axios
          .put(`http://localhost:5000/update-class/${id}`, doc)
          .then((res) => {
            console.log(res.data);
            Swal.fire("Approved!", "Your class is approved.", "success");
          })
          .catch((err) => console.log(err));
      }
    });
  };

  return (
    <>
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
              <>
                <p className="badge badge-error gap-2 mb-3">{status}</p>
                <button className="btn btn-outline  btn-xs">
                  <MdMessage className="text-blue-500 cursor-pointer  text-center" />
                </button>
              </>
            )}
          </div>
        </td>
        <td className="h-24 space-y-3">
          <div>
            <button
              title="approve"
              onClick={() => handleApprove(_id)}
              className="btn btn-xs btn-outline border-green-500 w-full"
            >
              <FcApproval className="text-xl" />
            </button>
          </div>
          <div>
            <button
              onClick={() => handleDeny(row)}
              title="Deny"
              className="btn btn-error btn-xs w-full"
            >
              <MdOutlineCancel className="text-xl text-white" />
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default AllClassRow;
