import { updateProfile } from "firebase/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { saveUser } from "../../Api/api";
import useAuth from "../../Hooks/useAuth";
import loginImg from "../../assets/background/share.png";
import GoogleLogin from "../Shared/GoogleLogin/GoogleLogin";
import SubBanner from "../Shared/SubBanner/SUbBanner";

const SignUp = () => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();
  const { createUser, auth } = useAuth();
  const password = watch("password");

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((res) => {
        const user = res.user;
        // console.log(user);

        console.log(data.photo, data.name);
        updateProfile(auth.currentUser, {
          displayName: data.name,
          photoURL: data.photo,
        })
          .then(() => {
            // toast.success("New Account Successfully created");
            saveUser(user.email, "student", data.photo, data.name);
            toast.success("successfully created account");
            navigate("/");
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
    console.log(data);
  };

  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,}$/;
  return (
    <div>
      <SubBanner title="Register Now" subTitle="Please Register Now" />
      <div>
        <section className="bg-gray-50 pt-20 flex items-center justify-center">
          <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-4xl p-5 items-center">
            <div className="md:w-1/2 px-8 md:px-16">
              <h2 className="font-bold text-2xl text-[#002D74]">Register</h2>
              <p className="text-xs mt-4 text-[#002D74]">
                Kindly fill in this form to regiser
              </p>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-4"
              >
                <input
                  {...register("name", { required: true })}
                  className="p-2 mt-8 rounded-xl border"
                  type="text"
                  name="name"
                  placeholder="Your Full Name"
                  required
                />
                <input
                  {...register("photo", { required: true })}
                  className="p-2 rounded-xl border"
                  type="url"
                  name="photo"
                  placeholder="Photo URL"
                  required
                />
                <input
                  {...register("email", { required: true })}
                  className="p-2 rounded-xl border"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
                <div className="relative">
                  <input
                    {...register("password", {
                      required: "Password is required",
                      pattern: {
                        value: passwordRegex,
                        message:
                          "Password must contain at least 6 characters, one uppercase letter, one lowercase letter, and one number",
                      },
                    })}
                    className="p-2 rounded-xl border w-full"
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                  {errors.password && (
                    <span className="text-justify text-red-400">
                      <small>{errors.password.message}</small>
                    </span>
                  )}
                </div>
                <div className="relative">
                  <input
                    {...register("confirmPassword", {
                      required: "Confirm Password is required",
                      validate: (value) =>
                        value === password || "Passwords do not match",
                    })}
                    className="p-2 rounded-xl border w-full"
                    type="password"
                    placeholder="Confirm Password"
                  />
                  {errors.confirmPassword && (
                    <span className="text-justify text-red-400">
                      <small>{errors.confirmPassword.message}</small>
                    </span>
                  )}
                </div>
                <input
                  type="submit"
                  value="Register"
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

            <div className="md:block hidden md:w-1/2">
              <img className="rounded-2xl" src={loginImg} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SignUp;
