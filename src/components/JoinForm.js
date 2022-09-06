import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { handleJoinSubmit } from '../api';
import joinFields from '../data/join-fields.json';

const validationSchema = Yup.object({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    email: Yup.string()
        .email('Please enter a valid email address.')
        .required('Required'),
    location: Yup.string().required('Required'),
    education: Yup.object({
        school: Yup.string().required('Required'),
    }),
});

export default function JoinForm() {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            ethnicity: '',
            generation: [],
            email: '',
            location: '',
            education: {
                school: '',
                discipline: '',
            },
            career: {
                role: '',
                company: '',
                industry: [],
                personalSite: '',
            },
        },
        validationSchema,
        onSubmit: (values) => {
            console.log(values);
            console.log(JSON.stringify(values, null, 2));
            handleJoinSubmit(JSON.stringify(values));
        },
    });

    console.log('here are the errors', formik.errors);

    return (
        <>
            <form onSubmit={formik.handleSubmit} className="space-y-8">
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
                        <div className="grid md:grid-cols-2 gap-x-10 mt-0">
                            <div className="col-span-1 mt-3">
                                <label
                                    htmlFor="firstName"
                                    className="block text-base font-medium text-gray-700"
                                >
                                    First Name*
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="firstName"
                                        id="firstName"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.firstName}
                                        autoComplete="given-name"
                                        className="shadow-sm focus:ring-faster-green focus:border-faster-green block w-full sm:text-sm border-gray-300 rounded-md"
                                    />
                                    {formik.touched.firstName &&
                                    formik.errors.firstName ? (
                                        <div className="text-faster-error-red">
                                            {formik.errors.firstName}
                                        </div>
                                    ) : null}
                                </div>
                            </div>

                            <div className="col-span-1 mt-3">
                                <label
                                    htmlFor="lastName"
                                    className="block text-base font-medium text-gray-700"
                                >
                                    Last Name*
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="lastName"
                                        id="lastName"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.lastName}
                                        autoComplete="given-name"
                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                    />
                                    {formik.touched.lastName &&
                                    formik.errors.lastName ? (
                                        <div className="text-faster-error-red">
                                            {formik.errors.lastName}
                                        </div>
                                    ) : null}
                                </div>
                            </div>

                            <div className="col-span-1 md:col-span-2 mt-3">
                                <fieldset>
                                    <legend className="block text-base font-medium text-gray-700">
                                        Racial/Ethnic Identity
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
                                                        aria-describedby="ethnicity-description"
                                                        name="ethnicity"
                                                        type="checkbox"
                                                        onChange={
                                                            formik.handleChange
                                                        }
                                                        value={item.value}
                                                        className="focus:ring-faster-green h-4 w-4 text-faster-green border-gray-300 rounded"
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

                            <div className="col-span-1 md:col-span-2 mt-3">
                                <fieldset>
                                    <legend className="block text-base font-medium text-gray-700">
                                        Generation
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
                                                        aria-describedby="generation-description"
                                                        name="generation"
                                                        type="checkbox"
                                                        onChange={
                                                            formik.handleChange
                                                        }
                                                        value={item.value}
                                                        className="focus:ring-faster-green h-4 w-4 text-faster-green border-gray-300 rounded"
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
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.email}
                                        autoComplete="given-name"
                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                    />
                                    {formik.touched.email &&
                                    formik.errors.email ? (
                                        <div className="text-faster-error-red">
                                            {formik.errors.email}
                                        </div>
                                    ) : null}
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
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.location}
                                        autoComplete="given-name"
                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                    />
                                    {formik.touched.location &&
                                    formik.errors.location ? (
                                        <div className="text-faster-error-red">
                                            {formik.errors.location}
                                        </div>
                                    ) : null}
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
                    <div>
                        <h2 className="text-faster-green text-2xl font-bold border-b-faster-green border-b-2 pb-0.5">
                            Education
                        </h2>

                        <div className="grid md:grid-cols-2 gap-x-10">
                            <div className="col-span-1 mt-3">
                                <label
                                    htmlFor="school"
                                    className="block text-base font-medium text-gray-700"
                                >
                                    School*
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="education.school"
                                        id="school"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.education.school}
                                        autoComplete="given-name"
                                        className="shadow-sm focus:ring-faster-green focus:border-faster-green block w-full sm:text-sm border-gray-300 rounded-md"
                                    />
                                    {(formik.touched.education || {}).school &&
                                    (formik.errors.education || {}).school ? (
                                        <div className="text-faster-error-red">
                                            {formik.errors.education.school}
                                        </div>
                                    ) : null}
                                </div>
                            </div>

                            <div className="col-span-1 mt-3">
                                <label
                                    htmlFor="discipline"
                                    className="block text-base font-medium text-gray-700"
                                >
                                    Discipline/Field
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="education.discipline"
                                        id="discipline"
                                        onChange={formik.handleChange}
                                        value={
                                            formik.values.education.discipline
                                        }
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
                                    htmlFor="role"
                                    className="block text-base font-medium text-gray-700"
                                >
                                    Role That Best Describes You
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="career.role"
                                        id="role"
                                        onChange={formik.handleChange}
                                        value={formik.values.career.role}
                                        autoComplete="given-name"
                                        className="shadow-sm focus:ring-faster-green focus:border-faster-green block w-full sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>

                            <div className="col-span-1 mt-3">
                                <label
                                    htmlFor="company"
                                    className="block text-base font-medium text-gray-700"
                                >
                                    Company
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="career.company"
                                        id="company"
                                        onChange={formik.handleChange}
                                        value={formik.values.career.company}
                                        autoComplete="given-name"
                                        className="shadow-sm focus:ring-faster-green focus:border-faster-green block w-full sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 grid-rows-2 grid-flow-col gap-x-10">
                            <div className="col-span-1 mt-3">
                                <label
                                    htmlFor="industry"
                                    className="block text-base font-medium text-gray-700"
                                >
                                    Industry
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="career.industry"
                                        id="industry"
                                        onChange={formik.handleChange}
                                        value={formik.values.career.industry}
                                        autoComplete="given-name"
                                        className="shadow-sm focus:ring-faster-green focus:border-faster-green block w-full sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>

                            <div className="col-span-1 mt-3">
                                <label
                                    htmlFor="personalSite"
                                    className="block text-base font-medium text-gray-700"
                                >
                                    Linkedin Profile URL/Personal Site/Social
                                    Media
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="career.personalSite"
                                        id="personalSite"
                                        onChange={formik.handleChange}
                                        value={
                                            formik.values.career.personalSite
                                        }
                                        autoComplete="given-name"
                                        className="shadow-sm focus:ring-faster-green focus:border-faster-green block w-full sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* buttons container */}
                <div className="pt-5">
                    <div className="flex justify-end">
                        <button
                            disabled={!!Object.keys(formik.errors).length}
                            type="submit"
                            className={`ml-3 inline-flex justify-center rounded-md border border-transparent bg-faster-green py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-faster-green focus:outline-none focus:ring-2 focus:ring-faster-green focus:ring-offset-2 ${
                                Object.keys(formik.errors).length
                                    ? 'opacity-75'
                                    : ''
                            }`}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
}
