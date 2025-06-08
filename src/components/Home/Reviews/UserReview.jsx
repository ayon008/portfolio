'use client'
import Image from 'next/image';
import people from '../../../../public/FireShot/New Project.jpg'
import people_a from '../../../../public/FireShot/New Project (1).jpg'
import people1 from '@/../public/Ellipse 146.png';
import people2 from '@/../public/Ellipse 147.png';
import people3 from '@/../public/Ellipse 148.png';
import people4 from '@/../public/Ellipse 149.png';
import people5 from '@/../public/Ellipse 150.png';
import people6 from '@/../public/Ellipse 151.png';
import { FaQuoteLeft } from '@react-icons/all-files/fa/FaQuoteLeft';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import { Button } from '@/components/ui/button';
import { ChevronsLeft, ChevronsRight } from 'lucide-react';
import UpAnimation from '@/components/Shared/Animations/UpAniamtiton';
const ReviewSwiper = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef(null);

    const BigSlide = ({ review, name, title, image }) => {
        return (
            <div className='p-10 bg-white w-full h-[420px] 2xl:block xl:block hidden'>
                <div className='w-[490px] flex items-start justify-between gap-10'>
                    <Image src={image} alt='Customer One' loading='lazy' height={340} className='w-[240px] h-[340px]' width={240} />
                    <div className='h-[300px] flex flex-col justify-between'>
                        <div className='w-fit ml-auto'>
                            <FaQuoteLeft color='red' size={'2.5rem'} />
                        </div>
                        <p className="text-base text-[#777] font-light leading-7 service-text">{review}</p>
                        <div className='space-y-2'>
                            <h3 className='text-2xl font-semibold text-black'>{name}</h3>
                            <p className="text-base text-[#777] font-light leading-7 service-text">{title}</p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

    const SmallSlide = ({ review, name, title, image }) => {
        return (
            <div className='p-10 bg-white w-full h-[420px] 2xl:block xl:block hidden'>
                <div className='w-[190px]'>
                    <div className='h-[300px] flex flex-col justify-between w-full'>
                        <div className='w-fit ml-auto'>
                            <FaQuoteLeft color='red' size={'2.5rem'} />
                        </div>
                        <p className="text-sm text-[#777] font-light leading-7 service-text">{review}</p>
                        <div className='flex gap-2 items-center'>
                            <Image src={image} width={50} height={50} alt='customer 2' className='w-[50px] h-[50px] rounded-full' />
                            <div className='space-y-2'>
                                <h3 className='text-xl font-semibold text-black'>{name}</h3>
                                <p className="text-sm text-[#777] font-light leading-7 service-text">{title}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


    const MobileSlide = ({ name, title, image, review }) => {
        return (
            <div className='bg-white w-[370px] space-y-6 p-10 mx-auto 2xl:hidden xl:hidden block h-full'>
                <div className='w-fit ml-auto'>
                    <FaQuoteLeft color='red' size={'3.5rem'} />
                </div>
                <p className="text-sm text-[#777] font-light leading-7 service-text">{review}</p>
                <div className='flex gap-2 items-center'>
                    <Image src={image} width={50} height={50} alt="customer 3" className='w-[50px] h-[50px] rounded-full' />
                    <div className='space-y-2'>
                        <h3 className='text-xl font-semibold text-black'>{name}</h3>
                        <p className="text-sm text-[#777] font-light leading-7 service-text">{title}</p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <UpAnimation>
            <div className='flex flex-col h-full relative w-full'>
                <div className='2xl:max-w-[1150px] xl:max-w-[1150px] 2xl:mx-auto xl:mx-auto'>
                    <Swiper
                        ref={swiperRef}
                        pagination={{
                            clickable: true,
                            el: '.swiper-pagination',
                        }}
                        initialSlide={2}
                        autoplay={{ delay: 3000 }}
                        spaceBetween={20}
                        slidesPerView={'auto'}
                        breakpoints={{
                            0: {
                                slidesPerView: 1, // 👈 1 slide on all screen sizes below 640px
                            },
                            640: {
                                slidesPerView: 'auto', // 👈 auto on medium screens and up
                            }
                        }}
                        modules={[Pagination]}
                        loop={true}
                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                        className="mySwiper review-items">
                        <SwiperSlide className="2xl:!w-[570px] xl:!w-[570px] !w-full !h-[290px]">
                            <BigSlide
                                image={people_a}
                                name={<>Rachel Bennett</>}
                                title={<>Manager</>}
                                review={<>The full stack dashboard you built is clean, fast, and super easy to manage. Love it!</>}
                            />
                            <MobileSlide
                                image={people_a}
                                name={<>Rachel Bennett</>}
                                title={<>Manager</>}
                                review={<>The full stack dashboard you built is clean, fast, and super easy to manage. Love it!</>}
                            />
                        </SwiperSlide>

                        <SwiperSlide className="2xl:!w-[270px] xl:!w-[270px] !w-full !h-[290px]">
                            <SmallSlide
                                image={people2}
                                name={<>Carlos Ramirez</>}
                                title={<>CEO</>}
                                review={<>Our WordPress site finally looks premium. You nailed it!</>}
                            />
                            <MobileSlide
                                image={people2}
                                name={<>Carlos Ramirez</>}
                                title={<>CEO</>}
                                review={<>Our WordPress site finally looks premium. You nailed it!</>}
                            />
                        </SwiperSlide>

                        <SwiperSlide className="2xl:!w-[270px] xl:!w-[270px] !w-full !h-[290px]">
                            <SmallSlide
                                image={people3}
                                name={<>Emily Walker</>}
                                title={<>Manager</>}
                                review={<>The custom API integration saved us hours every week. Great job!</>}
                            />
                            <MobileSlide
                                image={people3}
                                name={<>Emily Walker</>}
                                title={<>Manager</>}
                                review={<>The custom API integration saved us hours every week. Great job!</>}
                            />
                        </SwiperSlide>

                        <SwiperSlide className="2xl:!w-[570px] xl:!w-[570px] !w-full !h-[290px]">
                            <BigSlide
                                image={people}
                                name={<>Devon Carter</>}
                                title={<>Cleaning Business Owner</>}
                                review={<>The site you built loads fast and brought in leads within days. Solid work!</>}
                            />
                            <MobileSlide
                                image={people}
                                name={<>Devon Carter</>}
                                title={<>Cleaning Business Owner</>}
                                review={<>The site you built loads fast and brought in leads within days. Solid work!</>}
                            />
                        </SwiperSlide>

                        <SwiperSlide className="2xl:!w-[270px] xl:!w-[270px] !w-full !h-[290px]">
                            <SmallSlide
                                image={people6}
                                name={<>Angela Ramirez</>}
                                title={<>Sales Director</>}
                                review={<>Your full stack solution helped us scale without tech headaches.</>}
                            />
                            <MobileSlide
                                image={people6}
                                name={<>Angela Ramirez</>}
                                title={<>Sales Director</>}
                                review={<>Your full stack solution helped us scale without tech headaches.</>}
                            />
                        </SwiperSlide>
                    </Swiper>
                    <div className='absolute z-40 left-1/2 -translate-x-1/2 md:bottom-0 -bottom-5 flex items-center gap-2'>
                        <Button
                            onClick={() => swiperRef.current?.swiper.slidePrev()}
                            variant="outline"
                            className="bg-transparent text-[#798792] border-[#3A3C48] p-4 rounded-full 2xl:w-20 2xl:h-20 xl:w-20 xl:h-20 w-14 h-14 flex items-center justify-center"
                        >
                            <ChevronsLeft className="w-6 h-6" />
                        </Button>
                        <Button
                            onClick={() => swiperRef.current?.swiper.slideNext()}
                            variant="outline"
                            className="bg-transparent text-[#798792] border-[#3A3C48] p-4 rounded-full 2xl:w-20 2xl:h-20 xl:w-20 xl:h-20 w-14 h-14 flex items-center justify-center"
                        >
                            <ChevronsRight className="w-6 h-6" />
                        </Button>
                    </div>
                </div>
            </div>
        </UpAnimation>
    );
};

export default ReviewSwiper