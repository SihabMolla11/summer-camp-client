import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaRegUserCircle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const NavItem = () => {
  const { user, logOut } = useContext(AuthContext);

  const handelLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
  };

  const menuItems = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/instructors">Instructors</NavLink>
      </li>
      <li>
        <NavLink to="/classes">Classes</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <>{menuItems}</>
            </ul>
          </div>
          <Link to="/">
            <img
              className=""
              src={logo}
              alt="Play ground"
              height="100"
              width="100"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="gap-6 text-md font-medium menu-horizontal px-1">
            {menuItems}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="hidden md:block">
            <div className="flex  items-center gap-5">
              {user ? (
                <button onClick={handelLogOut} className="my-btn">
                  Log Out
                </button>
              ) : (
                <Link to="/login" className="my-btn">
                  Login
                </Link>
              )}
              <div className="dropdown dropdown-end ">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className=" text-5xl rounded-full">
                    {user ? (
                      <img src={user?.photoURL} alt="" />
                    ) : (
                      <FaRegUserCircle />
                    )}
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content px-4 mt-3 space-y-2 py-3 px-5 shadow bg-base-100 rounded-box "
                >
                  {user ? (
                    <button className="px-4" onClick={handelLogOut}>
                      Logout
                    </button>
                  ) : (
                    <>
                      {" "}
                      <li>
                        <Link to="/login">Login</Link>
                      </li>
                      <li>
                        <Link to="/signup">Sign Up</Link>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>

          <div className=" md:hidden">
            <div className="dropdown dropdown-end ">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className=" text-4xl rounded-full">
                  {user ? (
                    <img src={user?.photoURL} alt="" />
                  ) : (
                    <FaRegUserCircle />
                  )}
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 py-3 px-5 shadow bg-base-100 rounded-box "
              >
                {user ? (
                  <button className="px-4" onClick={handelLogOut}>
                    Logout
                  </button>
                ) : (
                  <>
                    {" "}
                    <li>
                      <Link to="/login">Login</Link>
                    </li>
                    <li>
                      <Link to="/signup">Sign Up</Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavItem;
