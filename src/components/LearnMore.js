import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import image7 from "../../src/imgs/img7.png";
import image8 from "../../src/imgs/img8.png";
import image9 from "../../src/imgs/img9.png";

const LearnMore = () => {
  return (
    <section className="h-[770px] mt-10 bg-gradient-to-r from-pink-500 to-pink-500 p-24 relative">
      <div className="container mx-auto">
        <div className="w-[50%]">
          <div className="w-[415px]">
            <h1 className="text-[48px] font-[700] text-white">Metabnb NFTs</h1>
            <p className="text-[18px] font-[400] text-white">
              Discover our NFT gift cards collection. Loyal customers gets
              amazing gift cards which are traded as NFTs. These NFTs gives our
              cutomer access to loads of our exclusive services.
            </p>

            <Link to="/register">
              <a
                href=""
                className="bg-white p-3 px-6 pt-2 text-pink-500 rounded-[10px] baseline hover:bg-purple-400"
              >
                Learn More
              </a>
            </Link>
          </div>
        </div>
        <div className="">
          <img
            src={image7}
            alt=""
            className="absolute top-[20%] right-[30%] z-20"
          />
          <img
            src={image8}
            alt=""
            className="absolute right-[14%] top-[46%] z-30"
          />
          <img src={image9} alt="" className="top-0 right-[20%] absolute " />
        </div>
      </div>
    </section>
  );
};

export default LearnMore;
