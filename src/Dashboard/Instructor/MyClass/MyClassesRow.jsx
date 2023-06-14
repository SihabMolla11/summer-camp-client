import { FaTrashAlt, FaEdit } from "react-icons/fa";

const MyClassesRow = ({ index, data, handelDeleteClass, enrollClasses }) => {
  console.log(data);
  const { classImage, name, status, price, _id, feedback } = data;
  // console.log(enrollClasses);

  const totalEnrollClass = enrollClasses.filter((ec) => ec.Classid === _id);

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
            className={` text-green-500 font-medium ${
              status == "pending" && "text-orange-500"
            } ${status === "denied" && "text-red-500"} `}
          >
            {status}
          </p>
        </td>
        <th>
          <p className="text-center">{totalEnrollClass?.length}</p>
        </th>
        <th ><span className="text-sm font-normal"> {feedback}</span></th>
        <th>
          <button className="p-2 bg-blue-200 rounded-full text-blue-500 hover:bg-blue-300 hover:text-blue-600 text-lg">
            <FaEdit />
          </button>
        </th>
        <th>
          <button
            onClick={() => handelDeleteClass(_id)}
            className="p-2 bg-red-200 rounded-full text-red-500 hover:bg-red-300 hover:text-red-600 text-lg "
          >
            <FaTrashAlt />
          </button>
        </th>
      </tr>
    </>
  );
};

export default MyClassesRow;
