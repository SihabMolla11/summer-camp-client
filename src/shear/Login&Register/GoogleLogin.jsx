import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Provider/AuthProvider";
import { Toaster, toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { AddUsers } from "../../api/user";

const GoogleLogin = () => {
  const { loading, setLoading, googleSigning } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const handelGoogleSing = () => {
    setLoading(true);
    googleSigning()
      .then((result) => {
        console.log(result);
        // add user
        AddUsers(result?.user);
        toast.success("sing Up successful");

        setLoading(false);
        navigate(from, { replace: true });
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
