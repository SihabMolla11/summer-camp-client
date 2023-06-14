import Lottie from "lottie-react";
import dashboard from "../assets/dashboard.json";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useDTitle from "../api/useDTitle";

const DashBoardHome = () => {
  useDTitle("DashBoard");

  const { user } = useContext(AuthContext);

  return (
    <div className="text-center">
      <div className="py-12">
        <h2 className="text-3xl  uppercase text-[#6e6d6b] font-bold">
          {user?.displayName}
        </h2>
        <p className=" text-lg text-[#FF7000] font-medium">
          {" "}
          -- Welcome to your dashboard --
        </p>
      </div>
      <div className="text-center">
        <div className=" flex justify-center ">
          <Lottie animationData={dashboard} />
        </div>
      </div>
    </div>
  );
};

export default DashBoardHome;
