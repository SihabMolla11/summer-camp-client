import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import EnrollRow from "./EnrollRow";
import useDTitle from "../../api/useDTitle";

const MyEnrollClass = () => {

  useDTitle("My Enroll Classes")

  const { user } = useContext(AuthContext);
  const [paymentData, setPaymentData] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_LINK}/payments?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setPaymentData(data);
      });
  }, [user?.email]);
//   console.log(paymentData);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="text-2xl">
                #
              </th>
              <th>Class Image</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Price</th>
              <th>Enrol Complete</th>
            </tr>
          </thead>
          <tbody>
            {
                paymentData.map((data , index)=><EnrollRow key={data?._id} index={index} data={data}/>)
            }

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyEnrollClass;
