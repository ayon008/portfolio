import React from 'react';
import { Logo } from '../Navbar/Navbar';

const Footer = () => {
    return (
        <div className='max-w-[1280px] mx-auto flex items-center justify-between px-6 py-10'>
            <p className='text-white hover:text-[#798792] transition-all duration-300'>Copyright © 2025 - Shariar Ayon (shariar.ayon128@gmail.com)</p>
            <Logo />
        </div>
    );
};

export default Footer;