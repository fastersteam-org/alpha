import React from 'react';
import Layout from '../components/Layout';

const IndexPage = () => {
    return (
        <Layout>
            {/* Header Secton */}
            <div className="max-w-7xl mx-auto pt-8 px-4 sm:px-6 lg:px-20 text-center">
                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl uppercase">
                    Welcome to Faster
                </h2>
                <p className="mt-2.5 sm:mt-3 lg:mt-4 text-2xl text-gray-900 sm:text-3xl lg:text-4xl">
                    FILIPINX AMERICANS IN SCIENCE TECHNOLOGY ENGINEERING ARTS
                    AND MATHEMATICS
                </p>
            </div>

            {/* main image Section */}
            <div className="max-w-7xl pt-12 sm:pt-16 lg:pt-20 w-screen mx-auto">
                <div className="w-full mx-auto relative pb-[56.25%] bg-indigo-600">
                    <img
                        className="h-full w-full absolute"
                        src="https://tailwindui.com/img/component-images/cloud-illustration-indigo-400.svg"
                        alt=""
                    />
                </div>
            </div>

            {/* Landing Content Header */}
            <div className="max-w-7xl mx-auto pt-12 sm:pt-16 lg:pt-20 px-4 sm:px-6 lg:px-20">
                <h2 className="text-3xl font-bold text-faster-green sm:text-4xl lg:text-5xl">
                    We create, connect, and cultivate a movement of Filipinx
                    Americans in the U.S. tech ecosystem.
                </h2>
            </div>

            {/* About us Section */}
            <div className="max-w-7xl mx-auto pt-12 sm:pt-16 lg:pt-20 px-4 sm:px-6 lg:px-20">
                <h3 className="text-lg font-bold text-faster-green sm:text-xl lg:text-2xl">
                    About Us
                </h3>
                <p className="text-lg sm:text-xl lg:text-2xl">
                    Established in 2015, FASTER is the only multi-stakeholder
                    national 501(c)(3) non-partisan non-profit organization
                    dedicated to advancing excellence, equality, and justice
                    primarily serving the FilipinX American community in the
                    U.S. tech ecosystem.
                </p>
            </div>

            {/* Our Mission */}
            <div className="max-w-7xl mx-auto pt-6 sm:pt-8 lg:pt-12 pb-20 px-4 sm:px-6 lg:px-20">
                <h3 className="text-lg font-bold text-faster-green sm:text-xl lg:text-2xl">
                    Our Mission
                </h3>
                <p className="text-lg sm:text-xl lg:text-2xl">
                    We create, connect, cultivate a multigenerational movement
                    of Filipinx Americans in the Science Technology Engineering
                    Arts and Mathematics working in the science and technology
                    ecosystem (inclusive of intersection of arts, entertainment,
                    media industries across all verticals) that continues to
                    build upon the legacy of historical contribution our ethnic
                    community in the United States and beyond.
                </p>
            </div>
        </Layout>
    );
};

export default IndexPage;
