import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Provider/AuthProvider";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const GoogleLogin = () => {
  const { loading, setLoading, googleSigning } = useContext(AuthContext);

    const navigate = useNavigate()

  const handelGoogleSing = () => {
    setLoading(true);
    googleSigning()
      .then((result) => {
        console.log(result);
        toast.success("login successful");
        setLoading(false);
        navigate("/")
      })
      .catch((error) => {
        console.log(error.message);
        setLoading(false);
        toast.error(error.message);
      });
  };

  return (
    <div className=" mt-4">
      <button
        disabled={loading}
        onClick={handelGoogleSing}
        className="flex items-center capitalize gap-4 border-[1px] rounded-lg border-[#FD603D] px-4 py-2"
      >
        <FcGoogle className="text-2xl" /> <span>Sign in with google</span>{" "}
      </button>
      <Toaster />
    </div>
  );
};

export default GoogleLogin;
