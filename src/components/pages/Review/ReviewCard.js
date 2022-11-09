import React from 'react';

const ReviewCard = ({review}) => {
    const {serviceName, msg} = review;

     return (
        <div className='grid grid-cols-2 w-10/12 mx-auto my-4 shadow-md rounded-md p-5'>
            <div className='text-start mx-5'>
                <p className='text-green-600 text-lg'>{serviceName}</p>
                <p>{msg}</p>
            </div>
            <div>
                <button className='btn btn-outline btn-info mx-2'>edit</button>
                <button className='btn btn-outline btn-error mx-2'>Delete</button>
            </div>
            
        </div>
    );
};

export default ReviewCard;