import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import ReviewList from './ReviewList';

const ServiceDetails = () => {
    const { user } = useContext(AuthContext);
    const [reviewDisplay, setReviewDisplay] = useState([]);

    const service = useLoaderData();
    const { _id, serviceName, serviceThumbnail, servicePrice, deliveryDuration, serviceQuantity,
        serviceCategory, description, providerName, providerEmail, providerPhoto } = service;

    
    //post a review
    const btnSubmitReview = (event) => {
        event.preventDefault();
        const msg = event.target.review.value;

        const review = {
            serviceId: _id,
            serviceName,
            serviceThumbnail,
            email: user?.email,
            name: user?.displayName,
            photo: user?.photoURL,
            msg
        }
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            if (data.acknowledged) {
                
                event.target.reset();
            }
        })
        .catch(err => console.log(err))   
    }

    //show reviews of this service
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?serviceId=${_id}`)
            .then(res => res.json())
            .then(data => {
                setReviewDisplay(data)
            })
    },[])

    return (
        <div className='mx-10'>
            <div className='grid grid-cols-2 md:grid-cols-3'>
                <div className='col-span-2 order-last md:order-first'>
                    <img className='rounded-md' src={serviceThumbnail} alt="" />
                    <p className='text-2xl my-4 text-green-600 font-semibold '>{serviceName}</p>
                    <p className='text-left text-base'>Description: {description}</p>
                    {/* review part */}
                    <div>
                        {
                            reviewDisplay.map(rvw=><ReviewList key={rvw.id} rvw={rvw}></ReviewList>)
                        }
                    </div>

                    <div>
                        {
                            user ?
                                <form className='my-8 p-10 shadow-md' onSubmit={btnSubmitReview}>
                                    <p className='text-start text-xl my-5'>Leave a review</p>
                                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                                        <input name="name" type="text" placeholder="Your Name" defaultValue={user?.displayName} className="input input-ghost w-full  input-bordered" readOnly />
                                        <input name="email" type="email" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered" readOnly />
                                    </div>
                                    <textarea className="textarea textarea-bordered h-24 w-full my-2" placeholder="Your openion.." name="review" ></textarea>
                                    <button className='btn bg-green-600 border-green-600 rounded-md font-semibold text-lg'>submit</button>
                                </form> :
                                <p>Please <Link to='/login' className='text-green-600 font-semibold text-lg'>login</Link>  to add a review</p>
                        }
                    </div>
                </div>

                {/* sidebar */}
                <div className='w-3/4 mx-auto text-left text-xl order-first md:order-last'>
                    <div>
                        <p className='text-green-600 underline text-xl'>Service Info</p>
                        <p>Delivery Time: {deliveryDuration}</p>
                        <p>Price: {servicePrice}</p>
                        <p>Quantity: {serviceQuantity}</p>
                        <p>Category: {serviceCategory}</p>
                    </div>
                    <div className='my-5'>
                        <p className='text-green-600 underline text-xl'>Provider Info</p>
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
