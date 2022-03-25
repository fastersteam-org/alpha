import React from 'react';
import { Link } from 'gatsby';

import FasterLogo from '../assets/svgs/faster-logo.inline.svg';

const links = [
    {
        text: 'Events',
        uri: '/events',
    },
    {
        text: 'About',
        uri: '/about',
    },
];

const Header = () => (
    <header className="flex justify-between px-8 py-4 bg-slate-900">
        <div className="header-left">
            <FasterLogo className="w-44" />
        </div>
        <nav className="header-right">
            {links.map((link, index) => (
                <Link key={`${index}-${link.text}`} to={link.uri}>
                    {link.text}
                </Link>
            ))}
        </nav>
    </header>
);

Header.displayName = 'Header';
export default Header;
