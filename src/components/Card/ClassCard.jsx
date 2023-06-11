import axios from "axios";
import { BiBookReader } from "react-icons/bi";
import { FcManager } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";

const ClassCard = ({ card }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const {
    instructor_name,
    title,
    seat_capacity,
    price,
    instructor_photo,
    status,
    enrolled,
    calss_image,
  } = card;
  const { _id, ...new_cards } = card;
  const handleBookClass = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "add class Now!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Add Class!",
    }).then((result) => {
      if (result.isConfirmed) {
        if (!user) {
          toast.warning("Please Login Now!");
          return navigate("/login");
        }
        const bookCard = {
          ...new_cards,
          bookingId: _id,
          student_Name: user.displayName,
          student_Email: user.email,
        };
        axios.post(`https://assignment-final-server.vercel.app/book-class`, bookCard);
        Swal.fire("Added!", "Your class is Added", "success");
      }
    });
  };

  return (
    <div className={`card  shadow-xl ${seat_capacity === 0 ? "bg-red-300" : "bg-base-100" }`} data-aos="fade-up">
      <figure className="px-5 pt-5  object-cover">
        <img
          src={calss_image}
          alt="thumbnails"
          className="rounded-xl h-56 w-full object-cover"
        />
      </figure>
      <div className="px-8 pt-8 space-y-4">
        <div className="flex justify-between items-cnter">
          <div className="avatar">
            <div className="w-10 h-10 rounded-full">
              <img src={instructor_photo} />
            </div>
          </div>
          <div className="flex-1 ml-2 text-left">
            <h4 className="text-lg font-bold">{instructor_name}</h4>
            <p>Instructor</p>
          </div>
          <span className="flex items-center text-xl ">
            Price: <strong>{price}$</strong>
          </span>
        </div>
        <h3 className="font-semibold text-xl">{title}</h3>
        <div className="flex justify-between items-center">
          <span className="flex items-center">
            <BiBookReader className="text-red-500 mr-3" />
            <strong>Availble Seat:</strong> {seat_capacity}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="flex items-center">
            <FcManager className="text-red-500 mr-3" />
            <strong>Enrolled:</strong> {enrolled}
          </span>
        </div>
      </div>
      <div className="flex flex-col mt-auto justify-around my-3 mx-5">
        <div className="divider"></div>
        <div className="text-center">
          <button
            disabled={seat_capacity === 0}
            onClick={handleBookClass}
            className="btn btn-outline border-indigo-200 backdrop-blur hover:bg-indigo-400 hover:border-indigo-600 ring-1 rounded-full "
          >
            Add Course
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
