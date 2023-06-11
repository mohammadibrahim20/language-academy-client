import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import ContainerXL from "../../../components/ContainerXL";

const Navbar = () => {
  //  const {user} = useContext(AuthContext)
  const { user, logOut } = useAuth();
  const nav = (
    <>
      <NavLink to="/" className="btn btn-ghost">
        Home
      </NavLink>

      <NavLink to="/instructors" className="btn btn-ghost">
        Instructors
      </NavLink>

      <NavLink to="/classes" className="btn btn-ghost">
        Classes
      </NavLink>
      {user && (
        <NavLink to="/dashboard" className="btn btn-ghost">
          Dashboard
        </NavLink>
      )}
    </>
  );
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  return (
    <ContainerXL>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={1} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={1}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              // className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {nav}
            </ul>
          </div>

          {/* <a className="btn btn-ghost normal-case text-xl">LanguageAcademy</a> */}
          <Link to="/">
            <img
              className="h-8 md:h-12"
              src="https://www.languageacademy.org.in/wp-content/uploads/2019/01/Logo-language-academy.png"
              alt=""
            />
          </Link>
        </div>
       
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{nav}</ul>
        </div>
        <div className="navbar-end">
          {user && user?.email ? (
            <>
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div title={user?.displayName} className="w-10 rounded-full">
                  <img src={user?.photoURL} />
                </div>
              </label>
              <button onClick={handleLogout} className="btn btn-ghost">
                Logout
              </button>
            </>
          ) : (
            <NavLink to="/login" className="btn btn-ghost">
              Login
            </NavLink>
          )}
          {/* <a className="btn">Button</a> */}
        </div>
      </div>
    </ContainerXL>
  );
};

export default Navbar;
