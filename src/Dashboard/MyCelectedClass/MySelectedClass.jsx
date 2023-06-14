import { useQuery } from "@tanstack/react-query";
import SelectedClassRow from "./SelectedClassRow";
import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Spinner from "../../Components/Spinner/Spinner";
import useDTitle from "../../api/useDTitle";

const MySelectedClass = () => {

  useDTitle("My Selected Class")

  const { user, loading } = useContext(AuthContext);
  const [selectedClasse, setSelectedClasses] = useState([]);

  const { isLoading, refetch } = useQuery({
    queryKey: ["selectedClass"],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_LINK}/selectedClasses?email=${user?.email}`
      );
      setSelectedClasses(res.data);
      return res;
    },
  });

  // console.log(selectedClasse);
  // console.log(user?.email);

  if (isLoading || loading) {
    return <Spinner />;
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="text-lg">#</th>
              <th>Class image</th>
              <th>Class name</th>
              <th>Instructor Name</th>
              <th>Price</th>
              <th>Deselect Class</th>
              <th>Enroll Class</th>
            </tr>
          </thead>
          <tbody>
            {selectedClasse.map((seClass, index) => (
              <SelectedClassRow
                key={seClass._id}
                seClass={seClass}
                refetch={refetch}
                index={index}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MySelectedClass;
