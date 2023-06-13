import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const UserProfile = () => {
  const { user, loggingUser } = useContext(AuthContext);

  return (
    <div>
      <div className="flex justify-center mt-5">
        <img
          className="rounded-full h-24 w-24 border-4"
          src={user?.photoURL}
          alt=""
        />
      </div>
      <h2 className="px-5 text-center hover:text-white uppercase text-[#a0a0a0] text-2xl mt-5 font-medium">
        {user?.displayName}
      </h2>
      <h2 className="px-5 hover:text-white text-blue-200 text-lg  font-medium">
        Email: <span className=" border-b-2 cursor-pointer  border-blue-700">{user?.email}</span>
      </h2>
      <div className="px-5 hover:text-white text-blue-200 text-lg font-medium">You are a <span className="text-orange-500"> {loggingUser?.role}</span></div>
    </div>
  );
};

export default UserProfile;
