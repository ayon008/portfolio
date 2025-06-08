
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
import afs_games from '../../../public/FireShot/FireShot Capture 004 - Afs Games - [games.afs-foiling.com].png'
import bistro_boss from '../../../public/FireShot/FireShot Capture 009 - Bistro Boss - [bistro-boss-final-ea0a9.web.app].png'
import uicc from '../../../public/FireShot/FireShot Capture 008 - UICC – Uttara International Language Institute - [uicc.infinityfreeapp.com].png'

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
                    <Image src={imageMain} alt={`${title} preview`} width={350} height={500} className='w-[350px] -rotate-45' />
                </div>
                <div className='overflow-hidden w-[450px] h-[380px] absolute bottom-0 left-1/2 -translate-x-1/2 opacity-100'>
                    <Image src={imageOverlay} alt={`${title} full`} width={450} height={380} className='w-full' />
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
                                'MongoDB (Database) and Stripe (Payment Gateway)'
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
                                'MongoDB (Database) and Stripe (Payment Gateway)'
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
                            title="AfS Games"
                            description="AfS Games is a modern game point dashboard built with Next.js, offering a fast and responsive user interface for tracking and managing game points. Designed for scalability and performance, it provides users with an intuitive experience and real-time updates."
                            imageMain={afs_games}
                            imageOverlay={afs_games}
                            fonts={{ playfair, montserrat }}
                            liveLink={'https://games.afs-foiling.com/'}
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
                            title="Bistro Boss"
                            description="Bistro Boss is a full-stack restaurant app with online ordering, Stripe payments, and an admin dashboard for managing users, orders, and menus."
                            imageMain={bistro_boss}
                            imageOverlay={bistro_boss}
                            fonts={{ playfair, montserrat }}
                            liveLink={'https://bistro-boss-final-ea0a9.web.app/'}
                            technologies={[
                                'HTML/CSS (Tailwind CSS)',
                                'Next JS (React JS)',
                                'Express JS (Node JS)',
                                'Firebase',
                                'MongoDB (Database) and Stripe (Payment Gateway)'
                            ]}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProjectCard
                            title="UICC (Student Agency)"
                            description="UICC is a landing page for a student agency, showcasing services and testimonials with a modern design and responsive layout."
                            imageMain={uicc}
                            imageOverlay={uicc}
                            fonts={{ playfair, montserrat }}
                            technologies={[
                                'Wordpress',
                                'HTML/CSS',
                                'JavaScript',
                            ]}
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Projects;