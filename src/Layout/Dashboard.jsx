import { MdFeaturedVideo } from "react-icons/md";
import { Link, NavLink, Outlet } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import ContainerXL from "../components/ContainerXL";

const Dashboard = () => {
  const { user, role } = useAuth();

  console.log(role);
  return (
    <>
      <Navbar />
      <ContainerXL>
        <div className="grid grid-cols-4 gap-5 mt-16">
          <aside>
            <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto bg-white shadow-xl rounded-lg text-gray-900">
              <div className="rounded-t-lg h-32 overflow-hidden">
                <img
                  className="object-cover object-top w-full"
                  src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                  alt="Mountain"
                />
              </div>
              <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                <img
                  className="object-cover object-center h-32"
                  src={user?.photoURL}
                  alt="User"
                />
              </div>
              <div className="text-center mt-2">
                <h2 className="font-semibold">{user?.displayName}</h2>
                <p className="text-gray-500">{role}</p>
              </div>
              <div className="p-4 border-t mx-8 mt-2">
                <Link
                  to="/"
                  className="block mx-auto text-center rounded-full bg-blue-600 btn-outline hover:shadow-lg font-semibold text-white px-6 py-2"
                >
                  Home
                </Link>
              </div>
            </div>
            <div className="mt-10 bg-white shadow-xl rounded-lg px-5 pt-5">
              <h2 className="text-2xl text-[#002058] font-bold uppercase">
                Dashboard
              </h2>
              <div className="divider my-0"></div>
              {user && user.email && role === "instructor" && (
                <>
                  <NavLink
                    to="/dashboard/add-class"
                    className="my-2 w-full btn justify-start border-l-2 border-l-red-300"
                  >
                    <span className=" flex justify-start items-center font-semibold ">
                      <MdFeaturedVideo className="text-red-500 mr-3" />
                      Add CLass
                    </span>
                  </NavLink>
                  <hr />
                  <NavLink
                    to="/dashboard/myclass"
                    className="my-2 w-full btn justify-start border-l-2 border-l-red-300"
                  >
                    <span className="flex justify-start items-center font-semibold ">
                      <MdFeaturedVideo className="text-red-500 mr-3" />
                      My CLass
                    </span>
                  </NavLink>
                  <NavLink
                    to="/dashboard/myclass"
                    className="my-2 w-full btn justify-start border-l-2 border-l-red-300"
                  >
                    <span className="flex justify-start items-center font-semibold ">
                      <MdFeaturedVideo className="text-red-500 mr-3" />
                      My CLass
                    </span>
                  </NavLink>
                  <NavLink
                    to="/dashboard/myclass"
                    className="my-2 w-full btn justify-start border-l-2 border-l-red-300"
                  >
                    <span className="flex justify-start items-center font-semibold ">
                      <MdFeaturedVideo className="text-red-500 mr-3" />
                      My CLass
                    </span>
                  </NavLink>
                </>
              )}
            </div>
          </aside>
          <section className="col-span-3 ">
            <Outlet />
          </section>
        </div>
      </ContainerXL>
    </>
  );
};

export default Dashboard;
