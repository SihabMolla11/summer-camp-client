import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Spinner from "../../../Components/Spinner/Spinner";
import AllClassesRow from "./AllClassesRow";

const ManagesClasses = () => {
  const [allClasses, setAllClasses] = useState([]);

  // get all classes
  const { isLoading, refetch } = useQuery({
    queryFn: async () => {
      const classes = await axios.get(
        `${import.meta.env.VITE_API_LINK}/allClasses`
      );
      setAllClasses(classes?.data);
      return classes;
    },
    queryKey: ["classes"],
  });

//   console.log(allClasses);

  if (isLoading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table mt-5">
          {/* head */}
          <thead className="drop-shadow-md bg-blue-200">
            <tr className="">
              <th>Class image</th>
              <th>Class name</th>
              <th>Instructor name</th>
              <th>Instructor email</th>
              <th>Available seats</th>
              <th>Price</th>
              <th>Status</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>
            {allClasses.map((data) => (
              <AllClassesRow key={data._id} data={data} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManagesClasses;
