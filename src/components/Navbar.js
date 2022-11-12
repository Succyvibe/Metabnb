import { Link } from "react-router-dom";
import companyLogo from "../../src/imgs/logo.png";
const Navbar = ({ onToggle }) => {
  return (
    <nav className="container mx-auto pt-6">
      <div className="flex justify-between items-center">
        {/* logo */}
        <div className="pt-2">
          <img src={companyLogo} alt="logo" />
        </div>

        {/* menu items */}

        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="hover:text-purple-600 text-[#434343] text-[20px]"
          >
            Home
          </Link>
          <Link
            to="/accomodations"
            className="hover:text-purple-600 text-[#434343] text-[20px]"
          >
            Place to stay
          </Link>

          <Link
            to="/nft"
            className="hover:text-purple-600 text-[#434343] text-[20px]"
          >
            NFTs
          </Link>

          <Link
            to="/community"
            className="hover:text-purple-600 text-[#434343] text-[20px]"
          >
            Community
          </Link>
        </div>

        {/* CTA BTN */}

        <button
          onClick={onToggle}
          className=" hidden md:block p-3 px-6 pt-2 text-white bg-gradient-to-r from-pink-500 to-pink-500 rounded-[10px] baseline hover:bg-purple-400"
        >
          Connect wallet
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
