const Instructor = ({ inst }) => {
  console.log(inst);

  return (
    <>
      <div className="card w-full bg-gradient-to-t from-[#e2b0659d] to-[#f0899a] shadow-xl">
        <figure className="px-10 pt-10">
          <img src={inst?.image} alt="Shoes" className="rounded-full h-44 w-44" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title font-bold text-[#000000d2]">{inst?.name}</h2>
          <p className="text-blue-500 font-bold underline cursor-pointer">{inst?.email}</p>

        </div>
      </div>
    </>
  );
};

export default Instructor;
