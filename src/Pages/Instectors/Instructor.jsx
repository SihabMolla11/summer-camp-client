const Instructor = ({inst}) => {

    console.log(inst)


  return (
    <>
      <div className=" rounded-xl drop-shadow-2xl relative h-72 w-full">
        <div className="rounded-t-xl  bg-[#FD603D] w-full h-[30%]">
          <div className="absolute top-8 px-20 ">

            {/* TODO PLEASE FIXED INSTRUCTOR IMAGE */}

            <img
              className=" rounded-full border-[#8fc3ff] border-4 h-28 w-28"
              src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=2000"
              alt=""
            />
          </div>
        </div>
        <div className="text-center rounded-b-xl  bg-white h-full">
          <div>
            <h2 className="pt-20">{inst.name}</h2>
            <h4 className="">{inst.email}</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Instructor;
