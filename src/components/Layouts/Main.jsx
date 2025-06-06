import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';
const Main = ({ children }) => {
    return (
        <div className='bg-[#252734] relative'>
            <div className=''>
                <Navbar />
                {children}
                <Footer />
            </div>
        </div>
    );
};

export default Main;