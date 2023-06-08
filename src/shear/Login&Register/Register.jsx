import Lottie from "lottie-react";
import loginLotte from "../../assets/login/login.json";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Toaster, toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { TbFidgetSpinner } from "react-icons/tb";
import GoogleLogin from "./GoogleLogin";
import { AddUsers } from "../../api/user";

const image_upload_key = import.meta.env.VITE_IMAGE_UPLOA_KEY;
const Register = () => {
  const imageHostUrl = `https://api.imgbb.com/1/upload?key=${image_upload_key}`;

  const { createUser, updateUser, setLoading, loading } =
    useContext(AuthContext);

  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setLoading(true);
    if (data?.conformPassword !== data?.password) {
      setError("your password not matching");
      return;
    }

    const { email, password, name } = data;

    // upload image operation
    const formData = new FormData();
    formData.append("image", data?.photo[0]);

    fetch(imageHostUrl, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((resImage) => {
        const imageUrl = resImage?.data?.display_url;
        console.log(imageUrl);
        createUser(email, password)
          .then((result) => {
            updateUser(name, imageUrl)
              .then(() => {
                // add user
                AddUsers(result?.user);
                toast.success("sing Up successful");

                setLoading(false);
              })
              .catch((error) => {
                setError(error.message);
                toast.error(error.message);
                setLoading(false);
              });
          })
          .catch((error) => {
            setError(error.message);
            toast.error(error.message);
            setLoading(false);
          });
      });

    // console.log(data);
  };

  return (
    <>
      <div className="my-container bg-base-200 p-10">
        <div>
          <div className="flex flex-row-reverse items-center gap-[150px]">
            <div className="w-full">
              <Lottie animationData={loginLotte} />
            </div>
            <div className="w-full rounded-lg bg-base-100 py-10">
              <div className="flex items-center justify-between px-16 mb-5 ">
                <p className="text-4xl font-semibold">Login</p>
                <GoogleLogin />
              </div>
              <hr />
              <div className="card-body px-16">
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
                      <span className="text-red-600">
                        Please inter your name
                      </span>
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
                      name="photo"
                      {...register("photo", { required: true })}
                    />
                    {errors.photo && (
                      <span className="text-red-600">
                        Please upload Your profile pic
                      </span>
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
                      {...register("password", {
                        required: true,
                        minLength: 6,
                        pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/,
                      })}
                    />
                    {errors.password && (
                      <span className="text-red-600">
                        password need at last 6 character one capital latter and
                        one spatial character{" "}
                      </span>
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
                      {...register("conformPassword", {
                        required: true,
                        minLength: 6,
                      })}
                      className="input input-bordered"
                    />
                    {errors.conformPassword && (
                      <span className="text-red-600">Name is required</span>
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
                      <input className="my-btn" type="submit" value="Sign up" />
                    )}
                  </div>
                  <div className="mt-16">
                    <Link to="/login">
                      If you do not have account?
                      <span className="text-red-600 font-bold">Login</span>
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
    </>
  );
};

export default Register;
