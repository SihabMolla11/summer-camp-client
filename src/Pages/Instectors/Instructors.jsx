import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Instructor from "./Instructor";
import Spinner from "../../Components/Spinner/Spinner";
import useTitle from "../../api/useTitle";

const Instructors = () => {
  const { loggingUser, loading } = useContext(AuthContext);
  const [instructors, setInstructors] = useState([]);

  useTitle("InsTructors")

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_LINK}/instructors?role=instructor`)
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);
  console.log(instructors);

  if (loading) {
    return <Spinner></Spinner>;
  }

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4 my-10 gap-10">
        {instructors.map((inst) => (
          <Instructor key={inst._id} inst={inst} />
        ))}
      </div>
    </div>
  );
};

export default Instructors;
