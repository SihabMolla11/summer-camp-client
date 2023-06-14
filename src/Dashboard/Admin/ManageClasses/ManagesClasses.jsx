import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Spinner from "../../../Components/Spinner/Spinner";
import AllClassesRow from "./AllClassesRow";
import FeeDbacModal from "./FeeDbacModal";
import useDTitle from "../../../api/useDTitle";

const ManagesClasses = () => {
  useDTitle("Manage Classes");

  const [allClasses, setAllClasses] = useState([]);
  const [classId, setClassId] = useState(null);

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
        <table className="table rounded-xl ">
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
              <AllClassesRow
                key={data._id}
                data={data}
                setClassId={setClassId}
                refetch={refetch}
              />
            ))}
          </tbody>
        </table>
        <FeeDbacModal classId={classId} refetch={refetch} />
      </div>
    </>
  );
};

export default ManagesClasses;
