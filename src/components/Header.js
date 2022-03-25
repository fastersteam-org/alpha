import React from 'react';
import { Link } from 'gatsby';

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
    <header>
        {links.map((link, index) => (
            <Link key={`${index}-${link.text}`} to={link.uri}>
                {link.text}
            </Link>
        ))}
    </header>
);

Header.displayName = 'Header';
export default Header;
