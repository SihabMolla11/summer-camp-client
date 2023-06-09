import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { MdOutlineAddAPhoto } from "react-icons/md";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  const role = user?.role;

  return (
    <div>
      <div className="flex justify-center mt-5">
        <img className="rounded-full h-16 w-16" src={user?.photoURL} alt="" />
      </div>
      <h2 className="text-center text-xl font-bold">{user?.displayName}</h2>
      <div className="text-center">
        {role === "instructor" ? (
          ""
        ) : (
          <button className="my-btn mt-5">
            <MdOutlineAddAPhoto className="text-2xl" /> Become A Instructor
          </button>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
