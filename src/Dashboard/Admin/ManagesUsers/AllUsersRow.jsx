import { UpdateUserRole } from "../../../api/user";

const AllUsersRow = ({ user, index, refetch }) => {
  //   console.log(user);

  const { _id } = user;

  const HandelCreateInstructor = () => {
    const role = "instructor";
    UpdateUserRole(role, _id, refetch);
  };

  const HandelCreateAdmin = () => {
    const role = "admin";
    UpdateUserRole(role, _id, refetch);
  };

  return (
    <>
      <tr className="font-bold">
        <th>
          <p>{index + 1}</p>
        </th>
        <td>
          <div className="flex avatar items-center space-x-3 mask mask-squircle w-12 h-12">
            <img src={user?.image} alt="Avatar Tailwind CSS Component" />
          </div>
        </td>
        <td>
          <p>{user?.name}</p>
        </td>
        <td>
          <p>{user?.email}</p>
        </td>
        <td>
          <p>{user?.role}</p>
        </td>
        <td>
          {user?.role === "admin" ? (
            ""
          ) : (
            <button
              onClick={HandelCreateInstructor}
              disabled={user?.role === "instructor"}
              className="my-outline-btn"
            >
              Instructor
            </button>
          )}
        </td>
        <td>
          <button
            onClick={HandelCreateAdmin}
            disabled={user?.role === "admin"}
            className="my-outline-btn"
          >
            Admin
          </button>
        </td>
      </tr>
    </>
  );
};

export default AllUsersRow;
