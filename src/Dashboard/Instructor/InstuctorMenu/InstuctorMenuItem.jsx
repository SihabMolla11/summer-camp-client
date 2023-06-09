import { NavLink } from "react-router-dom";
import { FaAddressCard, FaRegListAlt } from "react-icons/fa";

const InstuctorMenuItem = () => {
  return (
    <div>
      <div>
        <ul>
          <li>
            <NavLink to="add-class" className="dashBord-menu-item">
              <FaAddressCard /> <span>Add A Class</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="myclass" className="dashBord-menu-item">
              <FaRegListAlt /> <span>My Class</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default InstuctorMenuItem;
