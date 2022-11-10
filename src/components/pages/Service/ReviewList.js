import React from 'react';

const ReviewList = ({ rvw }) => {
    return (
        <div className=' bg-green-100 flex m-2 items-center'>
            <div>
                <img className='h-20 w-20 rounded-md' src={rvw.photo} alt="" />
            </div>
            <div className='m-2'>
                <p>{rvw.msg}</p>
                <p>{rvw.serviceName}</p>
            </div>


        </div>
    );
};

export default ReviewList;