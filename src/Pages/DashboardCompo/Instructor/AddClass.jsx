import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import useAuth from "../../../Hooks/useAuth";

const AddClass = () => {
  const { user } = useAuth();
  console.log(user);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };
  const url = `https://api.imgbb.com/1/upload?key=${
    import.meta.env.VITE_IMGBB_KEY
  }`;
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const instructor_name = form.instructor_name.value;
    const instructor_email = form.instructor_email.value;
    const seat_capacity = parseInt(form.seat_capacity.value);
    const price = parseFloat(form.price.value);
    const instructor_photo = user?.photoURL;
    const status = "pending";
    if (selectedImage) {
      const formData = new FormData();
      formData.append("image", selectedImage);
      axios.post(url, formData).then((res) => {
        // console.log(res.data);
        if (res.data.success) {
          const calss_image = res.data.data.display_url;
          const doc = {
            instructor_name,
            title,
            instructor_email,
            seat_capacity,
            price,
            instructor_photo,
            status,
            calss_image,
            enrolled: 0,
          };
          axios.post(`https://assignment-final-server.vercel.app/add-class`, doc).then((res) => {
            console.log(res.data);
            toast.success("uploaded successfully");
          });
        }
      });
    }
    // console.log(title, instructor_photo, instructor_name,  instructor_email, seat_capacity, price, status, banner)
  };
  // console.log(selectedImage)
  return (
    <div>
      <div>
        <div className="max-w-screen-md mx-auto ">
          <div className="text-center mb-16">
            <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
              Get In <span className="text-indigo-600">Add New Class</span>
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
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-cover"
                >
                  Upload Your Class Thumbnails
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-cover"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </div>
            </div>

            <div className="flex justify-between w-full px-3">
              <div className="md:flex md:items-center">
                <label className="block text-gray-500 font-bold">
                  <input
                    checked
                    className="mr-2 leading-tight"
                    type="checkbox"
                  />
                  <span className="text-sm">Upload New Class</span>
                </label>
              </div>
              <button
                className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                type="submit"
              >
                Add Class
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddClass;
