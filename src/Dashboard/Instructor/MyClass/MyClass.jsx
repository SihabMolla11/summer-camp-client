import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Spinner from "../../../Components/Spinner/Spinner";
import MyClassesRow from "./MyClassesRow";
import Swal from "sweetalert2";
import useDTitle from "../../../api/useDTitle";

const MyClass = () => {

  useDTitle("My Classes")

  const { user } = useContext(AuthContext);
  const [classes, setClasses] = useState([]);
  const [enrollClasses, setEnrollClasses] = useState([]);

  const { isLoading, refetch } = useQuery({
    enabled: !!user?.email,
    queryFn: async () => {
      const data = await axios.get(
        `${import.meta.env.VITE_API_LINK}/my-classes?email=${user?.email}`
      );
      setClasses(data?.data);
      return data;
    },
    queryKey: ["my-classes"],
  });

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_LINK}/payments`).then((res) => {
      setEnrollClasses(res.data);
    });
  }, []);

  const handelDeleteClass = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Are you want delete this class!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_API_LINK}/allClasses/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "this class deleted successfuly",
                "success"
              );
            }
            refetch();
          });
      }
    });
  };

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
              <MyClassesRow
                key={data._id}
                data={data}
                index={index}
                handelDeleteClass={handelDeleteClass}
                enrollClasses={enrollClasses}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyClass;
