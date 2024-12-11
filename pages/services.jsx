import React from 'react'

const services = () => {
  return (
   <>
<section>
    <div className="flex  items-center justify-center bg-[#000]">
    {/* <!-- Button 1 --> */}
    <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <div className="mx-auto mb-8 max-w-screen-md  lg:mb-12 text-center">
            <h2 className="mb-10 text-4xl font-bold tracking-tight text-white">Make your life easier!</h2>
        </div>
        <div className="space-y-8  lg:grid md:grid-cols-3 lg:space-y-0 lg:gap-10">
            {/* <!-- Pricing Card --> */}
            <div
                className="mx-auto flex max-w-lg space-y-8 items-start flex-col rounded-3xl border border-gray-200 bg-white p-6 text-gray-900 xl:p-8">

                <h3 className="text-lg font-normal ">Cleaning</h3>
                <div className="my-8 flex items-baseline justify-center ">
                    <span className="mr-2 text-5xl font-extrabold">Rs 500</span>
                    <span className="text-gray-600">/week</span>
                </div>

                <p className="font-light text-gray-600 sm:text-sm">Best option for a 3 day cleaning per week.</p>
                <a href='Cleaning'
                    className="cursor-pointer bg-gray-900 w-full rounded-md  p-3 text-center text-sm font-semibold text-white shadow-sm  hover:-translate-y-1">Book Now</a>
                {/* <!-- List --> */}
                <ul role="list" className="mb-8 space-y-4 text-left text-gray-600  text-sm">
                    <li className="flex items-center space-x-3 ">
                        {/* <!-- Icon --> */}
                        <svg className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"></path>
                        </svg>
                        <span>600 users</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        {/* <!-- Icon --> */}
                        <svg className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"></path>
                        </svg>
                        <span>Deep Cleaning</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        {/* <!-- Icon --> */}
                        <svg className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"></path>
                        </svg>
                        <span>Includes Bathroom, Kitchen and Baranda</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        {/* <!-- Icon --> */}
                        <svg className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"></path>
                        </svg>
                        <span>Well Trained Staff</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        {/* <!-- Icon --> */}
                        <svg className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"></path>
                        </svg>
                        <span>Quick Response</span>
                    </li>
                </ul>

            </div>
            {/* <!-- Pricing Card 2--> */}
            <div
                className="mx-auto flex max-w-lg space-y-8 items-start flex-col rounded-3xl  bg-[#D8FA6D] p-6 text-gray-900 xl:p-8">

                <h3 className="text-lg font-normal ">Plumbing</h3>
                <div className="my-8 flex items-baseline justify-center ">
                    <span className="mr-2 text-5xl font-extrabold">300</span>
                    <span className="text-gray-600">/Hour</span>
                </div>

                <p className="font-light text-gray-600 sm:text-sm">No hassle to find your next plumber!</p>
                <a href='Plumbing'
                    className="cursor-pointer bg-gray-900 w-full rounded-md  p-3 text-center text-sm font-semibold text-white shadow-sm  hover:-translate-y-1">Book Now</a>
                {/* <!-- List --> */}
                <ul role="list" className="mb-8 space-y-4 text-left text-gray-600  text-sm">
                    <li className="flex items-center space-x-3 ">
                        {/* <!-- Icon --> */}
                        <svg className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"></path>
                        </svg>
                        <span>300 users</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        {/* <!-- Icon --> */}
                        <svg className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"></path>
                        </svg>
                        <span>Clean Work</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        {/* <!-- Icon --> */}
                        <svg className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"></path>
                        </svg>
                        <span>Professional Workers</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        {/* <!-- Icon --> */}
                        <svg className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"></path>
                        </svg>
                        <span>Priority support</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        {/* <!-- Icon --> */}
                        <svg className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"></path>
                        </svg>
                        <span>Lifetime Gurantee</span>
                    </li>
                </ul>

            </div>
            {/* <!-- Pricing Card 3--> */}
            <div
                className="mx-auto flex max-w-lg space-y-8 items-start flex-col rounded-3xl  bg-[#DCA6F3] p-6 text-center text-gray-900 xl:p-8">

                <h3 className="text-lg font-normal ">Beautician</h3>
                <div className="my-8 flex items-baseline justify-center ">
                    <span className="mr-2 text-5xl font-extrabold">800</span>
                    <span className="text-gray-600">/Hour</span>
                </div>

                <p className="font-light text-gray-600 sm:text-sm">Best makeup artist with great experience.</p>
                <a href='Beautician'
                    className="cursor-pointer bg-gray-900 w-full rounded-md  p-3  text-sm font-semibold text-white shadow-sm  hover:-translate-y-1">Book Now</a>
                {/* <!-- List --> */}
                <ul role="list" className="mb-8 space-y-4 text-left text-gray-600  text-sm">
                    <li className="flex items-center space-x-3 ">
                        {/* <!-- Icon --> */}
                        <svg className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"></path>
                        </svg>
                        <span>150 Users</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        {/* <!-- Icon --> */}
                        <svg className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"></path>
                        </svg>
                        <span>Bridal Makeup</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        {/* <!-- Icon --> */}
                        <svg className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"></path>
                        </svg>
                        <span>Function Makeup</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        {/* <!-- Icon --> */}
                        <svg className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"></path>
                        </svg>
                        <span>Priority support</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        {/* <!-- Icon --> */}
                        <svg className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"></path>
                        </svg>
                        <span>Quick Response</span>
                    </li>
                </ul>

            </div>
        </div>
    </div>
    </div>
    </section>
    <div className="flex  items-center justify-center bg-[#000]">
    {/* <!-- Button 1 --> */}
    <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <div className="mx-auto mb-8 max-w-screen-md  lg:mb-12 text-center">
        </div>
        <div className="space-y-8  lg:grid md:grid-cols-3 lg:space-y-0 lg:gap-10">
            {/* <!-- Pricing Card --> */}
            <div
                className="mx-auto flex max-w-lg space-y-8 items-start flex-col rounded-3xl border border-gray-200 bg-white p-6 text-gray-900 xl:p-8">

                <h3 className="text-lg font-normal ">Chimney and A/C Repair</h3>
                <div className="my-8 flex items-baseline justify-center ">
                    <span className="mr-2 text-5xl font-extrabold">Rs 900</span>
                    <span className="text-gray-600">/Hour</span>
                </div>

                <p className="font-light text-gray-600 sm:text-sm">Quick response to fix your Chimney or A/c.</p>
                <a href='Ac'
                    className="cursor-pointer bg-gray-900 w-full rounded-md  p-3 text-center text-sm font-semibold text-white shadow-sm  hover:-translate-y-1">Book Now</a>
                {/* <!-- List --> */}
                <ul role="list" className="mb-8 space-y-4 text-left text-gray-600  text-sm">
                    <li className="flex items-center space-x-3 ">
                        {/* <!-- Icon --> */}
                        <svg className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"></path>
                        </svg>
                        <span>600 users</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        {/* <!-- Icon --> */}
                        <svg className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"></path>
                        </svg>
                        <span>Smooth Fix</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        {/* <!-- Icon --> */}
                        <svg className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"></path>
                        </svg>
                        <span>6 Months Warranty</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        {/* <!-- Icon --> */}
                        <svg className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"></path>
                        </svg>
                        <span>Well Trained Staff</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        {/* <!-- Icon --> */}
                        <svg className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"></path>
                        </svg>
                        <span>Quick Response</span>
                    </li>
                </ul>

            </div>
            {/* <!-- Pricing Card 2--> */}
            <div
                className="mx-auto flex max-w-lg space-y-8 items-start flex-col rounded-3xl  bg-[#D8FA6D] p-6 text-gray-900 xl:p-8">

                <h3 className="text-lg font-normal ">Pest Control</h3>
                <div className="my-8 flex items-baseline justify-center ">
                    <span className="mr-2 text-5xl font-extrabold">400</span>
                    <span className="text-gray-600">/Hour</span>
                </div>

                <p className="font-light text-gray-600 sm:text-sm">Free from all kinds of pest</p>
                <a href='Pest'
                    className="cursor-pointer bg-gray-900 w-full rounded-md  p-3 text-center text-sm font-semibold text-white shadow-sm  hover:-translate-y-1">Book Now</a>
                {/* <!-- List --> */}
                <ul role="list" className="mb-8 space-y-4 text-left text-gray-600  text-sm">
                    <li className="flex items-center space-x-3 ">
                        {/* <!-- Icon --> */}
                        <svg className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"></path>
                        </svg>
                        <span>380 users</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        {/* <!-- Icon --> */}
                        <svg className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"></path>
                        </svg>
                        <span>Environment friendly chemicals</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        {/* <!-- Icon --> */}
                        <svg className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"></path>
                        </svg>
                        <span>Eliminate all kinds of insects </span>
                    </li>
                    <li className="flex items-center space-x-3">
                        {/* <!-- Icon --> */}
                        <svg className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"></path>
                        </svg>
                        <span>Priority support</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        {/* <!-- Icon --> */}
                        <svg className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"></path>
                        </svg>
                        <span>6 Month support</span>
                    </li>
                </ul>

            </div>
            {/* <!-- Pricing Card 3--> */}
            <div
                className="mx-auto flex max-w-lg space-y-8 items-start flex-col rounded-3xl  bg-[#DCA6F3] p-6 text-center text-gray-900 xl:p-8">

                <h3 className="text-lg font-normal ">Spa Luxe</h3>
                <div className="my-8 flex items-baseline justify-center ">
                    <span className="mr-2 text-5xl font-extrabold">1100</span>
                    <span className="text-gray-600">/Hour</span>
                </div>

                <p className="font-light text-gray-600 sm:text-sm">Get the luxury of spa at your doorstep.</p>
                <a href='Spa'
                    className="cursor-pointer bg-gray-900 w-full rounded-md  p-3  text-sm font-semibold text-white shadow-sm  hover:-translate-y-1">Book Now</a>
                {/* <!-- List --> */}
                <ul role="list" className="mb-8 space-y-4 text-left text-gray-600  text-sm">
                    <li className="flex items-center space-x-3 ">
                        {/* <!-- Icon --> */}
                        <svg className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"></path>
                        </svg>
                        <span>150 Users</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        {/* <!-- Icon --> */}
                        <svg className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"></path>
                        </svg>
                        <span>Whole Body Massage</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        {/* <!-- Icon --> */}
                        <svg className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"></path>
                        </svg>
                        <span>Hair Wash</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        {/* <!-- Icon --> */}
                        <svg className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"></path>
                        </svg>
                        <span>Manicure & Pedicure</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        {/* <!-- Icon --> */}
                        <svg className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"></path>
                        </svg>
                        <span>Full Face Massage</span>
                    </li>
                </ul>

            </div>
        </div>
    </div>
    </div>
   
   </>
  )
}

export default services