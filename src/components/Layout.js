import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
    <>
        <Header />
        <main>
            {children}
        </main>
        <Footer />
    </>
);


Layout.displayName = 'Layout';
export default Layout;