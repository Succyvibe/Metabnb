// import { useState } from "react";
import { Link } from "react-router-dom";
// import { FaBars } from "react-icons/fa";
import companyLogo from "../../src/imgs/logo.png";
// const Navbar = ({ onToggle }) => {
//   const [navbar, setNavbar] = useState(false);
//   return (
//     <nav className="container mx-auto pt-6">
//       <div className="flex justify-between items-center px-3 md:px-0">
//         {/* logo */}
//         <div className="pt-2">
//           <img
//             src={companyLogo}
//             alt="logo"
//             className="w-[150px] md:w-[188.1px]"
//           />
//         </div>

//         {/* menu items */}

//         <div className="hidden md:flex space-x-6">
//           <Link
//             to="/"
//             className="hover:text-purple-600 text-[#434343] text-[20px]"
//           >
//             Home
//           </Link>
//           <Link
//             to="/accomodations"
//             className="hover:text-purple-600 text-[#434343] text-[20px]"
//           >
//             Place to stay
//           </Link>

//           <Link
//             to="/nft"
//             className="hover:text-purple-600 text-[#434343] text-[20px]"
//           >
//             NFTs
//           </Link>

//           <Link
//             to="/community"
//             className="hover:text-purple-600 text-[#434343] text-[20px]"
//           >
//             Community
//           </Link>
//         </div>

//         {/* CTA BTN */}

//         <button
//           onClick={onToggle}
//           className="connectBtn hidden md:block p-3 w-[170px] h-[48px] text-white bg-gradient-to-r from-pink-500 to-pink-500 rounded-[10px] baseline hover:bg-purple-400"
//         >
//           Connect wallet
//         </button>
//         <div className="block md:hidden">
//           <FaBars className="text-[30px] font-[400]" />
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import { useState } from "react";

export default function NavBar({ onToggle }) {
  const [navbar, setNavbar] = useState(false);

  return (
    // <nav className="w-full  shadow">
    //   <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 md:justify-between">
    //     <div>
    //       <div className="flex items-center justify-between py-3 md:py-5 md:block">
    //         {/* logo */}
    //         <div className="pt-2">
    //           <img
    //             src={companyLogo}
    //             alt="logo"
    //             className="w-[150px] md:w-[188.1px]"
    //           />
    //         </div>

    //         <div className="md:hidden">
    //           <button
    //             className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
    //             onClick={() => setNavbar(!navbar)}
    //           >
    //             {navbar ? (
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 className="w-6 h-6"
    //                 viewBox="0 0 20 20"
    //                 fill="currentColor"
    //               >
    //                 <path
    //                   fillRule="evenodd"
    //                   d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
    //                   clipRule="evenodd"
    //                 />
    //               </svg>
    //             ) : (
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 className="w-6 h-6"
    //                 fill="none"
    //                 viewBox="0 0 24 24"
    //                 stroke="currentColor"
    //                 strokeWidth={2}
    //               >
    //                 <path
    //                   strokeLinecap="round"
    //                   strokeLinejoin="round"
    //                   d="M4 6h16M4 12h16M4 18h16"
    //                 />
    //               </svg>
    //             )}
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //     <div>
    //       <div
    //         className={`flex flex-col pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
    //           navbar ? "block" : "hidden"
    //         }`}
    //       >
    //         {/* <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0"> */}

    //         {/* menu items */}

    //         <div className="md:flex space-x-6">
    //           <Link
    //             to="/"
    //             className="hover:text-purple-600 text-[#434343] text-[20px]"
    //           >
    //             Home
    //           </Link>
    //           <Link
    //             to="/accomodations"
    //             className="hover:text-purple-600 text-[#434343] text-[20px]"
    //           >
    //             Place to stay
    //           </Link>
    //           <Link
    //             to="/nft"
    //             className="hover:text-purple-600 text-[#434343] text-[20px]"
    //           >
    //             NFTs
    //           </Link>
    //           <Link
    //             to="/community"
    //             className="hover:text-purple-600 text-[#434343] text-[20px]"
    //           >
    //             Community
    //           </Link>
    //         </div>
    //         {/* CTA BTN */}

    //         {/* </ul> */}
    //       </div>
    //     </div>
    //     <button
    //       onClick={onToggle}
    //       className="connectBtn hidden md:block p-3 w-[170px] h-[48px] text-white bg-gradient-to-r from-pink-500 to-pink-500 rounded-[10px] baseline hover:bg-purple-400"
    //     >
    //       Connect wallet
    //     </button>
    //   </div>
    // </nav>

    <nav className="w-full bg-white shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            {/* logo */}
            <Link to="/" className="pt-2">
              <img
                src={companyLogo}
                alt="logo"
                className="w-[150px] md:w-[188.1px]"
              />
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
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
            </ul>

            <div className="mt-3 space-y-2  md:inline-block">
              {/* <a
                href="javascript:void(0)"
                className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
              >
                Sign in
              </a>
              <a
                href="javascript:void(0)"
                className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
              >
                Sign up
              </a> */}

              <button
                onClick={onToggle}
                className="connectBtn w-full  md:hidden p-3  h-[48px] text-white bg-gradient-to-r from-pink-500 to-pink-500 rounded-[10px] baseline hover:bg-purple-400"
              >
                Connect wallet
              </button>
            </div>
          </div>
        </div>
        <div className="hidden space-x-2 md:inline-block">
          <button
            onClick={onToggle}
            className="connectBtn hidden md:block p-3 w-[170px] h-[48px] text-white bg-gradient-to-r from-pink-500 to-pink-500 rounded-[10px] baseline hover:bg-purple-400"
          >
            Connect wallet
          </button>
        </div>
      </div>
    </nav>
  );
}
