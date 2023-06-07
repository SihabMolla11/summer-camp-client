import Lottie from "lottie-react";
import loginLotte from "../../assets/login/login.json";
import { useForm } from "react-hook-form";

const Register = () => {
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
    <>
      <div className="my-container bg-base-200 p-10">
        <div>
          <div className="flex items-center gap-[150px]">
            <div className="w-full">
              <Lottie animationData={loginLotte} />
            </div>
            <div className="w-full rounded-lg bg-base-100 p-10 ">
              <div className="card-body">
                <p className="text-4xl font-semibold">Sign up</p>
                <form onSubmit={handleSubmit(onSubmit)} className=" space-y-5">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="name"
                      name="name"
                      className="input input-bordered"
                      {...register("name", { required: true })}
                    />
                    {errors.name && (
                      <span className="text-red-600">Please inter your name</span>
                    )}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">profile Photo</span>
                    </label>
                    <input
                      type="file"
                      placeholder="name"
                      className="file-input  file-input-error w-full "
                      name="phot"
                      {...register("photo", { required: true })}
                    />
                    {errors.name && (
                      <span className="text-red-600">Please upload Your profile pic</span>
                    )}
                  </div>
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
                    {errors.name && (
                      <span className="text-red-600">Please inter your email</span>
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
                      {...register("password", { required: true, minLength: 6 })}
                    />
                    {errors.name && (
                      <span className="text-red-600">Please inter your Password</span>
                    )}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Conform password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="*******"
                      name="conformPassword"
                      {...register("conformPassword", { required: true, minLength: 6 })}
                      className="input input-bordered"
                    />
                    {errors.name && (
                      <span className="text-red-600">Name is required</span>
                    )}
                    <label className="label">
                      <a href="#" className="label-text-alt link link-hover">
                        Forgot password?
                      </a>
                    </label>
                  </div>
                  <div className="form-control mt-6">
                    <button className="my-btn">Sign up</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
