import { Link } from "react-router-dom";
import { FaArrowAltCircleRight } from "react-icons/fa";

const PopulerClassesCard = ({ singC, enrolledCs }) => {
  console.log(singC);

  const { classImage, name, instructorName, price, seats, _id } = singC;

  const enrolledClasses = enrolledCs.filter(
    (enClass) => enClass?.Classid === _id
  );

  return (
    <div>
      <div className="card h-full w-full bg-base-100 shadow-xl image-full transform transition duration-500 hover:-translate-y-6">
        <figure>
          <img src={classImage} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl font-bold text-white">{name}</h2>
          <p className="text-xl font-medium text-white">
            Instructor Name: {instructorName}
          </p>
          <div className="text-lg">
            <p className=" text-white">Price: ${price}</p>
            <p className=" text-white">Total Seats: {seats}</p>
            <p className=" text-green-400 font-medium">
              Available Sets: {seats - enrolledClasses.length}
            </p>
          </div>
          <div className="card-actions justify-end">
            <Link to="/classes">
              <button className="my-btn">
                See all classes <FaArrowAltCircleRight className="text-lg" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopulerClassesCard;
