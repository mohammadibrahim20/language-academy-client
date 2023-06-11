import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const ModalForm = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const { id } = useParams();
  console.log(id);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const seat_capacity = parseInt(form.seat_capacity.value);
    const price = parseFloat(form.price.value);

    const updatedDoc = {
      title,
      seat_capacity,
      price,
    };
    alert("addd");
    axios
      .put(`https://assignment-final-server.vercel.app/update-class/${id}`, updatedDoc)
      .then((res) => {
        console.log(res.data);
        alert("uploaded successfully");
        navigate("/dashboard/my-classes", { replace: true });
      });
  };

  return (
    <div className="max-w-screen-md mx-auto ">
      <div className="text-center mb-16">
        <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
          <span className="text-indigo-600">Update Class</span>
        </h3>
      </div>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-name"
            >
              Class Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-name"
              type="text"
              name="title"
              placeholder="Class Title"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-instructor-name"
            >
              Instructor Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-instructor-name"
              type="text"
              name="instructor_name"
              defaultValue={user?.displayName}
              readOnly
              // placeholder="Name"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-instructor-email"
            >
              Instructor Email
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-instructor-email"
              type="email"
              name="instructor_email"
              defaultValue={user?.email}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-instructor-name"
            >
              Seat Capacity
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-instructor-name"
              type="number"
              name="seat_capacity"
              required
              placeholder="Seat Capacity"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-instructor-email"
            >
              Class Fee
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-instructor-email"
              type="number"
              name="price"
              placeholder="$00"
            />
          </div>
        </div>

        <div className="flex justify-between w-full px-3">
          <input
            type="submit"
            className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
            value="Update CLass"
          />
        </div>
      </form>
    </div>
  );
};

export default ModalForm;
