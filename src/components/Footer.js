import companyLogo from "../../src/imgs/Group.svg";
import facebookIcon from "../../src/imgs/facebook-icon.png";
import instagramIcon from "../../src/imgs/instagram-icon.png";
import twitterIcon from "../../src/imgs/twitter-icon.png";
import copyrightIcon from "../../src/imgs/copyright.png";
const Footer = () => {
  return (
    <footer className="bg-[#1D1D1E]">
      <div className="container mx-auto py-16 px-8 md:px-0">
        <div className="flex justify-between">
          <div className="flex flex-col space-y-10 md:space-y-12">
            <img
              src={companyLogo}
              alt="logo"
              className="w-[100px] md:w-[233px]"
            />
            <div className="flex space-x-3">
              <img src={facebookIcon} alt="" />
              <img src={instagramIcon} alt="" />
              <img src={twitterIcon} alt="" />
            </div>
            <div className="flex space-x-3">
              <img src={copyrightIcon} alt="" />
              <p className="text-white text-[10px] md:text-[14px]">
                2022 Metabnb
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-3 text-[10px] md:text-[14px] text-[#F1F3F9]">
            <p className="font-[700] text-[14px] md:text-[18px] text-white">
              Company
            </p>
            <p>NFT</p>
            <p>Tokens</p>
            <p>Landlords</p>
            <p>Discord</p>
          </div>
          <div className="flex flex-col space-y-3 text-[10px] md:text-[14px] text-[#F1F3F9]">
            <p className="font-[700] text-[14px] md:text-[18px] text-white">
              Company
            </p>
            <p>NFT</p>
            <p>Tokens</p>
            <p>Landlords</p>
            <p>Discord</p>
          </div>
          <div className="flex flex-col space-y-3 text-[10px] md:text-[14px] text-[#F1F3F9]">
            <p className="font-[700] text-[14px] md:text-[18px] text-white">
              Company
            </p>
            <p>NFT</p>
            <p>Tokens</p>
            <p>Landlords</p>
            <p>Discord</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
