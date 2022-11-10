import React, { useContext, useEffect, useState } from 'react';
import toast,{ Toaster} from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';
import useTitle from '../../../useTitle/UseTitle';
import ReviewCard from './ReviewCard';

const Review = () => {
    const { user,logOut } = useContext(AuthContext);
    const [reviewDisplay, setReviewDisplay] = useState([]);
    useTitle('Review')

    useEffect(() => {
        fetch(`https://homechef-server-nishatroyhana011.vercel.app/myreviews?email=${user.email}`,{
            headers: {
                authorization: `Bearer ${localStorage.getItem('hc-token')}`
            }
        })
        .then(res=>{
            if(res.status === 401 || res.status === 403){
                return logOut()
            }
            return res.json()
        })
        .then(data =>{
            setReviewDisplay(data)
        })
    }, [user?.email, logOut])

    const handleDelete = id => {
        const proceed = window.confirm('want to Delete?');
        if(proceed){
            fetch(`https://homechef-server-nishatroyhana011.vercel.app/reviews/${id}`, {
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data=>{
            
                if(data.deletedCount > 0){
                    toast("1 Review deleted successfully")
                    const remaining = reviewDisplay.filter(rvw=>rvw._id !== id);
                    setReviewDisplay(remaining)
                }
            })
        }
    }

    return (
        <div className='m-10'>
           
             <p className='text-left font-bold text-black text-6xl my-10'>My Reviews</p>
            { reviewDisplay.length ?
            
                reviewDisplay.map(rvw=> <ReviewCard key={rvw.Id} review={rvw} handleDelete={handleDelete}></ReviewCard>)
             :
            <p className='text-2xl font-semibold'>No reviews were added</p>}

            <Toaster/>
        </div>
    );
};

export default Review;