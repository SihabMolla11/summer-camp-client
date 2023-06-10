import { useContext } from "react";
import { MdOutlineAddAPhoto } from "react-icons/md";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const BecomInstructor = () => {
  const { user } = useContext(AuthContext);

  const handelBecomeInstructor = () => {
    const currentUser = {
      role: "instructor",
    };

    fetch(`${import.meta.env.VITE_API_LINK}/users/${user.email}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(currentUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire("successful", "now you are a instructor", "success");
        }
        window.location.reload();
      });
  };

  return (
    <div onClick={handelBecomeInstructor} className="flex items-center gap-2">
      <MdOutlineAddAPhoto className="text-2xl" /> Become Instructor
    </div>
  );
};

export default BecomInstructor;
