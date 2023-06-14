import { NavLink } from "react-router-dom";
import {  FaRegListAlt } from "react-icons/fa";
import {BiCommentCheck} from "react-icons/bi"
import {MdOutlinePayments} from "react-icons/md"

const StudentMenuItem = () => {
  return (
    <div>
      <div>
        <ul>
          <li>
            <NavLink to="selected-classes" className="dashBord-menu-item">
              <BiCommentCheck /> <span>Selected Class</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="enroll-classes" className="dashBord-menu-item">
              <FaRegListAlt /> <span>My Enrolled Classes</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="paymentHistory" className="dashBord-menu-item">
              <MdOutlinePayments /> <span>My Payment History</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default StudentMenuItem;
