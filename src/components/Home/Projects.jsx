
import React, { useRef } from 'react';
import Title from '../Shared/Title/Title';
import { Button } from '../ui/button';
import { ChevronsLeft, ChevronsRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import Image from 'next/image';
import janitorial_appointment from '@/../public/FireShot/FireShot Capture 001 - Janitorial Appointments - Commercial Cleaning Leads_ - [www.janitorialappointment.com].png';
import { playfair } from '../fonts/Disney';
import montserrat from '../fonts/Monserrat';
import echo_mall from '@/../public/FireShot/FireShot Capture 003 - EchoMall - [echo-mall.web.app].png';
import afs_foiling from '../../../public/FireShot/FireShot Capture 006 - The foiling spirit since 2009 - AFS - [afs-foiling.com].png'


const ProjectCard = ({
    title,
    description,
    imageMain,
    imageOverlay,
    technologies = [],
    liveLink,
    fonts: { playfair, montserrat }
}) => {
    return (
        <div className='flex items-center justify-between gap-10 flex-col md:flex-row'>
            {/* Image Section */}
            <div className='bg-[#2A2C39] md:w-1/2 w-full h-[450px] relative'>
                <div className='overflow-hidden flex items-center justify-center h-full project-image relative'>
                    <Image src={imageMain} alt={`${title} preview`} className='w-[350px] -rotate-45' />
                </div>
                <div className='overflow-hidden w-[450px] h-[380px] absolute bottom-0 left-1/2 -translate-x-1/2 opacity-100'>
                    <Image src={imageOverlay} alt={`${title} full`} className='w-full' />
                </div>
            </div>

            {/* Text Section */}
            <div className='md:w-1/2 w-full relative bg-[#2A2C39] h-[450px] p-10 text-[#798792] space-y-3'>
                <h2 className={`${playfair.className} text-xl text-white tracking-wider`}>
                    Project Name: {title}
                </h2>
                <p className={`${montserrat.className} text-base`}>
                    {description}
                </p>
                <h2 className={`${playfair.className} text-lg text-white tracking-wider`}>
                    Technology Used:
                </h2>
                <div className='space-y-3 pl-4'>
                    {technologies.map((tech, index) => (
                        <div key={index} className='flex items-center gap-2'>
                            <ChevronsRight className='w-5 h-5' />
                            <p>{tech}</p>
                        </div>
                    ))}
                </div>
                <a href={liveLink} target="_blank" rel="noopener noreferrer" className='text-xs absolute bottom-8 right-8'>{liveLink}</a>
            </div>
        </div>
    )
}


const Projects = () => {
    const swiperRef = useRef(null);
    return (
        <div className='py-28 px-6 relative max-w-[1280px] mx-auto' id='projects'>
            <Title subheader={'Awesome Portfolio'}
                header={'My Complete Projects'}
            />
            <div className='absolute md:top-28 md:right-6 hidden md:flex gap-6'>
                <Button
                    onClick={() => swiperRef.current?.slidePrev()}
                    variant="outline"
                    className="bg-transparent text-[#798792] border-[#3A3C48] p-4 rounded-full w-20 h-20 flex items-center justify-center"
                >
                    <ChevronsLeft className="w-6 h-6" />
                </Button>

                <Button
                    onClick={() => swiperRef.current?.slideNext()}
                    variant="outline"
                    className="bg-transparent text-[#798792] border-[#3A3C48] p-4 rounded-full w-20 h-20 flex items-center justify-center"
                >
                    <ChevronsRight className="w-6 h-6" />
                </Button>
            </div>
            <div className='absolute left-1/2 -translate-x-1/2 bottom-0 md:hidden flex gap-6'>
                <Button
                    onClick={() => swiperRef.current?.slidePrev()}
                    variant="outline"
                    className="bg-transparent text-[#798792] border-[#3A3C48] p-4 rounded-full w-20 h-20 flex items-center justify-center"
                >
                    <ChevronsLeft className="w-6 h-6" />
                </Button>

                <Button
                    onClick={() => swiperRef.current?.slideNext()}
                    variant="outline"
                    className="bg-transparent text-[#798792] border-[#3A3C48] p-4 rounded-full w-20 h-20 flex items-center justify-center"
                >
                    <ChevronsRight className="w-6 h-6" />
                </Button>
            </div>
            <div className='mt-16'>
                <Swiper
                    ref={swiperRef}
                    slidesPerView={1}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    loop={true}
                >
                    <SwiperSlide>
                        <ProjectCard
                            title="Janitorial Appointment"
                            description="Janitorial Appointment is a custom-built full-stack website developed using Next.js. It leverages core Next.js features such as Server-Side Rendering (SSR), Static Site Generation (SSG), and Incremental Static Regeneration (ISR) to enhance performance and improve SEO effectiveness."
                            liveLink={'https://www.janitorialappointment.com/'}
                            imageMain={janitorial_appointment}
                            imageOverlay={janitorial_appointment}
                            fonts={{ playfair, montserrat }}
                            technologies={[
                                'HTML/CSS (Tailwind CSS)',
                                'Next JS (React JS)',
                                'Express JS (Node JS)',
                                'Firebase',
                                'MongoDB (Database)'
                            ]}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProjectCard
                            title="Echo-Mall"
                            description="Echo-Mall is a custom-built full-stack e-commerce website developed with React and Next.js. It utilizes powerful features like Server-Side Rendering (SSR), Static Site Generation (SSG), and Incremental Static Regeneration (ISR) to deliver high performance, improved SEO, and a seamless user experience."
                            imageMain={echo_mall}
                            imageOverlay={echo_mall}
                            fonts={{ playfair, montserrat }}
                            liveLink={'https://echo-mall.web.app/'}
                            technologies={[
                                'HTML/CSS (Tailwind CSS)',
                                'Next JS (React JS)',
                                'Express JS (Node JS)',
                                'Firebase',
                                'MongoDB (Database)'
                            ]}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProjectCard
                            title="AfS Foiling"
                            description="AfS Foiling is a responsive e-commerce website built with WordPress and WooCommerce, offering a smooth shopping experience with secure checkout and easy product management."
                            imageMain={afs_foiling}
                            imageOverlay={afs_foiling}
                            fonts={{ playfair, montserrat }}
                            liveLink={'https://afs-foiling.com/'}
                            technologies={[
                                'WordPress',
                                'WooCommerce',
                                'PHP',
                                'HTML/CSS',
                                'JavaScript',
                                'MySQL'
                            ]}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProjectCard
                            title="AfS Foiling"
                            description="AfS Foiling is a responsive e-commerce website built with WordPress and WooCommerce, offering a smooth shopping experience with secure checkout and easy product management."
                            imageMain={afs_foiling}
                            imageOverlay={afs_foiling}
                            fonts={{ playfair, montserrat }}
                            liveLink={'https://afs-foiling.com/'}
                            technologies={[
                                'WordPress',
                                'WooCommerce',
                                'PHP',
                                'HTML/CSS',
                                'JavaScript',
                                'MySQL'
                            ]}
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Projects;