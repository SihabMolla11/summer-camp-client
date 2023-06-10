import { Link } from "react-router-dom";
import StudentMenuItem from "./StudentMenuItem";
import { FaHome } from "react-icons/fa";
import InstuctorMenuItem from "../Instructor/InstuctorMenu/InstuctorMenuItem";
import UserProfile from "../Profile/UserProfile";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const DashBoardMenu = () => {
  const { isInstructor } = useContext(AuthContext);

  return (
    <div className=" mt-5 text-left text-white">
      <Link className="dashBord-menu-item" to="/">
        <FaHome /> Home
      </Link>
      <hr />
      <div className="my-10">
        {isInstructor ? <InstuctorMenuItem /> : <StudentMenuItem />}
      </div>
      <hr />
      <div>
        <UserProfile />
      </div>
    </div>
  );
};

export default DashBoardMenu;
