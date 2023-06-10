import { Outlet } from "react-router-dom";
import DashBoardMenu from "../Dashboard/MyCelectedClass/DashBoardMenu";

const DashBoard = () => {
  return (
    <div className="flex grid-rows  h-[100vh]">
      <div className="w-[20%]  fixed h-full py-10 bg-[#092652]">
      <h2 className="text-white text-center font-semibold text-2xl">Dashboard</h2>
        <DashBoardMenu />
      </div>
      <div className="w-full ml-72 ">
        <Outlet/>
      </div>
    </div>
  );
};

export default DashBoard;
