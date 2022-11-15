import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import image7 from "../../src/imgs/img7.png";
import image8 from "../../src/imgs/img8.png";
import image9 from "../../src/imgs/img9.png";

const LearnMore = () => {
  return (
    <section className="learn-more h-[770px] md:h-[600px] xl:h-[774px] mt-10 pt-8 md:py-24 md:px-8 lg:p-24 relative">
      <div className="lg:max-w-7xl mx-auto md:flex md:items-center px-8 md:px-0 ">
        <div className="w-full md:w-[50%]">
          <div className=" w-full md:w-[415px] mt-[30px]">
            <h1 className="text-[48px] font-[700] text-white">Metabnb NFTs</h1>
            <p className="text-[18px] font-[400] text-white mt-10 mb-8 md:mb-14 leading-9">
              Discover our NFT gift cards collection. Loyal customers gets
              amazing gift cards which are traded as NFTs. These NFTs gives our
              cutomer access to loads of our exclusive services.
            </p>

            <Link to="/register">
              <div className="bg-white w-[156px] flex justify-center items-center h-[48px] text-[ #A02279] rounded-[10px] baseline hover:bg-purple-400">
                Learn More
              </div>
            </Link>
          </div>
        </div>
        <div className="pl-[40px] xl:w-[704px]">
          <div className="lg:flex">
            <div className="hidden md:block absolute xl:top-[36%] xl:right-[25%] lg:right-[25%] lg:top-[43%] md:top-[48%] md:right-[20%]  z-20 md:w-[200px] lg:w-[300px] xl:w-[378.21px] xl:h-[253.89px]">
              <img src={image7} alt="" className="md:w-full cover" />
            </div>
            <div className="absolute right-[2%] md:right-[5%] md:top-[56%]  lg:top-[48%] lg:right-[4%] xl:right-[10%] xl:top-[45%] z-30 md:w-[200px] lg:w-[300px] xl:w-[378.2px] xl:h-[253.89px]">
              <img src={image8} alt="" className="md:w-full cover" />
            </div>
            <div className="hidden md:block lg:top-[20%] lg:right-[8%] md:right-[6%] xl:top-[15%] xl:right-[12%] md:top-[35%] absolute  md:w-[200px] lg:w-[300px] xl:w-[378.2px] xl:h-[253.89px]">
              <img src={image9} alt="" className="md:w-full cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnMore;
