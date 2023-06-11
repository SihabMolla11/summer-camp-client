const AllClassesRow = ({ data }) => {
  console.log(data);

  const { classImage, email, instructorName, name, price, seats, status, _id } =
    data;

  return (
    <>
      <tr className={ `${status ==="pending" ? "bg-slate-100": "" }`}>
        <td>
          <div className="flex avatar items-center mask mask-squircle w-12 h-12">
            <img src={classImage} alt="Avatar Tailwind CSS Component" />
          </div>
        </td>
        <td>
          <p>{name}</p>
        </td>
        <td>
          <p>{instructorName}</p>
        </td>
        <td>
          <p>{email}</p>
        </td>
        <td>
          <p>{seats}</p>
        </td>
        <td>
          <p>{price}</p>
        </td>
        <td>
          <button className="btn btn-ghost btn-xs">{status}</button>
        </td>
        <td>
          <button className="btn btn-ghost btn-xs">details</button>
        </td>
      </tr>
    </>
  );
};

export default AllClassesRow;
