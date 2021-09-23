import { Link } from "gatsby";
import React from "react";
import CTALink from "./CTALink";
import { useToggle } from "../utilities/custom-hooks";
import FasterLogo from "./icon/faster-logo";
import HamburgerIcon from "./icon/hamburger";

const Header = ({ showNav, siteTitle, scrolled, navMenuItems = [], textWhite = true }) => {
  // let headerClass = "fixed w-full z-30 top-0 text-white";
  // headerClass += scrolled ? " bg-white shadow" : "";

  // let navActionClass =
  //   "mx-auto lg:mx-0 hover:underline font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75";
  // navActionClass += !textWhite || !scrolled ? " bg-white text-gray-800" : "";
  // navActionClass += textWhite || scrolled ? " gradient text-white" : "";

  // let navContentClass =
  //   "w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 text-black p-4 lg:p-0 z-20";
  // navContentClass += !textWhite || !scrolled ? " lg:bg-transparent bg-gray-100" : "";
  // navContentClass += textWhite || scrolled ? " bg-white" : "";

  // let titleClass = "toggleColour no-underline hover:no-underline font-bold text-2xl lg:text-4xl";
  // titleClass += !textWhite || scrolled ? " text-gray-800" : "";
  // titleClass += textWhite || !scrolled ? " text-white" : "";

  // return (
  //   <nav id="header" className={headerClass}>
  //     <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        // <div className="pl-4 flex items-center">
        //   <Link id="siteTitle" className={titleClass} to="/">
        //     {siteTitle}
        //   </Link>
        // </div>

  //       {showNav && navMenuItems && (
  //         <div className={navContentClass} id="nav-content">
  //           <ul className="list-reset lg:flex justify-end flex-1 items-center">
  //             {navMenuItems.map((i, index) => (
  //               <li key={`cta-${index}`} className="mr-3">
  //                 <CTALink {...i} buttonActionClass={navActionClass} />
  //               </li>
  //             ))}
  //           </ul>
  //         </div>
  //       )}
  //     </div>

  //     <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
  //   </nav>
  // );
// bg color of nav: rgba(60, 100, 177, 1)

  const [isNavVisible, toggleIsNavVisible] = useToggle();

  console.log('is the nav visible', isNavVisible);
  return (
  <nav className="w-full z-100 top-0 text-gray-900 bg-blue-100 px-4 py-6">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between">
        <div className="pl-4 flex items-center">
          <Link id="siteTitle" to="/" style={{width: "140px"}}>
            <FasterLogo svgTitle={siteTitle}/>
          </Link>
        </div>
        {showNav && navMenuItems && (
          <div className="relative text-black z-20">
            <button onClick={toggleIsNavVisible} style={{ fontSize: '1.75rem', outline: 'none' }}>
              <HamburgerIcon />
            </button>
            {(
              <ul className="flex flex-col absolute top-full right-0 bg-blue-100 rounded-md overflow-hidden">
                {navMenuItems.map((menuItem, index) => (
                  <li key={`cta-${index}`}>
                    <CTALink {...menuItem} buttonActionClass="w-full px-8 pt-2 last:pb-2 uppercase font-bold text-base"></CTALink>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </nav>
  )
};

export default Header;
