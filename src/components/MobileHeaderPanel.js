import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import { Popover, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import FasterLogo from '../assets/svgs/faster-logo.svg';
import PropTypes from 'prop-types';

const renderInnerItems = (mobileItems = []) =>
    mobileItems.map((item) => {
        return item.linkType === 'internal' ? (
            <Link
                key={item.name}
                to={item.href}
                className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
            >
                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-faster-green text-white">
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="ml-4 text-base font-medium text-gray-900">
                    {item.name}
                </div>
            </Link>
        ) : (
            <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
            >
                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-faster-green text-white">
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="ml-4 text-base font-medium text-gray-900">
                    {item.name}
                </div>
            </a>
        );
    });

const renderMobileLinks = (links) => {
    return (
        <div className="mt-6">
            <nav className="grid grid-cols-1 gap-7">
                {links.map((link) => {
                    if (link.navType === 'link') {
                        return (
                            <a
                                key={link.name}
                                href={link.href}
                                target="_blank"
                                rel="noreferrer"
                                className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                            >
                                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-faster-green text-white">
                                    <link.icon
                                        className="h-6 w-6"
                                        aria-hidden="true"
                                    />
                                </div>
                                <div className="ml-4 text-base font-medium text-gray-900">
                                    {link.name}
                                </div>
                            </a>
                        );
                    }

                    if ((link.navItems || []).length === 0) return;

                    return renderInnerItems(link.navItems);
                })}
            </nav>
        </div>
    );
};

// must be inserted inside a Popover component to work
const MobileHeaderPanel = ({ navItems }) => (
    <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
    >
        <Popover.Panel
            focus
            className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                    <div className="flex items-center justify-between">
                        <div className="h-12">
                            <Link to="/">
                                <FasterLogo />
                            </Link>
                        </div>
                        <div className="-mr-2">
                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-faster-green">
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                />
                            </Popover.Button>
                        </div>
                    </div>
                    {renderMobileLinks(navItems)}
                </div>
                {/* <div className="py-6 px-5">
                    <div>
                        <Link
                            href="/members"
                            className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-faster-green"
                        >
                            Join
                        </Link>
                        <p className="mt-6 text-center text-base font-medium text-gray-500">
                            Existing member?{' '} */}
                {/* @TODO Remove for actual authentication implementation */}
                {/* <span
                                to="/members"
                                className="text-faster-green cursor-pointer"
                                onClick={() =>
                                    alert('Sign in will be implemented later')
                                }
                            >
                                Sign in
                            </span>
                        </p>
                    </div>
                </div> */}
            </div>
        </Popover.Panel>
    </Transition>
);

MobileHeaderPanel.propTypes = {
    navItems: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            navItems: PropTypes.arrayOf(
                PropTypes.shape({
                    name: PropTypes.string,
                    description: PropTypes.string,
                    href: PropTypes.string,
                    icon: PropTypes.elementType,
                })
            ),
        })
    ),
};

export default MobileHeaderPanel;
