import React from 'react';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServiceCard = ({ service }) => {
    const { _id, serviceName, serviceThumbnail, servicePrice, description } = service;
    return (
        <div className="card bg-base-100 shadow-md">
            <PhotoProvider>
                <PhotoView src={serviceThumbnail}>
                <figure><img src={serviceThumbnail} alt="Food" /></figure>
                </PhotoView>
            </PhotoProvider>
        
            <div className="card-body">
                <h2 className="text-center text-2xl font-bold">{serviceName}</h2>
                <p className='text-base text-left'>{description}</p>

                <div className="card-actions justify-between mt-2">
                    <div> <p className='text-xl text-green-600 font-semibold'>Price: ${servicePrice}</p></div>
                    <Link to={`/services/${_id}`}><button className="btn bg-green-600 border-green-600">Book Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;