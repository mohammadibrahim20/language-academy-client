import axios from "axios";

export const saveUser = (user, role, photo, name) => {
  const currentUser = {
    email: user,
    role: role,
    user_photo: photo,
    user_name: name,
  };
  axios
    .patch(`https://assignment-final-server.vercel.app/users/${user?.email}`, currentUser )
    .then((res) => {
      console.log(res.data);
    });
};

export const getRole = async (email) => {
  const response = await fetch(`https://assignment-final-server.vercel.app/user/${email}`);
  const user = await response.json();
  return user?.role;
};
