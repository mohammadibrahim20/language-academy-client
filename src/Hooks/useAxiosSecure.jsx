import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
  baseURL: "https://assignment-final-server.vercel.app",
});
const useAxiosSecure = () => {
  //   const { logOut } = useAuth();
  const navigate = useNavigate();
  const { logOut } = useAuth();

  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem("access_token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response && [401, 403].includes(error.response.status)) {
          await logOut();
          navigate("/login");
        }
        return Promise.reject(error);
      }
    );
  }, [navigate, logOut, axiosSecure]);

  return [axiosSecure];
};

export default useAxiosSecure;
