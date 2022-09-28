import React from 'react';
import { Link } from 'gatsby';
import FacebookLogo from '../assets/svgs/facebook-logo.svg';
import InstagramLogo from '../assets/svgs/instagram-logo.svg';
import TwitterLogo from '../assets/svgs/twitter-logo.svg';
import GithubLogo from '../assets/svgs/github-logo.svg';
import LinkedinLogo from '../assets/svgs/linkedin-logo.svg';

const navigation = {
    join: {
        name: 'Join',
        items: [
            { name: 'FASTER Education', href: '/join/EDU' },
            { name: 'FASTER PROS', href: '/join/PROS' },
            { name: 'FASTER FRESH', href: '/join/FRESH' },
        ],
    },
    archive: {
        name: 'Archive',
        items: [
            // To be coded
            // { name: 'Speakers', href: '#' },
            { name: 'Events', href: '/fastercon' },
        ],
    },
    social: {
        name: 'Social',
        items: [
            { name: 'Twitter', href: 'https://twitter.com/fastersteam/' },
            // To be coded
            { name: 'Facebook', href: 'https://www.facebook.com/fastersteam/' },
            {
                name: 'Instagram',
                href: 'https://www.instagram.com/fastersteam/',
            },
            {
                name: 'YouTube',
                href: 'https://www.youtube.com/channel/UCVCx2UV-Ubkk2YJT0BQwhkw',
            },
            {
                name: 'Meetup',
                href: 'https://www.meetup.com/faster-bay-area/',
            },
            // { name: 'Slack', href: '#' },
            // { name: 'Discord', href: '#' },
        ],
    },
    // about: {
    //     name: 'About',
    //     // Rip this out and just make this a link to /about
    //     items: [
    //         { name: 'Mission', href: '#' },
    //         { name: 'Team', href: '#' },
    //     ],
    // },
    socialIcons: [
        {
            name: 'Facebook',
            href: 'https://www.facebook.com/fastersteam',
            icon: FacebookLogo,
        },
        {
            name: 'Instagram',
            href: 'https://www.instagram.com/fastersteam',
            icon: InstagramLogo,
        },
        {
            name: 'Twitter',
            href: 'https://twitter.com/fastersteam',
            icon: TwitterLogo,
        },
        {
            name: 'GitHub',
            href: 'https://github.com/fastersteam-org',
            icon: GithubLogo,
        },
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/company/faster-steam/',
            icon: LinkedinLogo,
        },
    ],
};

const Footer = () => (
    <footer className="bg-gray-800" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
            Footer
        </h2>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
            <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                <div className="grid grid-cols-2 gap-8 xl:col-span-2">
                    <div className="md:grid md:grid-cols-2 md:gap-8">
                        <div>
                            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                                {navigation.join.name}
                            </h3>
                            <ul role="list" className="mt-4 space-y-4">
                                {navigation.join.items.map((item, index) => (
                                    <li key={`${item.name}-${index}`}>
                                        <Link
                                            to={item.href}
                                            className="text-base text-gray-300 hover:text-white"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mt-12 md:mt-0">
                            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                                {navigation.archive.name}
                            </h3>
                            <ul role="list" className="mt-4 space-y-4">
                                {navigation.archive.items.map((item, index) => (
                                    <li key={`${item.name}-${index}`}>
                                        <Link
                                            to={item.href}
                                            className="text-base text-gray-300 hover:text-white"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="md:grid md:grid-cols-2 md:gap-8">
                        <div>
                            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                                {navigation.social.name}
                            </h3>
                            <ul role="list" className="mt-4 space-y-4">
                                {navigation.social.items.map((item, index) => (
                                    <li key={`${item.name}-${index}`}>
                                        <a
                                            href={item.href}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-base text-gray-300 hover:text-white"
                                        >
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* <div className="mt-12 md:mt-0">
                            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                                {navigation.about.name}
                            </h3>
                            <ul role="list" className="mt-4 space-y-4">
                                {navigation.about.items.map((item) => (
                                    <li key={`${item.name}-${index}`}>
                                        <Link
                                            to={item.href}
                                            className="text-base text-gray-300 hover:text-white"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div> */}
                    </div>
                </div>
                <div className="mt-8 xl:mt-0">
                    <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                        Subscribe to our newsletter
                    </h3>
                    <p className="mt-4 text-base text-gray-300">
                        The latest news, articles, and resources, sent to your
                        inbox weekly.
                    </p>
                    <form className="mt-4 sm:flex sm:max-w-md">
                        {/* <label htmlFor="email-address" className="sr-only">
                            Email address
                        </label>
                        <input
                            type="email"
                            name="email-address"
                            id="email-address"
                            autoComplete="email"
                            required
                            className="appearance-none min-w-0 w-full bg-white border border-transparent rounded-md py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400"
                            placeholder="Enter your email"
                        /> */}
                        <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:ml-0 sm:flex-shrink-0">
                            <a
                                href="https://bit.ly/FASTERSUBS"
                                target="_blank"
                                rel="noreferrer"
                                className="w-full bg-faster-dark-green border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-faster-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-faster-green"
                            >
                                Subscribe
                            </a>
                        </div>
                    </form>
                </div>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
                <div className="flex space-x-6 md:order-2">
                    {navigation.socialIcons.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-400 hover:text-gray-300"
                        >
                            <span className="sr-only">{item.name}</span>
                            <item.icon className="h-6 w-6" aria-hidden="true" />
                        </a>
                    ))}
                </div>
                <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
                    &copy; FASTER - Filipinx Americans in STEAM. All rights
                    reserved.
                </p>
            </div>
        </div>
    </footer>
);

Footer.displayName = 'Footer';
export default Footer;
