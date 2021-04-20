import { Link } from "gatsby";
import React from "react";

const Footer = ({ siteTitle }) => (
  <footer className="bg-white">
    <div className="container mx-auto  px-8">
      <div className="w-full flex flex-col md:flex-row py-6">
        <div className="flex-1 mb-6">
          <a
            className="text-orange-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
            href="#"
          >
            <svg
              className="h-8 fill-current inline"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512.005 512.005"
            >
              <rect
                fill="#2a2a31"
                x="16.539"
                y="425.626"
                width="479.767"
                height="50.502"
                transform="matrix(1,0,0,1,0,0)"
                fill="rgb(0,0,0)"
              />
              <path
                className="plane-take-off"
                d=" M 510.7 189.151 C 505.271 168.95 484.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z "
              />
            </svg>{" "}
            {siteTitle}
          </a>
        </div>

        <div className="flex-1">
          <p className="uppercase text-gray-500 md:mb-6">Join</p>
          <ul className="list-reset mb-6">
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <a href="http://bit.ly/FASTERFUNK21">
                <span className="hover:underline text-gray-800 hover:text-orange-500">
                  FASTER Education
                </span>
              </a>
            </li>
          <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <a href="http://bit.ly/FASTERPROS21J">
                <span className="hover:underline text-gray-800 hover:text-orange-500">
                  FASTER PROS
                </span>
              </a>
            </li>
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <a href="http://bit.ly/FASTERFRESHMt">
                <span className="hover:underline text-gray-800 hover:text-orange-500">
                  FASTER FRESH
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <p className="uppercase text-gray-500 md:mb-6">Archive</p>
          <ul className="list-reset mb-6">
          <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <a 
              href=""><span className="no-underline hover:underline text-gray-800 hover:text-orange-500">
                Speakers
              </span>
              </a>
            </li>
          <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <a 
              href="https://bit.ly/FASTERGCalendarPub"><span className="no-underline hover:underline text-gray-800 hover:text-orange-500">
                Events
              </span>
              </a>
            </li>
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <a 
              href="https://github.com/fastersteam/fastersv.github.io/tree/master/archive"><span className="no-underline hover:underline text-gray-800 hover:text-orange-500">
                Past FASTERCONs
              </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <p className="uppercase text-gray-500 md:mb-6">Social</p>
          <ul className="list-reset mb-6">
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="https://twitter.com/fastersteam"
                className="no-underline hover:underline text-gray-800 hover:text-orange-500"
              >
                Twitter
              </a>
            </li>
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="https://www.linkedin.com/company/faster-steam/"
                className="no-underline hover:underline text-gray-800 hover:text-orange-500"
              >
                Linkedin
              </a>
            </li>
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="https://www.facebook.com/fastersteam"
                className="no-underline hover:underline text-gray-800 hover:text-orange-500"
              >
                Facebook
              </a>
            </li>
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="https://www.instagram.com/fastersteam"
                className="no-underline hover:underline text-gray-800 hover:text-orange-500"
              >
                Instagram
              </a>
            </li>
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="https://www.youtube.com/channel/UCVCx2UV-Ubkk2YJT0BQwhkw"
                className="no-underline hover:underline text-gray-800 hover:text-orange-500"
              >
                YouTube
              </a>
            </li>
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="https://faster-steam.slack.com"
                className="no-underline hover:underline text-gray-800 hover:text-orange-500"
              >
                Slack
              </a>
            </li>
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="https://discord.gg/TZ4Y93d2SY"
                className="no-underline hover:underline text-gray-800 hover:text-orange-500"
              >
                Discord
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <p className="uppercase text-gray-500 md:mb-6">About</p>
          <ul className="list-reset mb-6">
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <Link
                to="/blog"
                className="no-underline hover:underline text-gray-800 hover:text-orange-500"
              >
                Blog
              </Link>
            </li>
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <Link
                to="/media"
                className="no-underline hover:underline text-gray-800 hover:text-orange-500"
              >
                Media
              </Link>
            </li>
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="mailto:contactus@faser-steam.org"
                className="no-underline hover:underline text-gray-800 hover:text-orange-500"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
