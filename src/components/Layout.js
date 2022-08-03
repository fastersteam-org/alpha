import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';

import './layout.scss';

const Layout = ({ children }) => (
    <>
        <Header />
        <main className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            {children}
        </main>
        <Footer />
    </>
);

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

Layout.displayName = 'Layout';
export default Layout;
