import Lottie from "lottie-react";
import loginLotte from "../../assets/login/login.json";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";
import GoogleLogin from "./GoogleLogin";

const Login = () => {
  const { loginUser, loading, setLoading } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setLoading(true);
    const { email, password } = data;
    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Login successful");
        navigate(from, { replace: true });
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  return (
    <div className="my-container bg-base-200 py-10">
      <div>
        <div className="flex items-center gap-[150px]">
          <div className="w-full">
            <Lottie animationData={loginLotte} />
          </div>
          <div className="w-full  rounded-lg bg-base-100 py-10 ">
            <div className="flex items-center justify-between px-16 mb-5 ">
              <p className="text-4xl font-semibold">Login</p>
              <GoogleLogin />
            </div>
            <hr />
            <div className="card-body px-16 ">
              <form onSubmit={handleSubmit(onSubmit)} className=" space-y-5">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email@.com"
                    className="input input-bordered"
                    name="email"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="text-red-600">
                      Please inter your email
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="*******"
                    className="input input-bordered"
                    name="password"
                    {...register("password", { required: true })}
                  />
                  {errors.password && (
                    <span className="text-red-600">
                      please inter your password
                    </span>
                  )}
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>

                <div className="form-control mt-6">
                  {loading ? (
                    <button className="my-btn ">
                      <TbFidgetSpinner className="animate-spin text-2xl" />
                    </button>
                  ) : (
                    <input className="my-btn" type="submit" value="Login" />
                  )}
                </div>
                <div className="mt-16">
                  <Link to="/signup">
                    If you do not have account?
                    <span className="text-red-600 font-bold">Sign Up</span>
                  </Link>
                </div>
              </form>

              <p className=" text-sm text-red-500">{error}</p>
            </div>
          </div>
        </div>
        <Toaster />
      </div>
    </div>
  );
};

export default Login;
