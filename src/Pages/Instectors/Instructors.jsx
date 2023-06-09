import { useContext } from "react";
import Spinner from "../../Components/Spinner/Spinner";
// import { getCurrentUser } from "../../api/user";
import { AuthContext } from "../../Provider/AuthProvider";

const Instructors = () => {
    const {user} = useContext(AuthContext)
    // getCurrentUser(user?.email).then(res=>console.log(res.data))



    return (
        <div>
            <Spinner/>
        </div>
    );
};

export default Instructors;