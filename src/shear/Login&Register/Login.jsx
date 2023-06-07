import Lottie from "lottie-react";
import loginLotte from "../../assets/login/login.json";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="my-container bg-base-200 p-10">
      <div>
        <div className="flex items-center gap-[150px]">
          <div className="w-full">
            <Lottie animationData={loginLotte} />
          </div>
          <div className="w-full rounded-lg bg-base-100 p-10 ">
            <div className="card-body">
              <p className="text-4xl font-semibold">Login</p>

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
                  <button className="my-btn">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
