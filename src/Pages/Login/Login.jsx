import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../../Hooks/useAuth";
import loginImg from "../../assets/background/share.png";
import GoogleLogin from "../Shared/GoogleLogin/GoogleLogin";
import SubBanner from "../Shared/SubBanner/SUbBanner";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const { signIn } = useAuth();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const onSubmit = (data) => {
    signIn(data.email, data.password)
      .then((loggedUser) => {
        const user = loggedUser.user;
        console.log(user);
        toast.success("login Successfully");
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
    console.log(data);
  };
  return (
    <div>
      <SubBanner title="Login Now" subTitle="Please Login Now" />
      <div>
        <section className="bg-gray-50 pt-20 flex items-center justify-center">
          <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
            <div className="md:w-1/2 px-8 md:px-16">
              <h2 className="font-bold text-2xl text-[#002D74]">Login</h2>
              <p className="text-xs mt-4 text-[#002D74]">
                If you are already a member, easily log in
              </p>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-4"
              >
                <input
                  {...register("email", { required: true })}
                  className="p-2 mt-8 rounded-xl border"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
                <div className="relative">
                  <input
                    {...register("password", { required: true })}
                    className="p-2 rounded-xl border w-full"
                    type={passwordVisible ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                  />

                  <svg
                    onClick={togglePasswordVisibility}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="gray"
                    className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                  </svg>
                </div>
                <input
                  type="submit"
                  className="bg-white hover:text-white border-blue-500 rounded-xl hover:bg-blue-800 py-2 hover:scale-105 duration-300"
                />
                Login
              </form>

              <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
                <hr className="border-gray-400" />
                <p className="text-center text-sm">OR</p>
                <hr className="border-gray-400" />
              </div>

              <GoogleLogin />

              <div className="mt-5 text-xs border-b border-[#002D74] py-4 text-[#002D74]">
                <a href="#">Forgot your password?</a>
              </div>

              <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
                <p>Don't have an account?</p>
                <Link
                  to="/signup"
                  className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300"
                >
                  Register
                </Link>
              </div>
            </div>

            <div className="md:block hidden w-1/2">
              <img className="rounded-2xl" src={loginImg} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
