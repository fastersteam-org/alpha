/* This example requires Tailwind CSS v2.0+ */
import React from 'react';
import { Link } from 'gatsby';
import { Popover } from '@headlessui/react';
import { MenuIcon } from '@heroicons/react/outline';
import HeaderDropdownLink from './HeaderDropdownLink';
import HeaderLink from './HeaderLink';
import MobileHeaderPanel from './MobileHeaderPanel';
import { navData } from '../data/navData';
import FasterLogo from '../assets/svgs/faster-logo.svg';

const renderDesktopLinks = (links) => {
    return links.map((link, index) => {
        if (link.navType === 'dropdown-link') {
            return (
                <HeaderDropdownLink
                    key={`${link.name}-${index}-desktop`}
                    linkData={link}
                />
            );
        }
        return (
            <HeaderLink key={`${link.name}-${index}-desktop`} linkData={link} />
        );
    });
};

const Header = () => (
    <Popover className="relative bg-white">
        <div className="flex justify-between items-center px-4 py-6 md:px-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1 h-12 md:h-14">
                <Link to="/">
                    <span className="sr-only">Workflow</span>
                    <FasterLogo />
                </Link>
            </div>

            {/* Desktop Links */}
            <Popover.Group as="nav" className="hidden md:flex space-x-10">
                {renderDesktopLinks(navData)}
            </Popover.Group>

            {/* Desktop auth flow buttons */}
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                {/* @TODO Add actual authentication functionality */}
                <span
                    // to="/members"
                    onClick={() => alert('Sign in will be implemented later')}
                    className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 cursor-pointer"
                >
                    Sign in
                </span>
                <Link
                    to="/members"
                    className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-faster-green"
                >
                    Join
                </Link>
            </div>

            {/* Mobile Menu Icon */}
            <div className="-mr-2 -my-2 md:hidden">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-faster-green">
                    <span className="sr-only">Open menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
            </div>
        </div>

        {/* Mobile Popup Panel */}
        <MobileHeaderPanel navItems={navData} />
    </Popover>
);

export default Header;
