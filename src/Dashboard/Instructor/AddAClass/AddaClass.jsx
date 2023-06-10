import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { AddAclass } from "../../../api/class";

const image_upload_key = import.meta.env.VITE_IMAGE_UPLOA_KEY;

const AddaClass = () => {
  const imageHostUrl = `https://api.imgbb.com/1/upload?key=${image_upload_key}`;

  const { user } = useContext(AuthContext);

  const handePostClass = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const image = form.image.files[0];
    const instructorName = form.instructorName.value;
    const email = form.email.value;
    const price = parseFloat(form.price.value);
    const seats = parseFloat(form.seats.value);

    const formData = new FormData();
    formData.append("image", image);

    fetch(imageHostUrl, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        const classImage = data.data?.display_url;
        const newClass = {
          name,
          classImage,
          instructorName,
          email,
          price,
          seats,
          instructorImage: user?.photoURL,
        };
        AddAclass(newClass)
      });
  };

  return (
    <div>
      <div className="card-body p-14 ">
        <div className=" p-24 bg-[#ffab671a] rounded-xl">
          <h2 className="text-6xl mb-5 capitalize font-semibold text-center">
            Add a class
          </h2>
          <form onSubmit={handePostClass}>
            <div className="flex gap-6 mt-5">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Class Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Class Name"
                  className="input input-bordered"
                  name="name"
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Upload Class Image</span>
                </label>
                <input
                  name="image"
                  type="file"
                  className="file-input file-input-bordered file-input-error w-full "
                />
              </div>
            </div>
            <div className="flex gap-6  mt-5">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Instructor Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Instructor Name"
                  className="input input-bordered"
                  defaultValue={user?.displayName}
                  readOnly
                  name="instructorName"
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Instructor Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Instructor Email"
                  className="input input-bordered"
                  name="email"
                  defaultValue={user?.email}
                  readOnly
                />
              </div>
            </div>
            <div className="flex gap-6  mt-5">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Class Price</span>
                </label>
                <input
                  type="number"
                  placeholder="Class Price"
                  className="input input-bordered"
                  name="price"
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Available seats</span>
                </label>
                <input
                  type="number"
                  placeholder="Available seats"
                  className="input input-bordered"
                  name="seats"
                />
              </div>
            </div>
            <div className="form-control mt-6">
              <input className="my-btn" type="submit" value="Add class" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddaClass;
