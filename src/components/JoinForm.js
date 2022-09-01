import React from 'react';
import joinFields from '../data/join-fields.json';

// import { useFormik } from 'formik';

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
                <div className="space-y-8">
                    <div>
                        <h2 className="text-faster-green text-2xl font-bold border-b-faster-green border-b-2 pb-0.5">
                            General
                        </h2>
                        <div className="grid grid-cols-2 gap-x-10 mt-0">
                            <div className="col-span-1 mt-3">
                                <label
                                    htmlFor="first-name"
                                    className="block text-base font-medium text-gray-700"
                                >
                                    First Name*
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="shadow-sm focus:ring-faster-green focus:border-faster-green block w-full sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>

                            <div className="col-span-1 mt-3">
                                <label
                                    htmlFor="last-name"
                                    className="block text-base font-medium text-gray-700"
                                >
                                    Last Name*
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="last-name"
                                        id="last-name"
                                        autoComplete="given-name"
                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>

                            <div className="col-span-2 mt-3">
                                <fieldset>
                                    <legend className="block text-base font-medium text-gray-700">
                                        Racial/Ethnic Identity
                                        {/* Philippine immigrant (born in the Philippines) */}
                                        {/* 1.5 generation (born in the Philippines, immigrated before or around age 12 to the U.S.) */}
                                    </legend>

                                    {joinFields.ethnicIdentity.map(
                                        (item, index) => (
                                            <div
                                                key={`${item.id}-${index}`}
                                                className="relative flex items-start my-1 pl-4"
                                            >
                                                <div className="flex items-center h-5">
                                                    <input
                                                        id={`${item.id}`}
                                                        aria-describedby="comments-description"
                                                        name="comments"
                                                        type="checkbox"
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                                    />
                                                </div>
                                                <div className="ml-3 text-sm">
                                                    <label
                                                        htmlFor={`${item.id}`}
                                                        className="font-medium text-gray-700"
                                                    >
                                                        {item.value}
                                                    </label>
                                                </div>
                                            </div>
                                        )
                                    )}
                                </fieldset>
                            </div>

                            <div className="col-span-2 mt-3">
                                <fieldset>
                                    <legend className="block text-base font-medium text-gray-700">
                                        Generation
                                        {/* Philippine immigrant (born in the Philippines) */}
                                        {/* 1.5 generation (born in the Philippines, immigrated before or around age 12 to the U.S.) */}
                                    </legend>

                                    {joinFields.generation.map(
                                        (item, index) => (
                                            <div
                                                key={`${item.id}-${index}`}
                                                className="relative flex items-start my-1 pl-4"
                                            >
                                                <div className="flex items-center h-5">
                                                    <input
                                                        id={`${item.id}`}
                                                        aria-describedby="comments-description"
                                                        name="comments"
                                                        type="checkbox"
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                                    />
                                                </div>
                                                <div className="ml-3 text-sm">
                                                    <label
                                                        htmlFor={`${item.id}`}
                                                        className="font-medium text-gray-700"
                                                    >
                                                        {item.value}
                                                    </label>
                                                </div>
                                            </div>
                                        )
                                    )}
                                </fieldset>
                            </div>

                            <div className="col-span-1 mt-3">
                                <label
                                    htmlFor="email"
                                    className="block text-base font-medium text-gray-700"
                                >
                                    Email Address*
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="email"
                                        id="email"
                                        autoComplete="given-name"
                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>

                            <div className="col-span-1 mt-3">
                                <label
                                    htmlFor="location"
                                    className="block text-base font-medium text-gray-700"
                                >
                                    Location (ex. San Jose, CA, USA)*
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="location"
                                        id="location"
                                        autoComplete="given-name"
                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>

                            {/* Profile html for later */}
                            {/* <div>
                            <h2 className="text-faster-green text-2xl font-bold border-b-faster-green border-b-2 pb-0.5">
                                Profile Image
                            </h2>

                            <div className="sm:col-span-6 mt-3">
                                <label
                                    htmlFor="cover-photo"
                                    className="block text-base font-medium text-gray-700"
                                >
                                    Cover photo
                                </label>
                                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                    <div className="space-y-1 text-center">
                                        <svg
                                            className="mx-auto h-12 w-12 text-gray-400"
                                            stroke="currentColor"
                                            fill="none"
                                            viewBox="0 0 48 48"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        <div className="flex text-sm text-gray-600">
                                            <label
                                                htmlFor="file-upload"
                                                className="relative cursor-pointer bg-white rounded-md font-medium text-faster-green hover:text-faster-green focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-faster-green"
                                            >
                                                <span>Upload a file</span>
                                                <input
                                                    id="file-upload"
                                                    name="file-upload"
                                                    type="file"
                                                    className="sr-only"
                                                />
                                            </label>
                                            <p className="pl-1">
                                                or drag and drop
                                            </p>
                                        </div>
                                        <p className="text-xs text-gray-500">
                                            PNG, JPG, GIF up to 10MB
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        </div>
                    </div>

                    {/* Education Portion of form */}
                    <div className="">
                        <h2 className="text-faster-green text-2xl font-bold border-b-faster-green border-b-2 pb-0.5">
                            Education
                        </h2>

                        <div className="grid md:grid-cols-2 gap-x-10">
                            <div className="col-span-1 mt-3">
                                <label
                                    htmlFor="first-name"
                                    className="block text-base font-medium text-gray-700"
                                >
                                    School*
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="shadow-sm focus:ring-faster-green focus:border-faster-green block w-full sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>

                            <div className="col-span-1 mt-3">
                                <label
                                    htmlFor="first-name"
                                    className="block text-base font-medium text-gray-700"
                                >
                                    Discipline/Field
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="shadow-sm focus:ring-faster-green focus:border-faster-green block w-full sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Career Portion */}
                    <div className="">
                        <h2 className="text-faster-green text-2xl font-bold border-b-faster-green border-b-2 pb-0.5">
                            Career
                        </h2>

                        <div className="grid md:grid-cols-2 gap-x-10">
                            <div className="col-span-1 mt-3">
                                <label
                                    htmlFor="first-name"
                                    className="block text-base font-medium text-gray-700"
                                >
                                    Role That Best Describes You
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="shadow-sm focus:ring-faster-green focus:border-faster-green block w-full sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>

                            <div className="col-span-1 mt-3">
                                <label
                                    htmlFor="first-name"
                                    className="block text-base font-medium text-gray-700"
                                >
                                    Company
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="shadow-sm focus:ring-faster-green focus:border-faster-green block w-full sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 grid-rows-2 grid-flow-col gap-x-10">
                            <div className="col-span-1 mt-3">
                                <label
                                    htmlFor="first-name"
                                    className="block text-base font-medium text-gray-700"
                                >
                                    Industry
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="shadow-sm focus:ring-faster-green focus:border-faster-green block w-full sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>

                            <div className="col-span-1 mt-3">
                                <label
                                    htmlFor="first-name"
                                    className="block text-base font-medium text-gray-700"
                                >
                                    Linkedin Profile URL
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="shadow-sm focus:ring-faster-green focus:border-faster-green block w-full sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}
