const PayRow = ({ pay }) => {
  console.log(pay);
  const { transactionId, name, classImage, date, price } = pay;

  const time = new Date(date).toLocaleTimeString();
  const newDate = new Date(date).toLocaleDateString();

  return (
    <>
      <tr>
        <td>
          <div className="flex items-center avatar mask mask-squircle w-12 h-12">
            <img src={classImage} alt="Avatar Tailwind CSS Component" />
          </div>
        </td>
        <td className="text-md font-bold">{name}</td>
        <td className="text-orange-500 text-lg font-medium">$ {price}</td>
        <td>{newDate}</td>
        <td>{time}</td>
        <th className="text-green-600">{transactionId}</th>
      </tr>
    </>
  );
};

export default PayRow;
