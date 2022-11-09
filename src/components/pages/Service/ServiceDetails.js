import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const service = useLoaderData();
    console.log(service)
    const { serviceName,
        serviceThumbnail,
        servicePrice,
        deliveryDuration,
        description,
        providerName,
        providerEmail,
        providerPhoto } = service;
    return (
        <div className='mx-10'>
            <div className='bg-slate-100 grid grid-cols-3'>
                <div className='col-span-2'>
                    <img src={serviceThumbnail} alt="" />
                    <p className='text-2xl text-green-600 font-semibold '>{serviceName}</p>
                    <p className='text-left text-base'>Description: {description}</p>
                </div>
                <div className='w-3/4 mx-auto text-left text-xl'>
                    <div>
                        <p  className='text-green-600 underline text-xl'>Service Info</p>
                        <p>Delivery Time: {deliveryDuration}</p>
                        <p>Price: {servicePrice}</p>
                    </div>
                    <div className='my-5'>
                        <p  className='text-green-600 underline text-xl'>Provider Info</p>
                        <div>    
                            <p> {providerName}</p>
                            <p> {providerEmail}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;
