import heroImg from "../../src/imgs/hero1.png";
import mbToken from "../../src/imgs/mbToken.svg";
import meta from "../../src/imgs/meta.svg";
import opensea from "../../src/imgs/opensea.svg";
import Search from "./Search";

const HeroSection = () => {
  return (
    <section className="mb-20">
      <div className="container mx-auto flex flex-col-reverse md:flex-row px-6 mt-32 space-y-0 md:space-y-0 justify-between">
        {/* left item */}

        <div className=" w-[50%]">
          <div className="flex flex-col mb-32 space-y-6 w-[646px]">
            <h1 className="text-[#434343] leading-[78.4px] font-[700] text-[52px]">
              Rent a <span className="text-[#A02279] ml-2 mr-2">Place</span>
              away from <br />
              <span className="text-[#A02279] mr-2">Home</span>
              in the
              <span className="text-[#A02279] ml-2 mr-2">Metaverse</span>
            </h1>
            <p className="text-center text-gray-700 text-[24px] leading-[35px] md:text-left">
              we provide you access to luxury and affordable houses in the
              metaverse, get a chance to turn your imagination to reality at
              your comfort zone
            </p>
            <Search />
          </div>
        </div>

        {/* ===========Left side============================ */}
        <div className="w-[50%]">
          <div className="md:w-[476px] md:h-[459px] flex space-x-2">
            <div className="w-full flex flex-col items-center justify-center space-y-2">
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
            <div className="w-full flex flex-col  space-y-2">
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
      </div>

      {/* =======================Sponsors=================================== */}

      <div className="bg-gradient-to-r from-pink-500 to-pink-500">
        <div className="container mx-auto px-10  flex flex-col md:flex-row justify-between items-center">
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
