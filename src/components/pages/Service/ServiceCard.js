import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const {_id, serviceName, serviceThumbnail, servicePrice, deliveryDuration, description } = service;
    return (
        <div className="card bg-base-100 shadow-md">
            <figure><img src={serviceThumbnail} alt="Food" /></figure>
            <div className="card-body">
                <h2 className="text-center text-2xl font-bold">{serviceName}</h2>
                <p className='text-base text-left'>{description}</p>
                <div className='flex justify-between'>
                    <p className='text-xl text-green-600 font-semibold'>Price: ${servicePrice}</p>
                    <p className='text-xl text-green-600 font-semibold'>Delivery Time: {deliveryDuration}</p>
                </div>
                <div className="card-actions justify-center mt-2">
                    <Link to={`/services/${_id}`}><button className="btn bg-green-600 border-green-600">Book Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;