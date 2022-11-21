import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MemberDescription from '../components/MemberDescription';
import { memberData } from '../data/mockMemberData';

const TeamPage = ({ pageContext: { teamPageData } }) => (
    //TODO[CHRIS FROM YSSA]: ^^ about page data will need to be changed to utilize member data
    <>
        <Header />
        <div className="relative bg-zinc-600">
            <div className="absolute inset-0">
                <GatsbyImage
                    className="h-full w-full object-cover"
                    image={teamPageData.heroImage.gatsbyImageData}
                    alt=""
                />
                <div
                    className="absolute inset-0 bg-zinc-600 mix-blend-multiply"
                    aria-hidden="true"
                />
            </div>
            <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold tracking-tight text-faster-green sm:text-5xl lg:text-6xl">
                    FASTER Members
                </h1>
                <p className="mt-6 max-w-3xl text-xl text-indigo-100">
                    Mattis amet hendrerit dolor, quisque lorem pharetra.
                    Pellentesque lacus nisi urna, arcu sociis eu. Orci vel
                    lectus nisl eget eget ut consectetur. Sit justo viverra non
                    adipisicing elit distinctio.
                </p>
            </div>
        </div>

        {/* MEMBER LISTINGS */}
        <div className="mx-2">
            {memberData.map((member) => (
                <MemberDescription
                    key={member.name}
                    name={member.name}
                    img={member.img}
                    role={member.role}
                    education={member.education}
                    companies={member.companies}
                    bio={member.bio}
                    speaking={member.speaking}
                />
            ))}
        </div>
        <Footer />
    </>
);

TeamPage.propTypes = {
    pageContext: PropTypes.shape({
        teamPageData: PropTypes.shape({
            heroImage: PropTypes.shape({
                gatsbyImageData: PropTypes.shape({}),
            }),
        }),
    }),
};

export default TeamPage;
