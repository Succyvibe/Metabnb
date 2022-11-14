import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import image7 from "../../src/imgs/img7.png";
import image8 from "../../src/imgs/img8.png";
import image9 from "../../src/imgs/img9.png";

const LearnMore = () => {
  return (
    <section className="learn-more h-[770px] mt-10 pt-8 md:p-24 relative">
      <div className="container mx-auto md:flex md:items-center px-8 md:px-0">
        <div className="w-full md:w-[50%]">
          <div className=" w-full md:w-[415px] mt-[30px]">
            <h1 className="text-[48px] font-[700] text-white">Metabnb NFTs</h1>
            <p className="text-[18px] font-[400] text-white mt-10 mb-8 md:mb-20 leading-9">
              Discover our NFT gift cards collection. Loyal customers gets
              amazing gift cards which are traded as NFTs. These NFTs gives our
              cutomer access to loads of our exclusive services.
            </p>

            <Link to="/register" cla>
              <a
                href=""
                className="bg-white p-3 px-6 pt-2 text-pink-500 rounded-[10px] baseline hover:bg-purple-400"
              >
                Learn More
              </a>
            </Link>
          </div>
        </div>
        <div className="pl-[40px]">
          <div className="lg:flex">
            <img
              src={image7}
              alt=""
              className="hidden md:block absolute top-[36%] right-[24%] z-20"
            />
            <img
              src={image8}
              alt=""
              className="absolute right-[2%] md:right-[7%]  md:top-[48%] z-30"
            />
            <img
              src={image9}
              alt=""
              className="hidden md:block top-[15%] right-[8%] absolute "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnMore;
