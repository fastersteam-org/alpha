import { Link } from "gatsby";
import React from "react";

const Footer = ({ siteTitle }) => (
  <footer className="bg-white">
    <div className="container mx-auto  px-8">
      <div className="w-full flex flex-col md:flex-row py-6">
        {/* <div className="flex-1 mb-6">
          <a
            className="text-blue-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
            href="#"
          >
            {siteTitle}
          </a>
        </div> */}

        <div className="flex-1">
          <p className="uppercase text-gray-500 md:mb-6">Join</p>
          <ul className="list-reset mb-6">
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <Link
                to="/education"
                className="no-underline hover:underline text-gray-800 hover:text-FasterGreen"
              >
               FASTER Education 
              </Link>  
            </li>
          <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <a href="http://bit.ly/FASTERPROS21J">
                <span className="hover:underline text-gray-800 hover:text-FasterGreen">
                  FASTER PROS
                </span>
              </a>
            </li>
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <a href="http://bit.ly/FASTERFRESHMt">
                <span className="hover:underline text-gray-800 hover:text-FasterGreen">
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
              href=""><span className="no-underline hover:underline text-gray-800 hover:text-FasterGreen">
                Speakers
              </span>
              </a>
            </li>
          <li className="mt-2 inline-block mr-2 md:block md:mr-0"> 
              <span className="no-underline hover:underline text-gray-800 hover:text-FasterGreen">
                <Link
                to="/events"
                className="no-underline hover:underline text-gray-800 hover:text-FasterGreen"
              > 
               Events
              </Link> 
              </span> 
            </li>
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <a 
                href="https://github.com/fastersteam/fastersv.github.io/tree/master/archive"
              >
                <span className="no-underline hover:underline text-gray-800 hover:text-FasterGreen">
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
                className="no-underline hover:underline text-gray-800 hover:text-FasterGreen"
              >
                Twitter
              </a>
            </li>
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="https://www.linkedin.com/company/faster-steam/"
                className="no-underline hover:underline text-gray-800 hover:text-FasterGreen"
              >
                Linkedin
              </a>
            </li>
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="https://www.facebook.com/fastersteam"
                className="no-underline hover:underline text-gray-800 hover:text-FasterGreen"
              >
                Facebook
              </a>
            </li>
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="https://www.instagram.com/fastersteam"
                className="no-underline hover:underline text-gray-800 hover:text-FasterGreen"
              >
                Instagram
              </a>
            </li>
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="https://www.youtube.com/channel/UCVCx2UV-Ubkk2YJT0BQwhkw"
                className="no-underline hover:underline text-gray-800 hover:text-FasterGreen"
              >
                YouTube
              </a>
            </li>
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="https://faster-steam.slack.com"
                className="no-underline hover:underline text-gray-800 hover:text-FasterGreen"
              >
                Slack
              </a>
            </li>
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="https://discord.gg/TZ4Y93d2SY"
                className="no-underline hover:underline text-gray-800 hover:text-FasterGreen"
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
                className="no-underline hover:underline text-gray-800 hover:text-FasterGreen"
              >
                Blog
              </Link>
            </li>
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <Link
                to="/media"
                className="no-underline hover:underline text-gray-800 hover:text-FasterGreen"
              >
                Media
              </Link>
            </li>
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="mailto:contactus@faser-steam.org"
                className="no-underline hover:underline text-gray-800 hover:text-FasterGreen"
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
