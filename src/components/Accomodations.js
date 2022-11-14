import hero1 from "../../src/imgs/hero1.png";
import rating from "../../src/imgs/star.png";
import setting from "../../src/imgs/setting-5.png";
import DropDown from "./DropDown";

const Accomodations = () => {
  return (
    <section className="my-20">
      <div className="container mx-auto px-4">
        <div className="hidden list-none md:flex justify-between items-center text-[20px] font-[400]">
          <li>Restaurant</li>
          <li>Cottage</li>
          <li>Castle</li>
          <li>Fastast City</li>
          <li>Beach</li>
          <li>Cabins</li>
          <li>Off-grid</li>
          <li>Farm</li>
          <div className="border border-2 border-[#B4B4B4] w-[161px] h-[48px] flex justify-between items-center rounded-[8px] px-3">
            <p>Location</p>
            <div>
              <img src={setting} alt="" />
            </div>
          </div>
        </div>
        <DropDown />

        {/* ===========================Grid box============================= */}
        <div className="md:w-[1240px] mx-auto mt-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-y-5">
            <div className="w-full min-h-[372px] md:w-[292px] border border-1 border-[#D7D7D7] rounded-[15px] p-3">
              <div className="w-full md:w-[260px] h-[265px]  rounded-[15px]">
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
            <div className="w-full min-h-[372px] md:w-[292px] border border-1 border-[#D7D7D7] rounded-[15px] p-3">
              <div className="w-full md:w-[260px] h-[265px]  rounded-[15px]">
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
            <div className="w-full min-h-[372px] md:w-[292px] border border-1 border-[#D7D7D7] rounded-[15px] p-3">
              <div className="w-full md:w-[260px] h-[265px]  rounded-[15px]">
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
            <div className="w-full min-h-[372px] md:w-[292px] border border-1 border-[#D7D7D7] rounded-[15px] p-3">
              <div className="w-full md:w-[260px] h-[265px]  rounded-[15px]">
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
            <div className="w-full min-h-[372px] md:w-[292px] border border-1 border-[#D7D7D7] rounded-[15px] p-3">
              <div className="w-full md:w-[260px] h-[265px]  rounded-[15px]">
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
            <div className="w-full min-h-[372px] md:w-[292px] border border-1 border-[#D7D7D7] rounded-[15px] p-3">
              <div className="w-full md:w-[260px] h-[265px]  rounded-[15px]">
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
            <div className="w-full min-h-[372px] md:w-[292px] border border-1 border-[#D7D7D7] rounded-[15px] p-3">
              <div className="w-full md:w-[260px] h-[265px]  rounded-[15px]">
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
            <div className="w-full min-h-[372px] md:w-[292px] border border-1 border-[#D7D7D7] rounded-[15px] p-3">
              <div className="w-full md:w-[260px] h-[265px]  rounded-[15px]">
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
          </div>
        </div>
        {/* ========================End= of==Grid box============================= */}
      </div>
    </section>
  );
};

export default Accomodations;
