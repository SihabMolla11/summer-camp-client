import { useContext } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

const ClassCard = ({ ApproveClass }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  // console.log(ApproveClass)

  const { name, classImage, instructorName, seats, price } = ApproveClass;

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
      toast.success("class Selected successfully");
    }
  };

  return (
    <div>
      <div className=" w-full h-full bg-base-100 card shadow-xl">
        <figure>
          <img className="w-full h-56" src={classImage} alt="Shoes" />
        </figure>
        <div className="">
          <div className="flex items-center font-medium justify-between text-lg p-5">
            <p className="text-green-500 border-2 rounded-2xl py-1 px-3">
              Available Sets: {seats}
            </p>
            <p className=" border-2 rounded-2xl py-1 px-3 text-[#ff9900]">
              price: ${price}
            </p>
          </div>
          <hr />
          <div className=" space-y-2 my-4 px-6">
            <h2 className="text-2xl font-bold text-[#3f3e3e] ">
              Class Name: {name}
            </h2>
            <p className="mt-2 text-xl font-medium">
              Instructor Name: {instructorName}
            </p>
          </div>
          <hr />
          <div className="card-actions justify-end p-6">
            <button
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
