import { Outlet } from "react-router-dom";
import DashBoardMenu from "../Dashboard/MyCelectedClass/DashBoardMenu";

const DashBoard = () => {
  return (
    <div className="flex p ">
      <div className="w-[20%] h-full py-16 bg-[#092652]">
      <h2 className="text-white text-center font-semibold text-2xl">Dashboard</h2>
        <DashBoardMenu/>
      </div>
      <div className="w-[80%] bg-slate-400">
        <Outlet/>
      </div>
    </div>
  );
};

export default DashBoard;
