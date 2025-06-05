import React from 'react';
import montserrat from '../fonts/Monserrat';
import Image from 'next/image';
import shariar from '../../../public/New Project.png'
import { Button } from '../ui/button';
import { Download } from 'lucide-react';

const Banner = () => {
    return (
        <div className='flex 2xl:flex-row xl:flex-row flex-col-reverse items-center justify-between px-6 max-w-[1280px] mx-auto'>
            <div className={`2xl:w-1/2 xl:w-1/2 w-full`}>
                <h1 className='text-white text-5xl leading-loose'>Hello! I'm <br />
                    <span className={`${montserrat.className} text-7xl`}>Shariar Ayon</span>
                </h1>
                <p className={`text-[#798792] ${montserrat.className} mt-4 text-xl`}>Fullstack Developer and WordPress Specialist, building dynamic and  scalable web solutions.</p>
                <Button className="border border-[#3A3C48] bg-[#252734] hover:bg-[#2A2C39] transition-all duration-300 hover:border-[#2A2C39] py-7 rounded-4xl text-lg cursor-pointer mt-10">
                    <span className='flex items-center gap-2 px-6'>
                        <span>Get Resume</span>
                        <Download className="w-5 h-5 mt-1" />
                    </span>
                </Button>
            </div>
            <div className={`2xl:w-1/2 xl:w-1/2 w-full`}>
                <Image src={shariar} alt='shariar-ayon a Fullstack Developer and WordPress Specialist, building dynamic and  scalable web solutions.' />
            </div>
        </div>
    );
};

export default Banner;