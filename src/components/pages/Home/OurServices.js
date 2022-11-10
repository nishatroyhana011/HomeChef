import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../Service/ServiceCard';

const OurServices = () => {
    const [ourService , setOurService] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/topservice/')
        .then(res => res.json())
        .then(data => setOurService(data))
    },[])
    return (
        <div className='w-11/12 mx-auto my-20'>
            <p className='text-left font-bold text-black text-6xl my-10'>Our services</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-10'>
            {
                ourService.map(service=><ServiceCard key={service._id} service={service}></ServiceCard>)
            }
            </div>
            <Link to='/services'> <button className="btn">View All</button></Link>
        </div>
    );
};

export default OurServices;