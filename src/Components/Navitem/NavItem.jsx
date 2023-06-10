import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaRegUserCircle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BecomInstructor from "../BecomeHostBtn/BecomInstructor";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

const NavItem = () => {
  const { user, logOut, isInstructor } = useContext(AuthContext);

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

      {user ? (
        <li>
          <NavLink to="dashboard">Dashboard</NavLink>
        </li>
      ) : (
        <li>
          <NavLink to="signup">Sign Up</NavLink>
        </li>
      )}
    </>
  );

  return (
    <>
      <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <div>
            <Menu
              menuButton={
                <MenuButton>
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
                </MenuButton>
              }
              transition
            >
              <MenuItem>
                <NavLink to="/">Home</NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink to="/instructors">Instructors</NavLink>
              </MenuItem>
              <MenuItem>
                {" "}
                <NavLink to="/classes">Classes</NavLink>
              </MenuItem>
              {user ? (
                <MenuItem>
                  {" "}
                  <NavLink to="dashboard">Dashboard</NavLink>
                </MenuItem>
              ) : (
                <MenuItem>
                  <NavLink to="signup">Sign Up</NavLink>
                </MenuItem>
              )}
            </Menu>

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
          {user && (
            <>
              <div
                className={`cursor-pointer mr-4 border-2 px-3 py-2 rounded-full ${
                  isInstructor && "hidden"
                }`}
              >
                <BecomInstructor />
              </div>
            </>
          )}

          <div className=" hidden md:block">
            <div className="flex  items-center gap-5">
              {user ? (
                <button onClick={handelLogOut} className="my-outline-btn">
                  Log Out
                </button>
              ) : (
                <Link to="/login" className="my-outline-btn">
                  Login
                </Link>
              )}

              <Menu
                menuButton={
                  <MenuButton>
                    <div className=" text-5xl rounded-full">
                      {user ? (
                        <img
                          className=" rounded-full h-14 w-14"
                          src={user?.photoURL}
                          alt=""
                        />
                      ) : (
                        <FaRegUserCircle />
                      )}
                    </div>
                  </MenuButton>
                }
                transition
              >
                {user ? (
                  <MenuItem>
                    <button className="px-4" onClick={handelLogOut}>
                      Logout
                    </button>
                  </MenuItem>
                ) : (
                  <>
                    {" "}
                    <MenuItem>
                      <Link to="/login">Login</Link>
                    </MenuItem>{" "}
                    <MenuItem>
                      <Link to="/signup">Sign Up</Link>
                    </MenuItem>
                  </>
                )}
              </Menu>
            </div>
          </div>

          <div className=" block md:hidden">
            <Menu
              menuButton={
                <MenuButton>
                  <div className=" text-5xl rounded-full">
                    {user ? (
                      <img
                        className=" rounded-full h-14 w-14"
                        src={user?.photoURL}
                        alt=""
                      />
                    ) : (
                      <FaRegUserCircle />
                    )}
                  </div>
                </MenuButton>
              }
              transition
            >
              {user ? (
                <MenuItem>
                  <button className="px-4" onClick={handelLogOut}>
                    Logout
                  </button>
                </MenuItem>
              ) : (
                <>
                  {" "}
                  <MenuItem>
                    <Link to="/login">Login</Link>
                  </MenuItem>{" "}
                  <MenuItem>
                    <Link to="/signup">Sign Up</Link>
                  </MenuItem>
                </>
              )}
            </Menu>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavItem;
