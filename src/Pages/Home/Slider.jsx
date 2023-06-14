import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import sliderImg1 from "../../assets/sliderImage/slider2.png";
import sliderImg2 from "../../assets/sliderImage/slider4.png";
import sliderImg3 from "../../assets/sliderImage/slider1.png";
import sliderImg4 from "../../assets/sliderImage/slider-3.png";
import { FaArrowRight } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Slider = () => {
  return (
    <div>
      <div className="text-center ">
        <Carousel>
          <div className=" relative ">
            <div className=" text-left  p-10 h-full w-full absolute z-10  text-white    bg-gradient-to-r from-[#000000] to-[#00000000]">
              <h2 className="text-5xl font-bold">
                {" "}
                Unveiling the <br /> Beauty of <br /> Photography{" "}
              </h2>
              <p className="mt-10 hidden md:block">
                Discover the art and beauty of photography at Frame & Focus.{" "}
                <br /> Explore captivating visuals, tips, and inspiration to
                enhance your <br /> skills and unleash your creative vision.
                Join us on this photographic journey.
              </p>

              <div className=" hidden lg:block">
                <button className="my-btn mt-10 hidden">
                  Get select Class <FaArrowRight className="text-lg" />
                </button>
              </div>
            </div>
            <img src={sliderImg2} />
          </div>
          <div className=" relative">
            <div className=" text-left p-10 h-full w-full absolute z-10  text-white    bg-gradient-to-r from-[#000000] to-[#00000000]">
              <h2 className="text-5xl font-bold">
                {" "}
                Unveiling the <br /> Beauty of <br /> Photography{" "}
              </h2>
              <p className="mt-10 ">
                Discover the art and beauty of photography at Frame & Focus.{" "}
                <br /> Explore captivating visuals, tips, and inspiration to
                enhance your <br /> skills and unleash your creative vision.
                Join us on this photographic journey.
              </p>

              <button className="my-btn mt-10">
                Get select Class <FaArrowRight className="text-lg" />
              </button>
            </div>
            <img src={sliderImg1} />
          </div>
          <div className=" relative">
            <div className=" text-left p-10 h-full w-full absolute z-10  text-white    bg-gradient-to-r from-[#000000] to-[#00000000]">
              <h2 className="text-5xl font-bold">
                {" "}
                Unveiling the <br /> Beauty of <br /> Photography{" "}
              </h2>
              <p className="mt-10 ">
                Discover the art and beauty of photography at Frame & Focus.{" "}
                <br /> Explore captivating visuals, tips, and inspiration to
                enhance your <br /> skills and unleash your creative vision.
                Join us on this photographic journey.
              </p>

              <button className="my-btn mt-10">
                Get select Class <FaArrowRight className="text-lg" />
              </button>
            </div>
            <img src={sliderImg3} />
          </div>
          <div className=" relative">
            <div className=" text-left p-10 h-full w-full absolute z-10  text-white    bg-gradient-to-r from-[#000000] to-[#00000000]">
              <h2 className="text-5xl font-bold">
                {" "}
                Unveiling the <br /> Beauty of <br /> Photography{" "}
              </h2>
              <p className="mt-10 ">
                Discover the art and beauty of photography at Frame & Focus.{" "}
                <br /> Explore captivating visuals, tips, and inspiration to
                enhance your <br /> skills and unleash your creative vision.
                Join us on this photographic journey.
              </p>

              <button className="my-btn mt-10">
                Get select Class <FaArrowRight className="text-lg" />
              </button>
            </div>
            <img src={sliderImg4} />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Slider;
