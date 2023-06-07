import { Outlet } from "react-router-dom";
import Navbar from "../shear/Navbar/Navbar";

const Main = () => {
    return (
        < >
            <Navbar/>
            <div>
                <Outlet/>
            </div>
        </>
    );
};

export default Main;