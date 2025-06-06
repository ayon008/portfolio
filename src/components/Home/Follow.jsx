import React from 'react';
import Title from '../Shared/Title/Title';
import { Mail, Phone } from 'lucide-react';

const Follow = () => {
    return (
        <div className=' bg-[#282A37]'>
            <div className='py-28 px-6 max-w-[1280px] mx-auto'>
                <Title subheader={'Follow Me'} header={'Follow me on social media'} />
                <div className='mt-16 flex items-center 2xl:flex-row xl:flex-row flex-col justify-between gap-x-6'>
                    <div className='flex items-center gap-x-6'>
                        <div className='w-20 h-20 flex items-center justify-center p-4 rounded-full border border-[#3A3C48] text-white hover:text-black bg-transparent hover:bg-white transition-all duration-300 ease-in'>
                            <Phone className='w-6 h-6' />
                        </div>
                        <p className='text-white text-3xl'>+880-1726-108060</p>
                    </div>
                    <div className='flex items-center gap-x-6'>
                        <div className='w-20 h-20 flex items-center justify-center p-4 rounded-full border border-[#3A3C48] text-white hover:text-black bg-transparent hover:bg-white transition-all duration-300 ease-in'>
                            <Mail className='w-6 h-6' />
                        </div>
                        <p className='text-white text-3xl'>shariar.ayon128@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Follow;