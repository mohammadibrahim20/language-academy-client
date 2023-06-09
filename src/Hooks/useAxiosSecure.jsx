import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});
const useAxiosSecure = () => {
  //   const { logOut } = useAuth();
  const navigate = useNavigate();
  const { logOut } = useAuth();

  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem("access_token");
      if (token) {
        config.Headerss.Authorization = `Bearer ${token}`;
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
