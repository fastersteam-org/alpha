import React from 'react';

const Donate = () => {
    return (
        <main className="py-5 px-10 bg-slate-400 ">
            <div>
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
        </main>
    );
};

export default Donate;
