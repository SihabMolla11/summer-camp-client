import Lottie from "lottie-react";
import dashboard from "../assets/dashboard.json";

const DashBoardHome = () => {
  return (
    <div className="text-center">
      <h2 className="text-5xl my-14 uppercase text-[#FF7000] font-bold">
        Welcome to your dashboard
      </h2>
      <div className="text-center">
        <div className=" flex justify-center ">
          <Lottie animationData={dashboard} />
        </div>
      </div>
    </div>
  );
};

export default DashBoardHome;
