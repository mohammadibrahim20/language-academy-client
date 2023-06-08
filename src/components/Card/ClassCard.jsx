import { BiBookReader } from "react-icons/bi";

const ClassCard = ({ card }) => {
  const {
    instructor_name,
    title,
    seat_capacity,
    price,
    instructor_photo,
    status,
    calss_image,
  } = card;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-5 pt-5  object-cover">
        <img src={calss_image} alt="thumbnails" className="rounded-xl h-56 w-full object-cover" />
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
        <h3 className="font-semibold text-xl">
          {title}
        </h3>
        <div className="flex justify-between items-center">
          <span className="flex items-center">
            <BiBookReader className="text-red-500 mr-3" />
            <strong>Availble Seat:</strong> {seat_capacity}
          </span>
        </div>
      </div>
      <div className="flex flex-col mt-auto justify-around my-3 mx-5">
        <div className="divider"></div>
        <div className="text-center">
        <button className="btn btn-outline border-indigo-200 backdrop-blur hover:bg-indigo-400 hover:border-indigo-600 ring-1 rounded-full ">
          Add Course
        </button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
