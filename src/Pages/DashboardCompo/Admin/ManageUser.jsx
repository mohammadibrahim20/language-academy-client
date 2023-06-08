import axios from "axios";
import { useEffect, useState } from "react";
import UserRow from "./UserRow";

const ManageUser = () => {
  const [users, setUser] = useState([]);
  const [isChange, setIsChange] = useState(true);
  useEffect(() => {
    axios.get(`http://localhost:5000/users`).then((res) => {
      setUser(res.data);
    });
  }, [isChange]);

  return (
    <div>
      <div className=" bg-white shadow-xl rounded-lg px-5 py-7 space-y-3 min-h-[calc(100vh-220px)] overflow-y-auto">
        <h2 className="text-2xl font-bold">All Users</h2>
        <p>Manage All Student and Instructor</p>
        <hr />
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="rounded-none bg-gray-200 text-black">
              <tr>
                <th>Photo</th>
                <th>Email & User Name</th>
                <th>Role</th>
                <th>Make Instructor</th>
                <th>Make Admin</th>
                {/* <th>Feedback</th> */}
              </tr>
            </thead>
            <tbody>
              {users.map((userData) => (
                <UserRow key={userData._id} userData={userData} setIsChange={setIsChange} />
              ))}
            </tbody>
          </table>
          {/* <button className="btn" onClick={()=>}>open modal</button> */}
        </div>
      </div>
    </div>
  );
};

export default ManageUser;
