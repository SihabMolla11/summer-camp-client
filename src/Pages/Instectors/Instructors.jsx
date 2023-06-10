import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Instructor from "./Instructor";

const Instructors = () => {
  const { loggingUser } = useContext(AuthContext);
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_API_LINK}/instructors?role=${loggingUser?.role}`
    )
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, [loggingUser?.role]);
  console.log(instructors);

  return (
    <div>
      <div className="grid grid-cols-4 mt-10 gap-10">
       {
        instructors.map(inst=> <Instructor key={inst._id} inst={inst}  />)
       }
      </div>
    </div>
  );
};

export default Instructors;
