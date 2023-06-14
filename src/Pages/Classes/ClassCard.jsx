import { useContext } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

const ClassCard = ({ ApproveClass, enrollClasses }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  // console.log(enrollClasses);

  const { name, classImage, instructorName, email, _id, seats, price } =
    ApproveClass;

  const totalPaymentClass = enrollClasses.filter(
    (enClass) => enClass?.Classid === _id
  );
  // console.log(totalPaymentClass);

  const avseats = seats - totalPaymentClass.length;

  const SelctedClass = {
    name,
    classImage,
    instructorName,
    price,
    instrucTorEmail: email,
    seats,
    Classid: _id,
    email: user?.email,
  };

  const handelSelectedClass = () => {
    if (!user) {
      Swal.fire({
        title: "Please Login First",
        text: "if you want select any class? Then you have to login !",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          return navigate("/login");
        }
      });
    } else {
      fetch(`${import.meta.env.VITE_API_LINK}/selectedClasses`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(SelctedClass),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data?.insertedId) {
            toast.success("class Selected successfully");
          }
          if (data?.message) {
            toast.error("the class allrady exist");
          }
        });
    }
  };

  return (
    <div>
      <div
        className={` w-full h-full bg-base-100 card shadow-xl ${
          avseats <= 0 && "bg-red-100"
        }`}
      >
        <figure>
          <img className="w-full h-56" src={classImage} alt="Shoes" />
        </figure>
        <div className="">
          <div className="flex items-center font-medium justify-between text-lg p-5">
            <p
              className={`text-green-500 border-2 rounded-2xl py-1 px-3 ${
                avseats <= 0 && "border-red-500 text-red-600"
              }`}
            >
              Available Sets: {avseats}
            </p>
            <p
              className={` border-2 rounded-2xl py-1 px-3 text-[#ff9900] ${
                avseats <= 0 && "border-red-500"
              }`}
            >
              price: ${price}
            </p>
          </div>
          <hr className={`${avseats <= 0 && "border-[#0000005b]"}`} />
          <div className=" space-y-2 h-36 my-10 px-6">
            <h2 className="text-2xl font-bold text-[#3f3e3e] ">
              Class Name: {name}
            </h2>
            <p className="mt-2 text-xl font-medium">
              Instructor Name: {instructorName}
            </p>
            <p className="mt-2  ">Instructor email: {email}</p>
            <div className=" flex justify-between  items-center ">
              <p className="text-blue-500 font-medium text-lg ">
                Total Seats: {seats}
              </p>
              <p className="badge badge-secondary font-medium">Enroll Student: {totalPaymentClass.length}</p>
            </div>
          </div>
          <hr className={`${avseats <= 0 && "border-[#0000005b]"}`} />
          <div className="card-actions justify-end p-6">
            <button
              disabled={user?.email === email || avseats <= 0}
              onClick={handelSelectedClass}
              className="my-outline-btn flex items-center"
            >
              <p>Select class</p> <BsArrowRightShort className="text-4xl" />
            </button>
          </div>
        </div>
        <Toaster />
      </div>
    </div>
  );
};

export default ClassCard;
