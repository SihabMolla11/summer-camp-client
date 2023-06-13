import { Link } from "react-router-dom";
import log from "../../assets/logo.png";
import { FaFacebook, FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";
import { Toaster, toast } from "react-hot-toast";

const Footer = () => {
  const addToster = () => {
    toast.success("Subscribe Successful");
  };

  return (
    <div className=" bg-[#0B1B30] text-white ">
      <div className="my-container p-10 grid grid-cols-1 capitalize gap-24 md:grid-cols-2 lg:grid-cols-3 justify-between">
        <div className=" space-y-4">
          <img src={log} alt="" className="w-36" />
          <h2 className="text-4xl font-medium">
            Welcome to us <br /> Photo Graph house
          </h2>
        </div>
        <div>
          <h2 className="text-2xl font-bold">Menu Items</h2>
          <ul className=" space-y-2 mt-4 text-md font-medium text-[#ffffff9d] ">
            <li className="hover:text-white">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-white">
              <Link to="/instructors">Instructors</Link>
            </li>
            <li className="hover:text-white">
              <Link to="/classes">Classes</Link>
            </li>
            <li className="hover:text-white">
              <Link to="dashboard">Dashboard</Link>
            </li>
            <li className="hover:text-white">
              <Link to="signup">Login</Link>
            </li>
            <li className="hover:text-white">
              <Link to="signup">Sign Up</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold">Flow us in Social media</h2>
          <div className="grid grid-cols-5 text-5xl mt-5 justify-around text-[#ffffffc4] ">
            <Link to="https://www.facebook.com/sihab.molla.98" target="_blank">
              <FaFacebook className="hover:text-white rounded-full border-blue-400 " />
            </Link>
            <Link to="https://github.com/SihabMolla11" target="_blank">
              <FaGithub className="hover:text-white rounded-full border-blue-400 " />
            </Link>
            <Link to="https://twitter.com/" target="_blank">
              <FaTwitter className="hover:text-white rounded-full border-blue-400 " />
            </Link>
            <Link to="https://www.youtube.com/" target="_blank">
              <FaYoutube className="hover:text-white rounded-full border-blue-400 " />
            </Link>
          </div>
          <div className="mt-5">
            <input
              className="border-2  px-4 rounded-l-lg h-12 mt-5 bg-[#00000000] "
              type="text"
              placeholder="giveyour@email.com"
            />
            <button
              onClick={addToster}
              className="bg-[#ffffffbe] hover:bg-white h-12 px-4 rounded-r-md text-black font-bold italic"
            >
              Subscribe
            </button>
          </div>
          <Toaster />
        </div>
      </div>
      <hr />
      <div className="text-center py-5">
        <small>All content and images © SihabMolla Photography House</small>
      </div>
    </div>
  );
};

export default Footer;
