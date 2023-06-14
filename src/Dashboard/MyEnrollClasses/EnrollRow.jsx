import { FaCheckCircle } from "react-icons/fa";

const EnrollRow = ({ data, index }) => {
  console.log(data);

  const { classImage, name, instructorName, price } = data;

  return (
    <>
      <tr>
        <th>
          <p>{index + 1}</p>
        </th>
        <td>
          <div className="flex items-center avatar space-x-3 mask mask-squircle w-12 h-12">
            <img src={classImage} alt="Avatar Tailwind CSS Component" />
          </div>
        </td>
        <td>
          <p className="font-medium">{name}</p>
        </td>
        <td>{instructorName}</td>
        <td className="text-lg font-medium text-orange-400">$ {price}</td>
        <td>
          <p className="ml-8 text-4xl text-green-600">
            <FaCheckCircle />
          </p>
        </td>
      </tr>
    </>
  );
};

export default EnrollRow;
