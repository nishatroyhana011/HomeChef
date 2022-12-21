import React from 'react';

const OurBlogs = () => {
    return (
        <div>
            <section className="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100">
                <div className="container p-6 mx-auto space-y-8">
                    <div className="space-y-2 text-center">
                        <h2 className="text-5xl font-bold">Blog Section</h2>
                        <p className="font-serif text-base dark:text-gray-400">It is a demo blog section for design purpose.</p>
                    </div>
                    <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
                        <article className="flex flex-col dark:bg-gray-900">
                            <a  href="#" aria-label="Te nulla oportere reprimique his dolorum">
                                <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://images.unsplash.com/photo-1579954115545-a95591f28bfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                            </a>
                            <div className="flex flex-col flex-1 p-6">
                                
                                <a  href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">Bevarage</a>
                                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Milk shake in 20 minutes</h3>
                                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                                    <span>June 1, 2020</span>
                                    <span>2.1K views</span>
                                </div>
                            </div>
                        </article>
                        <article className="flex flex-col dark:bg-gray-900">
                            <a  href="#" aria-label="Te nulla oportere reprimique his dolorum">
                                <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://images.unsplash.com/photo-1606728035253-49e8a23146de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                            </a>
                            <div className="flex flex-col flex-1 p-6">
                             
                                <a  href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">Dinner</a>
                                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">6 easy chicken receipes you must try</h3>
                                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                                    <span>June 2, 2020</span>
                                    <span>2.2K views</span>
                                </div>
                            </div>
                        </article>
                        <article className="flex flex-col dark:bg-gray-900">
                            <a  href="#" aria-label="Te nulla oportere reprimique his dolorum">
                                <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://images.unsplash.com/photo-1565071559227-20ab25b7685e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                            </a>
                            <div className="flex flex-col flex-1 p-6">
                                
                                <a  className="text-xs tracking-wider uppercase hover:underline text-green-400">snacks</a>
                                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Make chocolate of your own.</h3>
                                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400">
                                    <span>June 3, 2020</span>
                                    <span>2.3K views</span>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OurBlogs;