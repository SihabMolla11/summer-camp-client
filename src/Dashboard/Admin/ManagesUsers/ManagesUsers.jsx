import { useQuery } from "@tanstack/react-query";
import AllUsersRow from "./AllUsersRow";
import axios from "axios";
import Spinner from "../../../Components/Spinner/Spinner";
import { useState } from "react";
import useDTitle from "../../../api/useDTitle";

const ManagesUsers = () => {

  useDTitle("Manage Users")

  const [users, setUsers] = useState([]);

  const { isLoading, refetch } = useQuery({
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_LINK}/users`);
      setUsers(res?.data);
      return res;
    },
    queryKey: ["Users"],
  });

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="text-2xl">#</th>
              <th>User Image</th>
              <th>User Image</th>
              <th>User Email</th>
              <th>User Role</th>
              <th>Instructor</th>
              <th>Admin</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <AllUsersRow key={user._id} user={user} index={index} refetch={refetch}/>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManagesUsers;
