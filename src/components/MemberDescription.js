import React from 'react';
import PropTypes from 'prop-types';

const MemberDescription = ({
    name,
    role,
    img,
    education,
    companies,
    bio,
    speaking,
}) => {
    return (
        <div className="overflow-hidden bg-white">
            <div className="relative mx-auto max-w-6xl py-14 px-4 sm:px-6 lg:px-8">
                <div className="mt-7 lg:grid gap-0 lg:grid-cols-2">
                    <div className="relative mt-4 lg:ml-8 md:-ml-12 lg:col-start-1 lg:row-start-1">
                        <div className="relative mx-auto max-w-prose text-base lg:max-w-none">
                            <figure>
                                <img
                                    className="rounded-lg object-cover object-center shadow-lg"
                                    src={img}
                                    alt="Whitney leaning against a railing on a downtown street"
                                    width={320}
                                    height={300} //TODO[CHRIS FROM YSSA]: need to edit image sizes
                                />
                            </figure>
                        </div>
                        <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
                            <div>
                                <h3 className="mt-2 font-bold text-faster-green sm:text-2xl">
                                    {name}
                                </h3>
                                <h4>{role}</h4>
                                <h4 className="mt-5 font-bold text-faster-green">
                                    EDUCATION
                                </h4>
                                <h5>
                                    {education?.map((school) => (
                                        <h5 key={school}>{school}</h5>
                                    ))}
                                </h5>
                                <h4 className="mt-2 font-bold text-faster-green">
                                    COMPANIES
                                </h4>
                                {companies?.map((company) => (
                                    <h5 key={company}>{company}</h5>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="mr-8 lg:-ml-24 md:ml-2 sm:ml-2 mt-2">
                        <h3 className="font-bold leading-8 text-faster-green sm:text-2xl">
                            BIO
                        </h3>
                        <div className="mt-5 prose prose-indigo text-gray-500 lg:col-start-2 lg:row-start-2 lg:max-w-none">
                            <p>{bio}</p>
                        </div>
                        <h3 className="mt-4 font-bold leading-8 text-black sm:text-2xl">
                            Speaking
                        </h3>
                        <div className="mt-4 prose prose-indigo text-gray-500 lg:col-start-2 lg:row-start-2 lg:max-w-none">
                            <p>{speaking}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

MemberDescription.propTypes = {
    name: PropTypes.string,
    role: PropTypes.string,
    img: PropTypes.string,
    education: PropTypes.array,
    companies: PropTypes.array,
    bio: PropTypes.string,
    speaking: PropTypes.string,
};

export default MemberDescription;
