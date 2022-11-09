import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import Swal from 'sweetalert2'
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const AddService = () => {
    const { user } = useContext(AuthContext);



    const btnAddService = (event) => {
        event.preventDefault();
        const form = event.target;
        const serviceName = form.serviceName.value;
        const serviceThumbnail = form.serviceThumbnail.value;
        const servicePrice = form.price.value;
        const deliveryDuration = form.time.value;
        const serviceQuantity = form.quantity.value;
        const serviceCategory = form.category.value;

        const description = form.description.value;

        const service = {
            serviceName,
            serviceThumbnail,
            servicePrice,
            deliveryDuration,
            serviceQuantity,
            serviceCategory,
            description,
            providerName: user.displayName,
            providerEmail: user.email,
            providerPhoto: user.photoURL
        }
        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
        .then(res => res.json())
        .then(data => {

            if (data.acknowledged) {
                Swal.fire({
                    title: 'Done!',
                    text: 'Service added!',
                    icon: 'success',
                    confirmButtonText: 'OK'
                })
                form.reset()
            }
        })
        .catch(err => console.log(err))
    }

    return (
        <div className='my-10'>
            <div className='w-3/4 mx-auto text-left text-xl flex'>
                <div>
                    <PhotoProvider>
                        <PhotoView src={user?.photoURL}>
                            <img className='h-20 w-20 rounded-md shadow-md shadow-green-600' src={user?.photoURL} alt="" />
                        </PhotoView>
                    </PhotoProvider>
                </div>
                <div className='mx-5'>
                    <p><span className='text-green-600'>Provider Name:</span> {user?.displayName}</p>
                    <p><span className='text-green-600'>Provider Email:</span> {user?.email}</p>
                </div>
            </div>
            <h2 className="text-4xl text-green-600 font-semibold">Add a service</h2>
            <form className='w-3/4 mx-auto' onSubmit={btnAddService}>

                <input name="serviceName" type="text" placeholder="Service Name" className="input input-ghost w-full  input-bordered my-2" required />
                <input name="serviceThumbnail" placeholder="Service image url" type="text" className="input input-ghost w-full  input-bordered my-2" required />

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 my-2'>
                    <input name="price" type="text" placeholder="Service Price" className="input input-ghost w-full  input-bordered" required />
                    <input name="time" type="text" placeholder="Delivery Time" className="input input-ghost w-full  input-bordered" required />
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 my-2'>
                    <input name="quantity" type="number" placeholder="Number of Items" className="input input-ghost w-full  input-bordered" required />
                    <input name="category" type="text" placeholder="Category" className="input input-ghost w-full  input-bordered" required />
                </div>
                <textarea name="description" className="textarea textarea-bordered h-24 w-full my-2" placeholder="Service Description" required></textarea>

                <button className='btn bg-green-600 border-green-600' type="submit">Add Service</button>
            </form>
        </div>
    );
};

export default AddService;