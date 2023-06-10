const Instructor = ({inst}) => {

    console.log(inst)


  return (
    <>
      <div className=" rounded-xl drop-shadow-2xl relative h-full  w-full">
        <div className="rounded-t-xl pt-10 bg-[#FD603D] w-full h-[50%]">
          <div className="absolute top-8 px-20 ">

            {/* TODO PLEASE FIXED INSTRUCTOR IMAGE */}

            <img
              className=" rounded-full border-[#8fc3ff] border-4 h-28 w-28"
              src={inst?.image}
              alt=""
            />
          </div>
        </div>
        <div className="text-center rounded-b-xl  bg-white h-full">
          <div>
            <h2 className="pt-20 text-2xl font-bold mb-5">{inst.name}</h2>
            <h4 className="text-lg font-medium">{inst.email}</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Instructor;
