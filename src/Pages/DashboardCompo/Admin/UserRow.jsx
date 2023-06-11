import axios from "axios";

const UserRow = ({ userData, setIsChange }) => {
  const makeUserRole = (role, user) => {
    setIsChange();
    const currentUser = {
      email: user,
      role: role,
    };
    axios
      .patch(`https://assignment-final-server.vercel.app/users/${user}`, currentUser)
      .then((res) => {
        console.log(res.data);
        setIsChange(true);
      });
  };
  return (
    <tr>
      <td>Image</td>
      <td>{userData.email}</td>
      <td>
        <p className="badge badge-error gap-2 px-3 mb-3">{userData.role}</p>
      </td>
      <td>
        <button
          onClick={() => makeUserRole("instructor", userData.email)}
          disabled={userData.role === "instructor"}
          className="btn btn-accent btn-xs rounded-full"
        >
          Make Instructor
        </button>
      </td>
      <td>
        <button
          onClick={() => makeUserRole("admin", userData.email)}
          disabled={userData.role === "admin"}
          className="btn btn-success btn-xs rounded-full"
        >
          Make Admin
        </button>
      </td>
    </tr>
  );
};

export default UserRow;
