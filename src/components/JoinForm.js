import React from 'react';
// import { useFormik } from 'formik';
/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export default function JoinForm() {
    // const formik = useFormik({
    //     initialValues: {
    //         firstName: '',
    //         lastName: '',
    //         pronouns: '',
    //         birthDate: '',
    //         ethnicity: '',
    //         generation: '',
    //         email: '',
    //         location: '',
    //         phone: '',
    //         education: {
    //             school: '',
    //             field: '',
    //         },
    //         career: {
    //             role: '',
    //             company: '',
    //             industry: [],
    //             linkedinUrl: '',
    //         },
    //     },
    // });

    return (
        <>
            <form className="space-y-8">
                <div>
                    <h2 className="text-xl tracking-tight font-extrabold text-gray-900 sm:text-2xl md:text-3xl">
                        Welcome! Tell Us About Yourself...
                    </h2>
                    <p className=" max-w-md text-base text-gray-500 sm:text-lg md:text-xl md:max-w-3xl">
                        Tell us about yourself so we can create your personal
                        profile and tailor connections and opportunities to help
                        you grow.
                    </p>
                </div>
                <div className="grid grid-cols-2">
                    <div>
                        <h2 className="text-faster-green text-2xl font-bold ">
                            General
                        </h2>
                    </div>
                    <div>
                        <h2 className="text-faster-green text-2xl font-bold">
                            Profile Image
                        </h2>
                    </div>
                </div>
            </form>
        </>
    );
}
