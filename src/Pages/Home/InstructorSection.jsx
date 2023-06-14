import { useEffect, useState } from "react";
import HomeInstructorCard from "../../Components/HomeInstructorCard/HomeInstructorCard";

const InstructorSection = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_LINK}/instructors?role=instructor`)
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);

  const sixInstructors = instructors.slice(0, 6);

  // console.log(sixInstructors);

  return (
    <div>
        <h2 className="text-center my-8 text-4xl font-bold capitalize text-[#0000009d]">Here are some Popular Instructors</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {sixInstructors.map((inst) => (
          <HomeInstructorCard key={inst?._id} inst={inst} />
        ))}
      </div>
    </div>
  );
};

export default InstructorSection;
