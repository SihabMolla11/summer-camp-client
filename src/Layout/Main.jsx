import { Outlet } from "react-router-dom";
import Navbar from "../shear/Navbar/Navbar";

const Main = () => {
    return (
        < >
            <Navbar/>
            <div className="my-container">
                <Outlet/>
            </div>
        </>
    );
};

export default Main;