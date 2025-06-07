import React from 'react';
import Title from '../Shared/Title/Title';
import { Mail, Phone } from 'lucide-react';
import { FaFacebookF } from '@react-icons/all-files/fa/FaFacebookF';
import { FaLinkedinIn } from '@react-icons/all-files/fa/FaLinkedinIn';
import { FaWhatsapp } from '@react-icons/all-files/fa/FaWhatsapp';

const Follow = () => {
    return (
        <div className=' bg-[#282A37]' id='contact'>
            <div className='py-28 px-6 max-w-[1280px] mx-auto'>
                <Title subheader={'Follow Me'} header={'Follow me on social media'} />
                <div className='mt-16 flex items-center 2xl:flex-row xl:flex-row flex-col justify-between gap-6'>
                    <a href="tel:+8801726108060" className='flex md:flex-row flex-col items-center gap-6'>
                        <div className='w-20 h-20 flex items-center justify-center p-4 rounded-full border border-[#3A3C48] text-white hover:text-black bg-transparent hover:bg-white transition-all duration-300 ease-in'>
                            <Phone className='w-6 h-6' />
                        </div>
                        <p className='text-white md:text-3xl text-xl'>+880-1726-108060</p>
                    </a>

                    <a href="mailto:shariar.ayon128@gmail.com" className='flex md:flex-row flex-col items-center gap-6'>
                        <div className='w-20 h-20 flex items-center justify-center p-4 rounded-full border border-[#3A3C48] text-white hover:text-black bg-transparent hover:bg-white transition-all duration-300 ease-in'>
                            <Mail className='w-6 h-6' />
                        </div>
                        <p className='text-white md:text-3xl text-xl'>shariar.ayon128@gmail.com</p>
                    </a>

                </div>
                <div className='flex items-center justify-center gap-x-10 mt-20'>
                    <a href='https://www.facebook.com/shariar.oyon/' target="_blank" rel="noopener noreferrer">
                        <div className='w-20 h-20 flex items-center justify-center p-4 rounded-full border border-[#3A3C48] text-white hover:text-black bg-transparent hover:bg-white transition-all duration-300 ease-in'>
                            <FaFacebookF className='w-6 h-6' />
                        </div>
                    </a>
                    <a href='https://www.linkedin.com/in/shariar-ayon-0601a7193' target="_blank" rel="noopener noreferrer">
                        <div className='w-20 h-20 flex items-center justify-center p-4 rounded-full border border-[#3A3C48] text-white hover:text-black bg-transparent hover:bg-white transition-all duration-300 ease-in'>
                            <FaLinkedinIn className='w-6 h-6' />
                        </div>
                    </a>
                    <a href="https://wa.me/8801726108060" target="_blank" rel="noopener noreferrer">
                        <div className='w-20 h-20 flex items-center justify-center p-4 rounded-full border border-[#3A3C48] text-white hover:text-black bg-transparent hover:bg-white transition-all duration-300 ease-in'>
                            <FaWhatsapp className='w-6 h-6' />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Follow;