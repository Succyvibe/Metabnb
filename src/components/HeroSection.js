import heroImg from "../../src/imgs/hero1.png";
import heroImg5 from "../../src/imgs/image-5.png";
import heroImg1 from "../../src/imgs/frame4.png";
import heroImg6 from "../../src/imgs/image-6.png";
import heroImg7 from "../../src/imgs/image-7.png";
import mbToken from "../../src/imgs/mbToken.svg";
import meta from "../../src/imgs/meta.svg";
import opensea from "../../src/imgs/opensea.svg";
import Search from "./Search";

const HeroSection = () => {
  return (
    <section className="mb-20">
      <div className="lg:max-w-7xl mx-auto flex flex-col-reverse md:flex-row md:px-6 lg:mt-20  justify-between">
        {/* left item */}

        <div className="hidden lg:w-[450px] xl:w-[646px] lg:block ">
          <h1 className="text-[#434343] md:leading-[78.4px] lg:leading-[50px] xl:leading-[78.4px] font-[700] lg:text-[30px] xl:text-[52px]">
            Rent a <span className="text-[#A02279] ml-2 mr-2">Place</span>
            away from <br className="hidden md:block" />
            <span className="text-[#A02279] mr-2">Home</span>
            in the
            <span className="text-[#A02279] ml-2 mr-2">Metaverse</span>
          </h1>
          <p className="text-center text-gray-700 text-[24px] lg:text-[18px] xl:text-[24px] leading-[35px] md:text-left mt-8">
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>
          <Search />
        </div>

        {/* ==================================Small screen================================= */}
        <div className="w-full lg:hidden mt-14  px-8">
          <h1 className="text-[#434343] md:leading-[78.4px] font-[700] text-[30px] md:text-[52px] text-center mb-5">
            Rent a <span className="text-[#A02279] ml-2 mr-2">Place</span>
            away from <br className="hidden md:block" />
            <span className="text-[#A02279] mr-2">Home</span>
            in the
            <span className="text-[#A02279] ml-2 mr-2">Metaverse</span>
          </h1>

          <div className="w-[350px] h-[176px] md:w-[550px] md:h-[300px] rounded-xl mx-auto">
            <img
              src={heroImg}
              alt="Hero"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <p className="text-center text-gray-700 text-[18px] leading-[35px]  mt-8">
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>
          <Search />
        </div>
        {/* ========================================End of small screen======================================== */}
        {/* ===========Left side============================ */}
        <div className="hidden lg:w-[476px] lg:h-[459px] lg:flex space-x-2">
          <div className="w-full flex flex-col  justify-center space-y-2 pt-10">
            <div className="w-[234px] h-[176px] rounded-xl">
              <img
                src={heroImg1}
                alt="Hero"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="w-[234px] h-[176px] rounded-xl">
              <img
                src={heroImg6}
                alt="Hero"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
          <div className="w-full flex flex-col items-center space-y-2">
            <div className="w-[234px] h-[176px] rounded-xl">
              <img
                src={heroImg5}
                alt="Hero"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="w-[234px] h-[176px] rounded-xl">
              <img
                src={heroImg7}
                alt="Hero"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* =======================Sponsors=================================== */}

      <div className=" sponsors h-[70px] mt-20">
        <div className="lg:max-w-7xl mx-auto px-10 h-full  flex  justify-between items-center md:hidden">
          <img src={mbToken} alt="" className="w-[90px] " />
          <img src={meta} alt="" className="w-[90px] " />
          <img src={opensea} alt="" className="w-[90px] " />
        </div>
        <div className="lg:max-w-7xl mx-auto px-10 h-full  justify-between items-center hidden md:flex">
          <img src={mbToken} alt="" />
          <img src={meta} alt="" />
          <img src={opensea} alt="" />
        </div>
      </div>
      {/* =====================end==Sponsors=================================== */}
    </section>
  );
};

export default HeroSection;
