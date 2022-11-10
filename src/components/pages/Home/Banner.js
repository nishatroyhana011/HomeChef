import React from 'react';

const Banner = () => {
    return (
    <div>
        <section className="bg-gray-200 text-gray-900">
            <div className="container flex flex-col justify-center p-5 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src="https://images.unsplash.com/photo-1449962887303-b4a91c7c560a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80" alt="" className="h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </div>
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl">HomeChef   
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12">Eat fresh, Eat yummy. Be healthy, be happy.
                    </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <button href="#" className="px-8 py-3 text-lg font-semibold rounded bg-green-600 text-white">Our Services</button>
                        <button href="#" className="px-8 py-3 text-lg font-semibold border rounded border-gray-00">Order Now</button>
                    </div>
                </div>
            </div>
        </section>
    </div >
    );
};

export default Banner;