import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
const Main = ({ children }) => {
    return (
        <div className='bg-[#252734] relative'>
            <div className=''>
                <Navbar />
                {children}
            </div>
            {/* <div className='absolute top-0 left-0 bg-red-400 z-30'>
                <span className='h-[700px] w-[700px] rounded-full border border-[#3A3C48] bg-red-200'></span>
            </div> */}
        </div>
    );
};

export default Main;