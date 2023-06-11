import { NavLink } from "react-router-dom";
import { FaUsersCog, FaQrcode } from "react-icons/fa";

const AdminMenu = () => {
  return (
    <>
      <div>
        <ul>
          <li>
            <NavLink to="manageclasses" className="dashBord-menu-item">
              <FaQrcode /> <span>Manage Classes</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="manageusers" className="dashBord-menu-item">
              <FaUsersCog className="text-2xl" /> <span>Manage Users</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AdminMenu;
