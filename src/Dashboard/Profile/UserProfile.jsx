import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BecomInstructor from "../../Components/BecomeHostBtn/BecomInstructor";

const UserProfile = () => {
  const { user, isInstructor } = useContext(AuthContext);

  return (
    <div>
      <div className="flex justify-center mt-5">
        <img className="rounded-full h-16 w-16" src={user?.photoURL} alt="" />
      </div>
      <h2 className="text-center text-xl font-bold">{user?.displayName}</h2>
      <div className="text-center">
        {!isInstructor && (
          <button className="my-btn mt-5">
            <BecomInstructor />
          </button>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
