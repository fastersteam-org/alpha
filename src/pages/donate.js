import React from 'react';
import Layout from '../components/Layout';

const DonatePage = () => {
    return (
        <Layout>
            <main>
                <div className="container mx-auto px-5 py-5 sm:px-6 lg:px-8">
                    <h1 className="mx-auto">Your Donation</h1>
                    <p>
                        Thank you for your time and please consider making a
                        donation to FASTER here.
                    </p>
                    <p>
                        As a national 501(c)(3) non-profit, we will be able to
                        take these funds to cover basic operational costs of our
                        majority volunteer organization, further develop our key
                        signature programs and major executive initiatives.
                    </p>
                    <p>All donations are tax deductible (EIN: 84-2377276).</p>
                    <p>
                        Your investment in FASTER helps keep our community
                        events and initiatives running for our FASTER components
                        -- funds go directly back into the FASTER and broader
                        Filipinx American community.
                    </p>
                    <p>
                        Your donation supports Software and platform fees we use
                        to host our membership frameworking including Zoom,
                        online community database and small business and high
                        tech company directory.
                        <br></br> Supporting part time staff dedicated to FASTER
                        Education (education component for K-12 and
                        undergraduate students and recent graduates entering
                        tech), FASTER PROs (current tech professionals in the
                        industry), and FASTER FRESH Entrepreneurship (innovation
                        component serving Filipinx American high tech startup
                        founders and investors).
                    </p>
                    <p>
                        Lowering costs for community members with little to no
                        financial accessibility. <br></br>
                        Providing monetary honorariums to speakers, teachers,
                        practitioners,and other organizations that teach,
                        inspire, and support you and the rest of the community.
                    </p>
                    <div className="mx-auto">
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
                                src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
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
            </main>
        </Layout>
    );
};

export default DonatePage;
