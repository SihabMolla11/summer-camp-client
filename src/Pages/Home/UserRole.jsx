import { useContext } from "react";
import {
  FaUserTie,
  FaUserGraduate,
  FaUserCog,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const UserRole = () => {
  const { loggingUser } = useContext(AuthContext);
  // console.log(loggingUser);

  return (
    <div className="bg-[#EEEFF8] rounded-lg text-center mb-10">
      <h2 className="text-center font-bold text-[#464545] capitalize pt-10 text-4xl geradingText">
        User Role And User Work Section
      </h2>
      <p className="text-center my-2">
        We have three Types of users in our website. They have different type of
        role. some user is student, <br /> some user is Instructors and admin
        community.
      </p>

      <div className="py-10 px-16 gap-24 justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className=" p-10 w-full rounded-xl drop-shadow-2xl bg-white">
          <div className="flex justify-center">
            <span className="bg-purple-200  text-purple-600 p-6 rounded-full text-6xl">
              <FaUserGraduate />
            </span>
          </div>
          <h2 className="text-2xl mt-4 uppercase text-gray-600">
            -- <span className="font-bold">Student</span> --
          </h2>
          <p className=" text-[#00000075] mt-4">
            Those who are students on our website can enroll in any instructors
            class if they want and can take classes with him in this summer camp
            to learn something new.
          </p>

          <button
            disabled={loggingUser?.role !== "student"}
            className="absolute btn right-32 hover:bg-purple-600 bottom-3 bg-purple-600 text-white p-3 text-xl rounded-full"
          >
            <Link to="/dashboard">
              <FaArrowRight />
            </Link>
          </button>
        </div>

        <div className=" p-10 w-full rounded-xl drop-shadow-2xl bg-white">
          <div className="flex justify-center">
            <span className=" bg-teal-100  text-teal-500 p-6 rounded-full text-6xl">
              <FaUserTie />
            </span>
          </div>
          <h2 className="text-2xl mt-4 uppercase text-gray-600">
            -- <span className="font-bold">instructor</span> --
          </h2>
          <p className=" text-[#00000075] mt-4">
            Here an instructor can post his classes. The classes he can teach at
            this summer camp.
          </p>
          <button
            disabled={loggingUser?.role !== "instructor"}
            className="absolute btn right-32 bottom-3 hover:bg-teal-500 bg-teal-500 text-white p-3 text-xl rounded-full"
          >
            <Link to="/dashboard">
              <FaArrowRight />
            </Link>
          </button>
        </div>

        <div className=" p-10 w-full rounded-xl drop-shadow-2xl bg-white">
          <div className="flex justify-center">
            <span className="bg-orange-100  text-[#ff9100] p-6 rounded-full text-6xl">
              <FaUserCog />
            </span>
          </div>
          <h2 className="text-2xl mt-4 uppercase text-gray-600">
            -- <span className="font-bold">admin</span> --
          </h2>
          <p className=" text-[#00000075] mt-4 mb-6">
            Admin can control this full website. That when an instructor posts a
            cocoa class First go to admin. If the class seems good to the admin,
            he will approve the class, otherwise he will deny it
          </p>
          <button
            disabled={loggingUser?.role !== "admin"}
            className="absolute btn right-32 bottom-3 hover:bg-[#ff9100] bg-[#ff9100] text-white p-3 text-xl rounded-full"
          >
            <Link to="/dashboard">
              <FaArrowRight />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserRole;
