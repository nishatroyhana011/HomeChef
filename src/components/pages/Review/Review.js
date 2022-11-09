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
                console.log(data)
                setReviewDisplay(data)
            })
    },[user?.email])

    // const handleDelete = id => {
    //     const proceed = window.confirm('want to Delete?');
    //     if(proceed){
    //         fetch(`http://localhost:5000/reviews/${id}`, {
    //             method:'DELETE'
    //         })
    //         .then(res => res.json())
    //         .then(data=>{
    //             if(data.deletedCount > 0){
    //                 const remaining = reviewDisplay.filter(ord=>ord._id !== id);
    //                 setReviewDisplay(remaining)
    //             }
    //         })
    //     }
    // }

    return (
        <div className='m-10'>
           
             <p className='text-left font-bold text-black text-6xl my-10'>My Reviews</p>
            { reviewDisplay.length ?
            
                reviewDisplay.map(rvw=> <ReviewCard key={rvw.Id} review={rvw} ></ReviewCard>)
             :
            <p>No reviews were added</p>}
        </div>
    );
};

export default Review;