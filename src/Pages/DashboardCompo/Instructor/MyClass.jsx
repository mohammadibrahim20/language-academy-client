import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import CLassRow from "./CLassRow";

const MyClass = () => {
  const { user } = useAuth();

  const [classData, setClassData] = useState();
  useEffect(() => {
    if (user) {
      axios.get(`http://localhost:5000/my-class/${user.email}`).then((res) => {
        setClassData(res.data);
      });
    }
  }, [user]);
  //   console.log(classData);
  const openModel = (row) => {
    window.my_modal_4.showModal();
    console.log(row);
  };
  return (
    <div>
      <div className=" bg-white shadow-xl rounded-lg px-5 py-7 space-y-3">
        <h2 className="text-2xl font-bold">My CLasses</h2>
        <p>Manage your courses and its update like live, draft and insight.</p>
        <hr />
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="rounded-none bg-gray-200 text-black">
              <tr>
                <th>Details</th>
                <th>Student & Price</th>
                <th>Action</th>
                <th>Status</th>
                {/* <th>Feedback</th> */}
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {classData?.map((row) => (
                <CLassRow key={row._id} openModel={openModel} row={row} />
              ))}
            </tbody>
          </table>
          {/* <button className="btn" onClick={()=>}>open modal</button> */}

          <dialog id="my_modal_4" className="modal">
            <form method="dialog" className="modal-box w-11/12 max-w-5xl">
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">Click the button below to close</p>
              <div className="modal-action">
                {/* if there is a button, it will close the modal */}
                <button className="btn">Close</button>
              </div>
            </form>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default MyClass;
