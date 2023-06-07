import axios from "axios";

export const saveUser = (user, role) => {
  const currentUser = {
    email: user,
    role: role,
  };
  axios
    .put(`http://localhost:5000/users/${user?.email}`, currentUser)
    .then((res) => {
      console.log(res.data);
    });
};
