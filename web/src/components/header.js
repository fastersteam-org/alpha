import { Link } from "gatsby";
import React from "react";
import CTALink from "./CTALink";
import { useToggle } from "../utilities/custom-hooks";
import FasterLogo from "./icon/faster-logo";
import HamburgerIcon from "./icon/hamburger";

const Header = ({ showNav, siteTitle, scrolled, navMenuItems = [], textWhite = true }) => {
  const [isNavVisible, toggleIsNavVisible] = useToggle();

  return (
  <nav className="w-full z-100 top-0 text-gray-900 bg-blue-100 py-6">
      <div className="w-full container px-3 mx-auto flex flex-wrap items-center justify-between">
        <div className="flex items-center">
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
              <ul className={`flex flex-col absolute top-full right-0 bg-blue-100 rounded-md overflow-hidden ${isNavVisible ? '' : 'hidden'}`}>
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
