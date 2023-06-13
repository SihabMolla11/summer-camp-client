import { Outlet } from "react-router-dom";
import Navbar from "../shear/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const Main = () => {
  return (
    <>
      <Navbar />
      <div className="my-container min-h-[calc(100vh-300px)]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Main;
