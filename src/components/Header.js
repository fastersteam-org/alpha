import React from 'react';
import { Link } from 'gatsby';

const links = [
    'home',
    'about',
    'blog',
];

const Header = () => (
    <header>
        {links.map(link => (<Link to={`/${link}`} />))}
    </header>
);

Header.displayName = 'Header';
export default Header;