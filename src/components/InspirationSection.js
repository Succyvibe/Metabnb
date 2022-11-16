import frame1 from "../../src/imgs/frame1.png";
import hero1 from "../../src/imgs/hero1.png";
import frame3 from "../../src/imgs/frame-3.png";
import frame4 from "../../src/imgs/frame4.png";
import frame5 from "../../src/imgs/frame5.png";
import frame6 from "../../src/imgs/frame6.png";
import frame7 from "../../src/imgs/frame7.png";
import frame8 from "../../src/imgs/frame8.png";
import heart from "../../src/imgs/heart.png";
import rating from "../../src/imgs/star.png";

const InspirationSection = () => {
  return (
    <section className="mb-20">
      <div className="lg:max-w-7xl mx-auto">
        <h1 className="text-center text-[30px] md:text-[48px] font-[700]">
          Inspiration for your next adventure
        </h1>

        {/* ===========================Grid box============================= */}
        <div className="lg:max-w-7xl mx-auto mt-10 px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-y-5 gap-x-5">
            <div className="w-full min-h-[372px] md:w-[350px] lg:w-[238px] xl:w-[292px] border border-1 border-[#D7D7D7] rounded-[15px] p-3">
              <div className="w-full md:w-[325px] lg:w-[212px] xl:w-[260px] h-[265px]  rounded-[15px] relative">
                <img src={frame1} alt="" className="w-full h-full cover" />
                <img
                  src={heart}
                  alt=""
                  className="absolute top-2 right-2 cursor-pointer"
                />
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
            <div className="w-full min-h-[372px] md:w-[350px] lg:w-[238px] xl:w-[292px] border border-1 border-[#D7D7D7] rounded-[15px] p-3">
              <div className="w-full md:w-[325px] lg:w-[212px] xl:w-[260px] h-[265px]  rounded-[15px]">
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
            <div className="w-full min-h-[372px]  md:w-[350px] lg:w-[238px] xl:w-[292px] border border-1 border-[#D7D7D7] rounded-[15px] p-3">
              <div className="w-full md:w-[325px] lg:w-[212px] xl:w-[260px] h-[265px]  rounded-[15px]">
                <img src={frame3} alt="" className="w-full h-full cover" />
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
            <div className="w-full min-h-[372px]  md:w-[350px] lg:w-[238px] xl:w-[292px] border border-1 border-[#D7D7D7] rounded-[15px] p-3">
              <div className="w-full md:w-[325px] lg:w-[212px] xl:w-[260px] h-[265px]  rounded-[15px]">
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
            <div className="w-full min-h-[372px]  md:w-[350px] lg:w-[238px] xl:w-[292px] border border-1 border-[#D7D7D7] rounded-[15px] p-3">
              <div className="w-full md:w-[325px] lg:w-[212px] xl:w-[260px] h-[265px]  rounded-[15px]">
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
            <div className="w-full min-h-[372px] md:w-[350px] lg:w-[238px] xl:w-[292px] border border-1 border-[#D7D7D7] rounded-[15px] p-3">
              <div className="w-full md:w-[325px] lg:w-[212px] xl:w-[260px] h-[265px]  rounded-[15px]">
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
            <div className="w-full min-h-[372px] md:w-[350px] lg:w-[238px] xl:w-[292px] border border-1 border-[#D7D7D7] rounded-[15px] p-3">
              <div className="w-full md:w-[325px] lg:w-[212px] xl:w-[260px] h-[265px]  rounded-[15px]">
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
            <div className="w-full min-h-[372px]  md:w-[350px] lg:w-[238px] xl:w-[292px] border border-1 border-[#D7D7D7] rounded-[15px] p-3">
              <div className="w-full md:w-[325px] lg:w-[212px] xl:w-[260px] h-[265px]  rounded-[15px]">
                <img src={frame8} alt="" className="w-full h-full cover" />
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

export default InspirationSection;
