import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import ClassCard from "./ClassCard";
import Spinner from "../../Components/Spinner/Spinner";
import useTitle from "../../api/useTitle";

const Classes = () => {

  useTitle("Classes")

  const [classes, setClasses] = useState([]);
  const [enrollClasses, setEnrollClasses] = useState([]);

  const { isLoading, error } = useQuery({
    queryFn: async () => {
      const data = await axios.get(
        `${import.meta.env.VITE_API_LINK}/allClasses`
      );
      setClasses(data.data);
      return data;
    },
    queryKey: ["classes"],
  });




  // filter approvedDatas
  const approveClasses = classes.filter((data) => data?.status === "approve");
  // console.log(approveClasses)

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_LINK}/payments`).then((res) => {
      setEnrollClasses(res.data);
    });
  }, []);

  if (isLoading) {
    return <Spinner />;
  }
  if (error) {
    return (
      <div>
        <h2 className="text-center text-4xl my-16">{error.message}</h2>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16 gap-8">
        {approveClasses.map((ApproveClass) => (
          <ClassCard
            key={ApproveClass?._id}
            ApproveClass={ApproveClass}
            enrollClasses={enrollClasses}
          />
        ))}
      </div>
    </>
  );
};

export default Classes;
