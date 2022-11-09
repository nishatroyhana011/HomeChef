import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import ReviewCard from './ReviewCard';

const Review = () => {
    const { user } = useContext(AuthContext);
    const [reviewDisplay, setReviewDisplay] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setReviewDisplay(data)
            })
    },[user.email])

    return (
        <div className='m-10'>
             <p className='text-left font-bold text-black text-6xl my-10'>My services</p>
            {
                reviewDisplay.map(rvw=> <ReviewCard key={rvw.Id} review={rvw}></ReviewCard>)
            }
        </div>
    );
};

export default Review;