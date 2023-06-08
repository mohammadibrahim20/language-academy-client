import axios from "axios";
import { useEffect, useState } from "react";
import AllClassRow from "./AllClassRow";

const ManageClass = () => {
  const [classData, setClassData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/all-class`).then((res) => {
      setClassData(res.data);
    });
  }, []);
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
                <th>Status</th>
                <th>Aprove & Deny</th>
                {/* <th>Feedback</th> */}
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {classData?.map((row) => (
                <AllClassRow key={row._id} row={row} />
              ))}
            </tbody>
          </table>
          {/* <button className="btn" onClick={()=>}>open modal</button> */}
        </div>
      </div>
    </div>
  );
};

export default ManageClass;
