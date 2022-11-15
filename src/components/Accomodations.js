import hero1 from "../../src/imgs/hero1.png";
import frame1 from "../../src/imgs/frame1.png";
import frame4 from "../../src/imgs/frame4.png";
import frame5 from "../../src/imgs/frame5.png";
import frame6 from "../../src/imgs/frame6.png";
import frame7 from "../../src/imgs/frame7.png";
import frame11 from "../../src/imgs/frame-3.png";
import frame12 from "../../src/imgs/image-5.png";
import frame13 from "../../src/imgs/frame13.png";
import frame10 from "../../src/imgs/frame10.png";
import frame14 from "../../src/imgs/frame14.png";
import frame17 from "../../src/imgs/frame17.png";
import frame16 from "../../src/imgs/frame16.png";
import frame18 from "../../src/imgs/frame18.png";
import frame19 from "../../src/imgs/frame19.png";
import rating from "../../src/imgs/star.png";
import setting from "../../src/imgs/setting-5.png";
import DropDown from "./DropDown";

const Accomodations = () => {
  return (
    <section className="my-20">
      <div className="lg:max-w-7xl mx-auto px-4">
        <div className="hidden list-none lg:flex justify-between items-center text-[20px] font-[400]">
          <li>Restaurant</li>
          <li>Cottage</li>
          <li>Castle</li>
          <li>Fastast City</li>
          <li>Beach</li>
          <li>Cabins</li>
          <li>Off-grid</li>
          <li>Farm</li>
          <div className=" border-2 border-[#B4B4B4] w-[161px] h-[48px] flex justify-between items-center rounded-[8px] px-3">
            <p>Location</p>
            <div>
              <img src={setting} alt="" />
            </div>
          </div>
        </div>
        <DropDown />

        {/* ===========================Grid box============================= */}
        <div className="lg:max-w-7xl mx-auto mt-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-5 gap-x-5">
            <div className="w-full min-h-[372px] md:w-[350px] lg:w-[292px] border border-1 border-[#D7D7D7] rounded-[15px] p-3">
              <div className="w-full md:w-[325px] lg:w-[260px] h-[265px]  rounded-[15px]">
                <img src={frame5} alt="" className="w-full h-full cover" />
              </div>
              <div className="flex justify-between mb-3 mt-3">
                <p className="text-[#434343] text-[12px] font-[400]">
                  Desert King
                </p>
                <p className="text-[#434343] text-[12px] font-[700]">
                  1MBT per night
                </p>
              </div>
              <div className="flex justify-between mb-3">
                <p className="text-[#434343] text-[12px] font-[400]">
                  2345km away
                </p>
                <p className="text-[#434343] text-[12px] font-[400]">
                  available for 2weeks stay
                </p>
              </div>
              <div className="flex space-x-3 mb-3">
                <img src={rating} alt="" />
                <img src={rating} alt="" />
                <img src={rating} alt="" />
                <img src={rating} alt="" />
                <img src={rating} alt="" />
              </div>
            </div>
            <div className="w-full min-h-[372px] md:w-[350px] lg:w-[292px] border border-1 border-[#D7D7D7] rounded-[15px] p-3">
              <div className="w-full md:w-[325px] lg:w-[260px] h-[265px]  rounded-[15px]">
                <img src={frame6} alt="" className="w-full h-full cover" />
              </div>
              <div className="flex justify-between mb-3 mt-3">
                <p className="text-[#434343] text-[12px] font-[400]">
                  Desert King
                </p>
                <p className="text-[#434343] text-[12px] font-[700]">
                  1MBT per night
                </p>
              </div>
              <div className="flex justify-between mb-3">
                <p className="text-[#434343] text-[12px] font-[400]">
                  2345km away
                </p>
                <p className="text-[#434343] text-[12px] font-[400]">
                  available for 2weeks stay
                </p>
              </div>
              <div className="flex space-x-3 mb-3">
                <img src={rating} alt="" />
                <img src={rating} alt="" />
                <img src={rating} alt="" />
                <img src={rating} alt="" />
                <img src={rating} alt="" />
              </div>
            </div>
            <div className="w-full min-h-[372px] md:w-[350px] lg:w-[292px] border border-1 border-[#D7D7D7] rounded-[15px] p-3">
              <div className="w-full md:w-[325px] lg:w-[260px] h-[265px]  rounded-[15px]">
                <img src={hero1} alt="" className="w-full h-full cover" />
              </div>
              <div className="flex justify-between mb-3 mt-3">
                <p className="text-[#434343] text-[12px] font-[400]">
                  Desert King
                </p>
                <p className="text-[#434343] text-[12px] font-[700]">
                  1MBT per night
                </p>
              </div>
              <div className="flex justify-between mb-3">
                <p className="text-[#434343] text-[12px] font-[400]">
                  2345km away
                </p>
                <p className="text-[#434343] text-[12px] font-[400]">
                  available for 2weeks stay
                </p>
              </div>
              <div className="flex space-x-3 mb-3">
                <img src={rating} alt="" />
                <img src={rating} alt="" />
                <img src={rating} alt="" />
                <img src={rating} alt="" />
                <img src={rating} alt="" />
              </div>
            </div>
            <div className="w-full min-h-[372px] md:w-[350px] lg:w-[292px] border border-1 border-[#D7D7D7] rounded-[15px] p-3">
              <div className="w-full md:w-[325px] lg:w-[260px] h-[265px]  rounded-[15px]">
                <img src={frame7} alt="" className="w-full h-full cover" />
              </div>
              <div className="flex justify-between mb-3 mt-3">
                <p className="text-[#434343] text-[12px] font-[400]">
                  Desert King
                </p>
                <p className="text-[#434343] text-[12px] font-[700]">
                  1MBT per night
                </p>
              </div>
              <div className="flex justify-between mb-3">
                <p className="text-[#434343] text-[12px] font-[400]">
                  2345km away
                </p>
                <p className="text-[#434343] text-[12px] font-[400]">
                  available for 2weeks stay
                </p>
              </div>
              <div className="flex space-x-3 mb-3">
                <img src={rating} alt="" />
                <img src={rating} alt="" />
                <img src={rating} alt="" />
                <img src={rating} alt="" />
                <img src={rating} alt="" />
              </div>
            </div>
            <div className="w-full min-h-[372px] md:w-[350px] lg:w-[292px] border border-1 border-[#D7D7D7] rounded-[15px] p-3">
              <div className="w-full md:w-[325px] lg:w-[260px] h-[265px]  rounded-[15px]">
                <img src={frame10} alt="" className="w-full h-full cover" />
              </div>
              <div className="flex justify-between mb-3 mt-3">
                <p className="text-[#434343] text-[12px] font-[400]">
                  Desert King
                </p>
                <p className="text-[#434343] text-[12px] font-[700]">
                  1MBT per night
                </p>
              </div>
              <div className="flex justify-between mb-3">
                <p className="text-[#434343] text-[12px] font-[400]">
                  2345km away
                </p>
                <p className="text-[#434343] text-[12px] font-[400]">
                  available for 2weeks stay
                </p>
              </div>
              <div className="flex space-x-3 mb-3">
                <img src={rating} alt="" />
                <img src={rating} alt="" />
                <img src={rating} alt="" />
                <img src={rating} alt="" />
                <img src={rating} alt="" />
              </div>
            </div>
            <div className="w-full min-h-[372px] md:w-[350px] lg:w-[292px] border border-1 border-[#D7D7D7] rounded-[15px] p-3">
              <div className="w-full md:w-[325px] lg:w-[260px] h-[265px]  rounded-[15px]">
                <img src={frame1} alt="" className="w-full h-full cover" />
              </div>
              <div className="flex justify-between mb-3 mt-3">
                <p className="text-[#434343] text-[12px] font-[400]">
                  Desert King
                </p>
                <p className="text-[#434343] text-[12px] font-[700]">
                  1MBT per night
                </p>
              </div>
              <div className="flex justify-between mb-3">
                <p className="text-[#434343] text-[12px] font-[400]">
                  2345km away
                </p>
                <p className="text-[#434343] text-[12px] font-[400]">
                  available for 2weeks stay
                </p>
              </div>
              <div className="flex space-x-3 mb-3">
                <img src={rating} alt="" />
                <img src={rating} alt="" />
                <img src={rating} alt="" />
                <img src={rating} alt="" />
                <img src={rating} alt="" />
              </div>
            </div>
            <div className="w-full min-h-[372px] md:w-[350px] lg:w-[292px] border border-1 border-[#D7D7D7] rounded-[15px] p-3">
              <div className="w-full md:w-[325px] lg:w-[260px] h-[265px]  rounded-[15px]">
                <img src={hero1} alt="" className="w-full h-full cover" />
              </div>
              <div className="flex justify-between mb-3 mt-3">
                <p className="text-[#434343] text-[12px] font-[400]">
                  Desert King
                </p>
                <p className="text-[#434343] text-[12px] font-[700]">
                  1MBT per night
                </p>
              </div>
              <div className="flex justify-between mb-3">
                <p className="text-[#434343] text-[12px] font-[400]">
                  2345km away
                </p>
                <p className="text-[#434343] text-[12px] font-[400]">
                  available for 2weeks stay
                </p>
              </div>
              <div className="flex space-x-3 mb-3">
                <img src={rating} alt="" />
                <img src={rating} alt="" />
                <img src={rating} alt="" />
                <img src={rating} alt="" />
                <img src={rating} alt="" />
              </div>
            </div>
            <div className="w-full min-h-[372px] md:w-[350px] lg:w-[292px] border border-1 border-[#D7D7D7] rounded-[15px] p-3">
              <div className="w-full md:w-[325px] lg:w-[260px] h-[265px]  rounded-[15px]">
                <img src={frame11} alt="" className="w-full h-full cover" />
              </div>
              <div className="flex justify-between mb-3 mt-3">
                <p className="text-[#434343] text-[12px] font-[400]">
                  Desert King
                </p>
                <p className="text-[#434343] text-[12px] font-[700]">
                  1MBT per night
                </p>
              </div>
              <div className="flex justify-between mb-3">
                <p className="text-[#434343] text-[12px] font-[400]">
                  2345km away
                </p>
                <p className="text-[#434343] text-[12px] font-[400]">
                  available for 2weeks stay
                </p>
              </div>
              <div className="flex space-x-3 mb-3">
                <img src={rating} alt="" />
                <img src={rating} alt="" />
                <img src={rating} alt="" />
                <img src={rating} alt="" />
                <img src={rating} alt="" />
              </div>
            </div>
            <div className="w-full min-h-[372px] md:w-[350px] lg:w-[292px] border border-1 border-[#D7D7D7] rounded-[15px] p-3">
              <div className="w-full md:w-[325px] lg:w-[260px] h-[265px]  rounded-[15px]">
                <img src={frame4} alt="" className="w-full h-full cover" />
              </div>
              <div className="flex justify-between mb-3 mt-3">
                <p className="text-[#434343] text-[12px] font-[400]">
                  Desert King
                </p>
                <p className="text-[#434343] text-[12px] font-[700]">
                  1MBT per night
                </p>
              </div>
              <div className="flex justify-between mb-3">
                <p className="text-[#434343] text-[12px] font-[400]">
                  2345km away
                </p>
                <p className="text-[#434343] text-[12px] font-[400]">
                  available for 2weeks stay
                </p>
              </div>
              <div className="flex space-x-3 mb-3">
                <img src={rating} alt="" />
                <img src={rating} alt="" />
                <img src={rating} alt="" />
                <img src={rating} alt="" />
                <img src={rating} alt="" />
              </div>
            </div>
            <div className="w-full min-h-[372px] md:w-[350px] lg:w-[292px] border border-1 border-[#D7D7D7] rounded-[15px] p-3">
              <div className="w-full md:w-[325px] lg:w-[260px] h-[265px]  rounded-[15px]">
                <img src={frame12} alt="" className="w-full h-full cover" />
              </div>
              <div className="flex justify-between mb-3 mt-3">
                <p className="text-[#434343] text-[12px] font-[400]">
                  Desert King
                </p>
                <p className="text-[#434343] text-[12px] font-[700]">
                  1MBT per night
                </p>
              </div>
              <div className="flex justify-between mb-3">
                <p className="text-[#434343] text-[12px] font-[400]">
                  2345km away
                </p>
                <p className="text-[#434343] text-[12px] font-[400]">
                  available for 2weeks stay
                </p>
              </div>
              <div className="flex space-x-3 mb-3">
                <img src={rating} alt="" />
                <img src={rating} alt="" />
                <img src={rating} alt="" />
                <img src={rating} alt="" />
                <img src={rating} alt="" />
              </div>
            </div>
            <div className="w-full min-h-[372px] md:w-[350px] lg:w-[292px] border border-1 border-[#D7D7D7] rounded-[15px] p-3">
              <div className="w-full md:w-[325px] lg:w-[260px] h-[265px]  rounded-[15px]">
                <img src={frame13} alt="" className="w-full h-full cover" />
              </div>
              <div className="flex justify-between mb-3 mt-3">
                <p className="text-[#434343] text-[12px] font-[400]">
                  Desert King
                </p>
                <p className="text-[#434343] text-[12px] font-[700]">
                  1MBT per night
                </p>
              </div>
              <div className="flex justify-between mb-3">
                <p className="text-[#434343] text-[12px] font-[400]">
                  2345km away
                </p>
                <p className="text-[#434343] text-[12px] font-[400]">
                  available for 2weeks stay
                </p>
              </div>
              <div className="flex space-x-3 mb-3">
                <img src={rating} alt="" />
                <img src={rating} alt="" />
                <img src={rating} alt="" />
                <img src={rating} alt="" />
                <img src={rating} alt="" />
              </div>
            </div>
            <div className="w-full min-h-[372px] md:w-[350px] lg:w-[292px] border border-1 border-[#D7D7D7] rounded-[15px] p-3">
              <div className="w-full md:w-[325px] lg:w-[260px] h-[265px]  rounded-[15px]">
                <img src={frame13} alt="" className="w-full h-full cover" />
              </div>
              <div className="flex justify-between mb-3 mt-3">
                <p className="text-[#434343] text-[12px] font-[400]">
                  Desert King
                </p>
                <p className="text-[#434343] text-[12px] font-[700]">
                  1MBT per night
                </p>
              </div>
              <div className="flex justify-between mb-3">
                <p className="text-[#434343] text-[12px] font-[400]">
                  2345km away
                </p>
                <p className="text-[#434343] text-[12px] font-[400]">
                  available for 2weeks stay
                </p>
              </div>
              <div className="flex space-x-3 mb-3">
                <img src={rating} alt="" />
                <img src={rating} alt="" />
                <img src={rating} alt="" />
                <img src={rating} alt="" />
                <img src={rating} alt="" />
              </div>
            </div>
            <div className="w-full min-h-[372px] md:w-[350px] lg:w-[292px] border border-1 border-[#D7D7D7] rounded-[15px] p-3">
              <div className="w-full md:w-[325px] lg:w-[260px] h-[265px]  rounded-[15px]">
                <img src={frame17} alt="" className="w-full h-full cover" />
              </div>
              <div className="flex justify-between mb-3 mt-3">
                <p className="text-[#434343] text-[12px] font-[400]">
                  Desert King
                </p>
                <p className="text-[#434343] text-[12px] font-[700]">
                  1MBT per night
                </p>
              </div>
              <div className="flex justify-between mb-3">
                <p className="text-[#434343] text-[12px] font-[400]">
                  2345km away
                </p>
                <p className="text-[#434343] text-[12px] font-[400]">
                  available for 2weeks stay
                </p>
              </div>
              <div className="flex space-x-3 mb-3">
                <img src={rating} alt="" />
                <img src={rating} alt="" />
                <img src={rating} alt="" />
                <img src={rating} alt="" />
                <img src={rating} alt="" />
              </div>
            </div>
            <div className="w-full min-h-[372px] md:w-[350px] lg:w-[292px] border border-1 border-[#D7D7D7] rounded-[15px] p-3">
              <div className="w-full md:w-[325px] lg:w-[260px] h-[265px]  rounded-[15px]">
                <img src={frame16} alt="" className="w-full h-full cover" />
              </div>
              <div className="flex justify-between mb-3 mt-3">
                <p className="text-[#434343] text-[12px] font-[400]">
                  Desert King
                </p>
                <p className="text-[#434343] text-[12px] font-[700]">
                  1MBT per night
                </p>
              </div>
              <div className="flex justify-between mb-3">
                <p className="text-[#434343] text-[12px] font-[400]">
                  2345km away
                </p>
                <p className="text-[#434343] text-[12px] font-[400]">
                  available for 2weeks stay
                </p>
              </div>
              <div className="flex space-x-3 mb-3">
                <img src={rating} alt="" />
                <img src={rating} alt="" />
                <img src={rating} alt="" />
                <img src={rating} alt="" />
                <img src={rating} alt="" />
              </div>
            </div>
            <div className="w-full min-h-[372px] md:w-[350px] lg:w-[292px] border border-1 border-[#D7D7D7] rounded-[15px] p-3">
              <div className="w-full md:w-[325px] lg:w-[260px] h-[265px]  rounded-[15px]">
                <img src={frame19} alt="" className="w-full h-full cover" />
              </div>
              <div className="flex justify-between mb-3 mt-3">
                <p className="text-[#434343] text-[12px] font-[400]">
                  Desert King
                </p>
                <p className="text-[#434343] text-[12px] font-[700]">
                  1MBT per night
                </p>
              </div>
              <div className="flex justify-between mb-3">
                <p className="text-[#434343] text-[12px] font-[400]">
                  2345km away
                </p>
                <p className="text-[#434343] text-[12px] font-[400]">
                  available for 2weeks stay
                </p>
              </div>
              <div className="flex space-x-3 mb-3">
                <img src={rating} alt="" />
                <img src={rating} alt="" />
                <img src={rating} alt="" />
                <img src={rating} alt="" />
                <img src={rating} alt="" />
              </div>
            </div>
            <div className="w-full min-h-[372px] md:w-[350px] lg:w-[292px] border border-1 border-[#D7D7D7] rounded-[15px] p-3">
              <div className="w-full md:w-[325px] lg:w-[260px] h-[265px]  rounded-[15px]">
                <img src={frame18} alt="" className="w-full h-full cover" />
              </div>
              <div className="flex justify-between mb-3 mt-3">
                <p className="text-[#434343] text-[12px] font-[400]">
                  Desert King
                </p>
                <p className="text-[#434343] text-[12px] font-[700]">
                  1MBT per night
                </p>
              </div>
              <div className="flex justify-between mb-3">
                <p className="text-[#434343] text-[12px] font-[400]">
                  2345km away
                </p>
                <p className="text-[#434343] text-[12px] font-[400]">
                  available for 2weeks stay
                </p>
              </div>
              <div className="flex space-x-3 mb-3">
                <img src={rating} alt="" />
                <img src={rating} alt="" />
                <img src={rating} alt="" />
                <img src={rating} alt="" />
                <img src={rating} alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* ========================End= of==Grid box============================= */}
      </div>
    </section>
  );
};

export default Accomodations;
