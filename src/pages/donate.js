import React from 'react';
import Layout from '../components/Layout';

const DonatePage = () => {
    return (
        <Layout>
            <main>
                <div className="container mx-auto px-5 py-5 sm:px-6 lg:px-8">
                    <div className="mx-auto bg-gray-50 px-14">
                        <h1 className="pb-10 pt-8">Your Donation</h1>
                        <p className="pb-5">
                            Thank you for your time and please consider making a
                            donation to FASTER here.
                        </p>
                        <p className="pb-5">
                            All funds will be used cover basic operational costs
                            of our majority volunteer organization, further
                            develop our key signature programs and major
                            executive initiatives.
                        </p>
                        <p className="pb-5">
                            Your investment in FASTER helps keep our community
                            events and initiatives running for our FASTER
                            components -- funds go directly back into the FASTER
                            and broader Filipinx American community. Your
                            donation supports the following expenses:
                        </p>
                        <p className="pb-3">
                            <li>
                                Recurring software and platform fees we use to
                                host our membership resources including Zoom,
                                online community database and small business and
                                high tech company directory.
                            </li>
                            <li>
                                Supporting part time staff dedicated to FASTER
                                Education (education component for K-12 and
                                undergraduate students and recent graduates
                                entering tech), FASTER PROs (current tech
                                professionals in the industry), and FASTER FRESH
                                Entrepreneurship (innovation component serving
                                Filipinx American high tech startup founders and
                                investors).
                            </li>
                            <li>
                                Lowering costs for community members with little
                                to no financial accessibility
                            </li>
                            <li>
                                Providing monetary honorariums to speakers,
                                teachers, practitioners, and other organizations
                                that teach, inspire, and support you and the
                                rest of the community.
                            </li>
                        </p>
                        <div className="mx-auto py-8 text-center">
                            <form
                                action="https://www.paypal.com/donate"
                                method="post"
                                target="_top"
                            >
                                <input
                                    type="hidden"
                                    name="hosted_button_id"
                                    value="9ZKVGFY9MKEWC"
                                />
                                <input
                                    type="image"
                                    src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif"
                                    border="0"
                                    name="submit"
                                    title="PayPal - The safer, easier way to pay online!"
                                    alt="Donate with PayPal button"
                                />
                                <img
                                    alt=""
                                    border="0"
                                    src="https://www.paypal.com/en_US/i/scr/pixel.gif"
                                    width="1"
                                    height="1"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
};

export default DonatePage;
