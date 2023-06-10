import { FaTrashAlt, FaEdit } from "react-icons/fa";

const MyClassesRow = ({ index, data }) => {
  // console.log(data);
  const { classImage, name, status, price } = data;

  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>
          <div className="flex avatar items-center space-x-3">
            <div className="mask mask-squircle w-12 h-12">
              <img src={classImage} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </td>
        <td>
          <p className="text-[16px] font-bold">{name}</p>
        </td>
        <td>
          <p className="text-lg text-orange-400 font-medium">$ {price}</p>
        </td>
        <td>
          <p
            className={` font-medium ${
              status == "pending" ? "text-red-500" : "text-green-500"
            }`}
          >
            {status}
          </p>
        </td>
        <th><p className="text-center">{50}</p></th>
        <th>FeetBack</th>
        <th>
          <button className="p-2 bg-blue-200 rounded-full text-blue-500 hover:bg-blue-300 hover:text-blue-600 text-lg">
            <FaEdit />
          </button>
        </th>
        <th>
          <button className="p-2 bg-red-200 rounded-full text-red-500 hover:bg-red-300 hover:text-red-600 text-lg ">
            <FaTrashAlt />
          </button>
        </th>
      </tr>
    </>
  );
};

export default MyClassesRow;
