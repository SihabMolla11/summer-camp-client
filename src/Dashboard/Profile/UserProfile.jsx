import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BecomInstructor from "../../Components/BecomeHostBtn/BecomInstructor";

const UserProfile = () => {
  const { user, loggingUser } = useContext(AuthContext);

  return (
    <div>
      <div className="flex justify-center mt-5">
        <img className="rounded-full h-16 w-16" src={user?.photoURL} alt="" />
      </div>
      <h2 className="text-center text-xl mt-5 font-bold">
        {user?.displayName}
      </h2>
      <h2 className="text-center text-lg mt-3 font-bold">{user?.email}</h2>
      <div className="text-center">
        {/* <div
          className={`cursor-pointer my-btn mt-5 ${
            loggingUser?.role === "instructor" ? "hidden" : ""
          }`}
        >
          <BecomInstructor />
        </div> */}

        <div
          className={`cursor-pointer mt-3 bg-[#FD603D] mx-6 rounded-lg px-3 py-2  ${
            loggingUser?.role === "instructor" ? "hidden" : ""
          }`}
        >
          <BecomInstructor />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
