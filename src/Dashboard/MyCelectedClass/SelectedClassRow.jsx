import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const SelectedClassRow = ({ seClass, refetch, index }) => {
  console.log(seClass);
  const { classImage, instructorName, name, price, _id } = seClass;

  const handelDeleteClass = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "are you want delete this class",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_API_LINK}/stlClass/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount) {
              Swal.fire("Deleted!", "this class deleted successful", "success");
            }
            refetch();
          });
      }
    });
  };

  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>
          <div className="flex items-center avatar space-x-3 mask mask-squircle w-12 h-12">
            <img src={classImage} alt="class image" />
          </div>
        </td>
        <td>
          <p className=" font-medium text-md">{name}</p>
        </td>
        <td>{instructorName}</td>
        <td>
          <p className="text-lg text-[#ffba24] font-medium">${price}</p>
        </td>
        <td>
          <button
            onClick={handelDeleteClass}
            className=" border-2 px-2 py-1 rounded-md border-red-500 font-bold text-red-500 hover:bg-red-600 hover:text-white"
          >
            Delete
          </button>
        </td>
        <td>
          <Link to={`/dashboard/payment/${_id}`}>
            {" "}
            <button className="border-2 px-2 py-1 rounded-md border-green-500 font-bold text-green-500 hover:bg-green-600 hover:text-white">
              Enroll Now
            </button>
          </Link>
        </td>
      </tr>
    </>
  );
};

export default SelectedClassRow;
