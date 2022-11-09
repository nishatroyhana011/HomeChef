import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    const allServices = useLoaderData();
    return (
        <div className='mx-10'>
            <p className='text-left font-bold text-black text-6xl my-10'>Our services</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-10'>
            {
                allServices.map(service=><ServiceCard key={service._id} service={service}></ServiceCard>)
            }
            </div>
           
        </div>
    );
};

export default Services;