import React from 'react';
import montserrat from '../fonts/Monserrat';
import Image from 'next/image';
import shariar from '@/../public/New Project.png'
import { Button } from '../ui/button';
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";
import { FaWhatsapp } from '@react-icons/all-files/fa/FaWhatsapp';
import { Download, Mail } from 'lucide-react';
import { playfair } from '../fonts/Disney';
const Banner = () => {
    return (
        <div className='relative w-full'>
            <div className='flex 2xl:flex-row xl:flex-row flex-col-reverse gap-10 md:gap-0 items-center justify-between px-6 max-w-[1280px] mx-auto pt-10 md:pb-0 pb-20'>
                <div className={`2xl:w-1/2 xl:w-1/2 w-full z-40`}>
                    <h1 className={`text-white md:text-5xl text-3xl leading-loose ${playfair.className}`}>Hello! I'm <br />
                        <span className={`${playfair.className} md:text-7xl text-5xl`}>Shariar Ayon</span>
                    </h1>
                    <p className={`text-[#798792] ${montserrat.className} mt-4 md:text-xl text-base`}>Fullstack Developer and WordPress Specialist, building dynamic and  scalable web solutions.</p>
                    <a href='/Shariar_Ayon_CV.pdf' target="_blank" rel="noopener noreferrer">
                        <Button className="border border-[#3A3C48] bg-[#252734] hover:bg-[#2A2C39] transition-all duration-300 hover:border-[#2A2C39] py-7 rounded-4xl text-lg cursor-pointer mt-10">
                            <span className='flex items-center gap-2 px-6'>
                                <span className={`${playfair.className}`}>Get Resume</span>
                                <Download className="w-5 h-5 mt-1" />
                            </span>
                        </Button>
                    </a>
                </div>
                <div className="2xl:w-1/2 xl:w-1/2 w-full relative z-40">
                    <div className="relative">
                        {/* Main Profile Image Container */}
                        <div className="relative z-40">
                            <Image
                                src={shariar}
                                className="relative z-40"
                                alt="shariar-ayon a Fullstack Developer and WordPress Specialist, building dynamic and scalable web solutions."
                            />
                        </div>
                        {/* Curved Navigation Line */}
                        <svg
                            className="absolute md:top-0 md:right-0 md:block hidden w-64 h-full pointer-events-none"
                            viewBox="0 0 200 400"
                            fill="none"
                        >
                            <path
                                d="M50 50 Q150 100 150 200 Q150 300 50 350"
                                stroke="rgba(255,255,255,0.2)"
                                strokeWidth="2"
                                fill="none"
                            />
                        </svg>
                        {/* Navigation Icons */}
                        <div className="absolute top-0 right-0 w-64 h-full z-40 md:block hidden">
                            {/* Facebook Icon */}
                            <a href="https://www.facebook.com/shariar.oyon/" target="_blank" rel="noopener noreferrer">
                                <div className="absolute md:top-28 md:right-40 transform translate-x-4">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow cursor-pointer group">
                                        <FaFacebookF className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" />
                                    </div>
                                </div>
                            </a>

                            {/* Settings Icon */}
                            <a href='www.linkedin.com/in/shariar-ayon-0601a7193' target="_blank" rel="noopener noreferrer">
                                <div className="absolute top-48 right-24 transform translate-x-8">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow cursor-pointer group">
                                        <FaLinkedinIn className="w-5 h-5 text-gray-600 group-hover:scale-110 transition-transform group-hover:rotate-90" />
                                    </div>
                                </div>
                            </a>

                            {/* Mail Icon */}
                            <a href="mailto:shariar.ayon128@gmail.com">
                                <div className="absolute top-72 right-[70px] transform translate-x-8">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow cursor-pointer group">
                                        <Mail className="w-5 h-5 text-red-500 group-hover:scale-110 transition-transform" />
                                    </div>
                                </div>
                            </a>

                            {/* LinkedIn Icon */}
                            <a href="https://wa.me/8801726108060" target="_blank" rel="noopener noreferrer">
                                <div className="absolute top-[400px] right-20 transform translate-x-4">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow cursor-pointer group">
                                        <FaWhatsapp className="w-5 h-5 text-blue-700 group-hover:scale-110 transition-transform" />
                                    </div>
                                </div>
                            </a>
                        </div>
                        {/* Profile Info Card */}
                        <div className="absolute -bottom-6 left-6 right-16 bg-[#2A2C39] md:block hidden rounded-lg shadow-xl p-6 z-40">
                            <h2 className={`text-xl text-white mb-2 ${montserrat.className}`}>Shariar Ayon</h2>
                            <p className={`text-white text-sm mb-4 ${montserrat.className}`}>Full stack and wordpress developer with 3+ experience</p>
                            <div className="flex space-x-3">
                                <Button className="border border-[#3A3C48] bg-[#252734] hover:bg-[#2A2C39] transition-all duration-300 hover:border-[#2A2C39] p-3 rounded-4xl text-sm cursor-pointer">
                                    <span className='flex items-center gap-2 px-6'>
                                        <span className={`${playfair.className}`}>Hire Me</span>
                                    </span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='absolute top-0 left-0 z-20 md:block hidden'>
                    <div className="w-[800px] h-[600px] relative overflow-hidden">
                        <svg
                            className="absolute top-0 left-0 w-full h-full"
                            viewBox="0 0 800 600"
                            preserveAspectRatio="none"
                        >
                            {[100, 150, 200, 250, 300].map((radius, i) => (
                                <path
                                    key={i}
                                    d={`M 0 ${radius} A ${radius} ${radius} 0 0 0 ${radius} 0`}
                                    fill="none"
                                    stroke="rgb(71, 85, 105)"
                                    strokeWidth="1"
                                    opacity="0.6"
                                />
                            ))}
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;