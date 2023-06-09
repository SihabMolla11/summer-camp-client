import {BsArrowRightShort} from "react-icons/bs"

const ClassCard = ({ data }) => {
  console.log(data);

  const { name, image, InstructorName, sets, price } = data;

  return (
    <div>
      <div className=" w-full bg-base-100 card shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="">
          <div className="flex items-center font-medium justify-between text-lg p-5">
            <p className="text-green-500 border-2 rounded-2xl py-1 px-3">
              Available Sets: {sets}
            </p>
            <p className=" border-2 rounded-2xl py-1 px-3 text-[#ff9900]">
              price: ${price}
            </p>
          </div>
          <hr />
          <div className=" space-y-2 my-4 px-6">
            <h2 className="text-2xl font-bold text-[#3f3e3e] ">
              Class Name: {name}
            </h2>
            <p className="mt-2 text-xl font-medium">
              Instructor Name: {InstructorName}
            </p>
          </div>
          <hr />
          <div className="card-actions justify-end p-6">
            <button className="my-outline-btn flex items-center">
              <p>Select class</p> <BsArrowRightShort className="text-4xl"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
