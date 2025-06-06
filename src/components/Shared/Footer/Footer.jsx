import React from 'react';
import { Logo } from '../Navbar/Navbar';

const Footer = () => {
    return (
        <div className='max-w-[1280px] mx-auto flex items-center md:justify-between justify-center md:flex-row flex-col px-6 py-10 md:gap-0 gap-6'>
            <p className='text-white hover:text-[#798792] transition-all duration-300 md:text-left text-center'>Copyright © 2025 - Shariar Ayon (shariar.ayon128@gmail.com)</p>
            <Logo />
        </div>
    );
};

export default Footer;