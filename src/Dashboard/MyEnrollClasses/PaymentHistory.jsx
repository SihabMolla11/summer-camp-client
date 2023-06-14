import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import PayRow from "./PayRow";
import useDTitle from "../../api/useDTitle";

const PaymentHistory = () => {

  useDTitle("My Payment History")

  const { user } = useContext(AuthContext);
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_LINK}/payments?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setPayments(data));
  }, [user?.email]);
  console.log(payments);

  const sorPayment = payments.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Date</th>
              <th>time</th>
              <th>transactionId</th>
            </tr>
          </thead>
          <tbody>
            {sorPayment.map((pay) => (
              <PayRow key={pay?._id} pay={pay} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
