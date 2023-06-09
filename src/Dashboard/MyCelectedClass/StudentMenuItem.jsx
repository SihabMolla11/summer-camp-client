import { NavLink } from "react-router-dom";
import { FaRegHeart, FaRegListAlt } from "react-icons/fa";

const StudentMenuItem = () => {
  return (
    <div>
      <div>
        <ul>
          <li>
            <NavLink to="selected-classes" className="dashBord-menu-item">
              <FaRegHeart /> <span>Selected Class</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="enroll-classes" className="dashBord-menu-item">
              <FaRegListAlt /> <span>My Enrolled Classes</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default StudentMenuItem;
