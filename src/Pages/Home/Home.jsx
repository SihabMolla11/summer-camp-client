import useTitle from "../../api/useTitle";
import InstructorSection from "./InstructorSection";
import PopulerClasses from "./PopulerClasses";
import Slider from "./Slider";
import UserRole from "./UserRole";

const Home = () => {

  useTitle("Home")

  return (
    <>
      <div>
        <Slider />
      </div>
      <div className="my-10">
        <PopulerClasses/>
      </div>
      <div className="my-10">
        <InstructorSection/>
      </div>
      <div>
        <UserRole/>
      </div>
    </>
  );
};

export default Home;
