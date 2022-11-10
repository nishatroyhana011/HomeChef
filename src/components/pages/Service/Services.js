import React, { useEffect, useState } from 'react';
import useTitle from '../../../useTitle/UseTitle';
import ServiceCard from './ServiceCard';

const Services = () => {
    useTitle('Services')
    const [allServices, setallServices] = useState([]);

    useEffect(() => {
        fetch('https://homechef-server-nishatroyhana011.vercel.app/services/')
            .then(res => res.json())
            .then(data => setallServices(data))
    }, [])

    return (
        <div className='mx-10'>
            <p className='text-left font-bold text-black text-6xl my-10'>Our services</p>
            {
                allServices.length === 0 ?
                    <>

                        <div class="flex justify-center items-center">
                            <div class="border-green-600 spinner-border animate-spin inline-block w-8 h-8 border-8 rounded-full" role="status">

                            </div>
                        </div>

                    </> :
                    <>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-10'>
                            {
                                allServices.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                            }
                        </div>
                    </>
            }











        </div>
    );
};

export default Services;