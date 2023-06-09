import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import ClassCard from "./ClassCard";
import Spinner from "../../Components/Spinner/Spinner";

const Classes = () => {
  const classesUrl = "public/class.json";
  const [classes, setClasses] = useState([]);
  // useEffect(() => {
  //   axios.get(classesUrl).then((res) => console.log(res.data));
  // }, []);

  const { isLoading, error } = useQuery({
    queryFn: async () => {
      const data = await axios.get(classesUrl);
      setClasses(data.data);
      return data;
    },
    queryKey: ["classes"],
  });

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
        {classes.map((data, index) => (
          <ClassCard key={index} data={data}></ClassCard>
        ))}
      </div>
    </>
  );
};

export default Classes;
