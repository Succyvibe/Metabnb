import heroImg from "../../src/imgs/hero1.png";
import mbToken from "../../src/imgs/mbToken.svg";
import meta from "../../src/imgs/meta.svg";
import opensea from "../../src/imgs/opensea.svg";
import Search from "./Search";

const HeroSection = () => {
  return (
    <section className="mb-20">
      <div className="container mx-auto flex flex-col-reverse md:flex-row md:px-6 md:mt-32  justify-between">
        {/* left item */}

        <div className="hidden md:w-[646px] md:block">
          <h1 className="text-[#434343] md:leading-[78.4px] font-[700] md:text-[52px]">
            Rent a <span className="text-[#A02279] ml-2 mr-2">Place</span>
            away from <br className="hidden md:block" />
            <span className="text-[#A02279] mr-2">Home</span>
            in the
            <span className="text-[#A02279] ml-2 mr-2">Metaverse</span>
          </h1>
          <p className="text-center text-gray-700 text-[24px] leading-[35px] md:text-left mt-8">
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>
          <Search />
        </div>
        <div className="w-full md:hidden mt-14 px-8">
          <h1 className="text-[#434343] md:leading-[78.4px] font-[700] text-[30px] text-center mb-5">
            Rent a <span className="text-[#A02279] ml-2 mr-2">Place</span>
            away from <br className="hidden md:block" />
            <span className="text-[#A02279] mr-2">Home</span>
            in the
            <span className="text-[#A02279] ml-2 mr-2">Metaverse</span>
          </h1>

          <div className="w-[350px] h-[176px] rounded-xl mx-auto">
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

        {/* ===========Left side============================ */}
        <div className="hidden md:w-[476px] md:h-[459px] md:flex space-x-2">
          <div className="w-full flex flex-col  justify-center space-y-2 pt-10">
            <div className="w-[234px] h-[176px] rounded-xl">
              <img
                src={heroImg}
                alt="Hero"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="w-[234px] h-[176px] rounded-xl">
              <img
                src={heroImg}
                alt="Hero"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
          <div className="w-full flex flex-col items-center space-y-2">
            <div className="w-[234px] h-[176px] rounded-xl">
              <img
                src={heroImg}
                alt="Hero"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="w-[234px] h-[176px] rounded-xl">
              <img
                src={heroImg}
                alt="Hero"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* =======================Sponsors=================================== */}

      <div className=" sponsors h-[70px] mt-10">
        <div className="container mx-auto px-10 h-full  flex  justify-between items-center">
          <img src={mbToken} alt="" className="w-[90px]" />
          <img src={meta} alt="" className="w-[90px]" />
          <img src={opensea} alt="" className="w-[90px]" />
        </div>
      </div>
      {/* =====================end==Sponsors=================================== */}
    </section>
  );
};

export default HeroSection;
