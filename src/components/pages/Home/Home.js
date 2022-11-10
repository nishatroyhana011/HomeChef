import React from 'react';
import Banner from './Banner';
import OurBlogs from './OurBlogs';
import OurServices from './OurServices';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurServices></OurServices>
            <Testimonial></Testimonial>
            <OurBlogs></OurBlogs>
        </div>
    );
};

export default Home;