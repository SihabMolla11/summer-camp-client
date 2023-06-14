import axios from "axios";
import { useEffect, useState } from "react";
import { FaFacebook, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const HomeInstructorCard = ({ inst }) => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_LINK}/my-classes?email=${inst?.email}`)
      .then((res) => setClasses(res.data));
  }, [inst?.email]);

  return (
    <div>
      <div className="card h-full w-full bg-base-100 shadow-xl">
        <figure>
          <img className="h-52 w-full" src={inst?.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {inst?.name}
            <div className="badge bg-[orange] text-white ">Instructors</div>
          </h2>
          <div>
            <h3 className="text-lg font-medium">instructors Classes:</h3>
            {classes.map((ic) => (
              <ul key={ic?._id}>
                <li className="text-sm">* {ic?.name}</li>
              </ul>
            ))}
          </div>
          <div className="mt-5">
            <div className="card-actions absolute text-blue-500 gap-6 bottom-5">
              <Link className="text-2xl" to="https://www.facebook.com">
                <FaFacebook />
              </Link>
              <Link className="text-2xl" to="https://twitter.com">
                <FaTwitter />
              </Link>
              <Link className="text-2xl" to="https://bd.linkedin.com">
                <FaLinkedinIn />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeInstructorCard;
