import {
  FaRegTimesCircle,
  FaRegCheckCircle,
  FaPinterestP,
} from "react-icons/fa";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { ChangeClassStatus } from "../../../api/class";

const AllClassesRow = ({ data, setClassId, refetch }) => {
  const { classImage, email, instructorName, name, price, seats, status, _id } =
    data;

  // const statusApproved = () => {
  //   const status = {
  //     status: "approve",
  //   };
  //   fetch(`${import.meta.env.VITE_API_LINK}/singleClass/${_id}`, {
  //     method: "PUT",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(status),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       refetch();
  //       if(data?.matchedCount>0){
  //         Swal.fire(
  //           'The Internet?',
  //           'That thing is still around?',
  //           'question'
  //         )
  //       }
  //     });
  // };

  const statusApproved = () => {
    const status = "approve";
    ChangeClassStatus(status, _id, refetch);
  };

  const statusPending = () => {
    const status = "pending";
    ChangeClassStatus(status, _id, refetch);
  };

  const statusDenied = () => {
    const status = "denied";
    ChangeClassStatus(status, _id, refetch);
  };

  return (
    <>
      <tr
        className={`${status === "pending" ? "bg-slate-100" : ""} ${
          status === "denied" ? "bg-red-100" : ""
        }`}
      >
        <td>
          <div className="flex avatar items-center mask mask-squircle w-12 h-12">
            <img src={classImage} alt="Avatar Tailwind CSS Component" />
          </div>
        </td>
        <td>
          <p>{name}</p>
        </td>
        <td>
          <p>{instructorName}</p>
        </td>
        <td>
          <p>{email}</p>
        </td>
        <td>
          <p>{seats}</p>
        </td>
        <td>
          <p>{price}</p>
        </td>
        <td>
          <Menu
            menuButton={
              <MenuButton
                title="Change status"
                className="cursor-pointer border-2 border-[#fd603d] text-[#fd603d] w-full hover:bg-[#fd603d] hover:text-white p-2 rounded-md font-bold "
              >
                {status}
              </MenuButton>
            }
            transition
          >
            <MenuItem
              onClick={statusApproved}
              className=" border-2 border-green-500 rounded-md mx-4  text-green-500 font-medium hover:text-white my-2 hover:bg-green-500 flex items-center gap-2 text-xl"
            >
              <FaRegCheckCircle /> <span>Approve</span>{" "}
            </MenuItem>
            <MenuItem
              onClick={statusDenied}
              className=" border-2 border-red-500 rounded-md mx-4  text-red-500 font-medium hover:text-white my-2 hover:bg-red-500 flex items-center gap-2 text-xl"
            >
              <FaRegTimesCircle /> <span>Denied</span>{" "}
            </MenuItem>
            <MenuItem
              onClick={statusPending}
              className=" border-2 border-blue-500 rounded-md mx-4  text-blue-500 font-medium hover:text-white my-2 hover:bg-blue-500  flex items-center gap-2 text-xl"
            >
              <FaPinterestP /> <span>Pending</span>
            </MenuItem>
          </Menu>
        </td>
        <td>
          {status === "denied" ? (
            <button onClick={() => setClassId(_id)}>
              <label
                className="cursor-pointer border-2 border-[#fd603d] text-[#fd603d] w-full hover:bg-[#fd603d] hover:text-white p-2 rounded-md font-bold "
                htmlFor="my_modal_7"
              >
                Send Feedback
              </label>
            </button>
          ) : (
            ""
          )}
        </td>
      </tr>
    </>
  );
};

export default AllClassesRow;
