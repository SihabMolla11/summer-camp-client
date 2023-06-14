import PopulerClassesCard from "../../Components/PopulerClasses/PopulerClassesCard";
import axios from "axios";
import { useEffect, useState } from "react";

const PopulerClasses = () => {
  const [classes, setClasses] = useState([]);
  const [enrolledCs, setEnrolledCs] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_LINK}/allClasses`)
      .then((res) => setClasses(res.data));
  }, []);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_LINK}/payments`).then((res) => {
      setEnrolledCs(res.data);
    });
  }, []);

  return (
    <div>
      <h2 className="text-[#0000009d] font-bold text-4xl capitalize text-center">
        Here are some Popular Classes
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8 ">
        {classes.slice(0, 6).map((singC) => (
          <PopulerClassesCard
            key={singC?._id}
            singC={singC}
            enrolledCs={enrolledCs}
          />
        ))}
      </div>
    </div>
  );
};

export default PopulerClasses;
