import { playfair } from '@/components/fonts/Disney';
import montserrat from '@/components/fonts/Monserrat';
import React from 'react';

const Title = ({ header, subheader }) => {
    return (
        <div>
            <h3 className={`${montserrat.className} text-[#798792] text-lg mb-8`}><span className='mr-6'>||</span>{subheader}</h3>
            <h1 className={`text-white text-6xl ${playfair.className}`}>{header}</h1>
        </div>
    );
};

export default Title;