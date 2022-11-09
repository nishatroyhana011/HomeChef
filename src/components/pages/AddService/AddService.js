import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const AddService = () => {
    const { user } = useContext(AuthContext);
    console.log(user)
    const handleAddService = () => {

    }

    return (
        <div className='my-10'>
            <div className='w-3/4 mx-auto text-left text-xl flex'>
                <div> <img className='h-20 w-20 rounded-md shadow-md shadow-green-600' src={user?.photoURL} alt="" /></div>
                <div className='mx-5'>
                    <p><span className='text-green-600'>Provider Name:</span> {user?.displayName}</p>
                    <p><span className='text-green-600'>Provider Email:</span> {user?.email}</p>
                </div>
            </div>
            <h2 className="text-4xl">Add a service</h2>
            <form className='w-3/4 mx-auto' onSubmit={handleAddService}>

                <input name="serviceName" type="text" placeholder="Service Name" className="input input-ghost w-full  input-bordered my-2" required />
                <input name="serviceThumbnail" placeholder="Service image url" type="file" className="file-input w-full my-2" required />

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 my-2'>
                    <input name="price" type="text" placeholder="Service Price" className="input input-ghost w-full  input-bordered" required />
                    <input name="time" type="text" placeholder="Delivery Time" className="input input-ghost w-full  input-bordered" required />
                </div>
                <textarea name="description" className="textarea textarea-bordered h-24 w-full my-2" placeholder="Service Description" required></textarea>

                <input className='btn' type="submit" value="Place Your Order" />
            </form>
        </div>
    );
};

export default AddService;