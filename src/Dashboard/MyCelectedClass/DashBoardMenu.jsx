import { Link } from "react-router-dom";
import StudentMenuItem from "./StudentMenuItem";
import { FaHome } from "react-icons/fa";
import InstuctorMenuItem from "../Instructor/InstuctorMenu/InstuctorMenuItem";

const DashBoardMenu = () => {
  return (
    <div className="mt-32 text-left text-white">
      <Link className="dashBord-menu-item" to="/">
        <FaHome /> Home
      </Link>
      <hr />
      {/* student dashboard menu  */}
      <StudentMenuItem />
      <InstuctorMenuItem/>
    </div>
  );
};

export default DashBoardMenu;
