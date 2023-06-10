import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Spinner from "../../../Components/Spinner/Spinner";
import MyClassesRow from "./MyClassesRow";

const MyClass = () => {
  const { user } = useContext(AuthContext);
  const [classes, setClasses] = useState([]);

  const { isLoading, refetch } = useQuery({
    queryFn: async () => {
      const data = await axios.get(
        `${import.meta.env.VITE_API_LINK}/my-classes?${user?.email}`
      );
        setClasses(data?.data);
      return data;
    },
    queryKey: ["my-classes"],
  });



  console.log(user?.email);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="overflow-x-auto px-4 mt-5 r">
        <table className="table">
          {/* head */}
          <thead className=" bg-slate-200 ">
            <tr>
              <th className="text-2xl">#</th>
              <th>Image</th>
              <th>name</th>
              <th>price</th>
              <th>status</th>
              <th>Total Enrolled</th>
              <th>Feedback</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((data, index) => (
              <MyClassesRow key={data._id} data={data} index={index} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyClass;
