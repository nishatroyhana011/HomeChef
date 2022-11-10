import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import toast,{ Toaster} from 'react-hot-toast';

const UpdateReview = () => {
    const data = useLoaderData();
    const [review, setReview] = useState({});

    const handleUpdate = (event) => {
        event.preventDefault();

        fetch(`https://homechef-server-nishatroyhana011.vercel.app/reviews/${data._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                 toast('updated successfully!')  
                    event.target.reset();
                }
            })
    }

    const handleFieldBlur = event => {
        const fieldName = event.target.name;
        const value = event.target.value;
        const newReview = { ...review }
        newReview[fieldName] = value;
        setReview(newReview);
    }
    return (
        <div>
            <p className="text-4xl text-green-600 font-semibold">Review update form</p>
            <form onSubmit={handleUpdate} className='p-12 pt-20 mx-auto'>
               
                <div className='grid grid-cols-2 gap-2'>
                    <div className="form-group mb-6">
                        <input name='email' type="email" class="form-control block
                 w-full
                 px-3
                 py-4
                 text-base
                 font-normal
                 text-gray-700
                 bg-white bg-clip-padding
                 border border-solid border-gray-300
                 rounded
                 transition
                 ease-in-out
                 m-0
                 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Email address" onBlur={handleFieldBlur} defaultValue={data.email} readOnly />
                    </div>
                    <div class="form-group mb-6">
                        <input onBlur={handleFieldBlur} type="text" name="name" placeholder='Service name' defaultValue={data.serviceName} class="form-control block
                 w-full
                 px-3
                 py-4
                 text-base
                 font-normal
                 text-gray-700
                 bg-white bg-clip-padding
                 border border-solid border-gray-300
                 rounded
                 transition
                 ease-in-out
                 m-0
                 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        />
                    </div>
                </div>
                <div class="form-group mb-6">
                        <input onBlur={handleFieldBlur} type="text" name="msg" placeholder='Your review' defaultValue={data.msg} class="form-control block
                 w-full
                 px-3
                 py-4
                 text-base
                 font-normal
                 text-gray-700
                 bg-white bg-clip-padding
                 border border-solid border-gray-300
                 rounded
                 transition
                 ease-in-out
                 m-0
                 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        />
                    </div>

                <div class="form-group mb-6">
                    <button type="submit" class="
               w-full
               px-3
               py-3
               bg-green-600
               text-white
               font-medium
               text-xs
               leading-tight
               uppercase
               rounded
               shadow-md
               hover:bg-green-800 hover:shadow-lg
               focus:bg-green-800 focus:shadow-lg focus:outline-none focus:ring-0
               active:bg-green-800 active:shadow-lg
               transition
               duration-150
               ease-in-out">Update</button>
                </div>
            </form>
            <Toaster/>
        </div>
    );
};

export default UpdateReview;