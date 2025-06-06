import Image from 'next/image';
import React, { useRef, useState, useEffect } from 'react';
import CountUp from 'react-countup';
import { motion, useInView } from 'framer-motion';
import image1 from '@/../public/counterup-icon-1.webp';
import image2 from '@/../public/counterup-icon-2.webp';
import image3 from '@/../public/counterup-icon-3.webp';
import montserrat from '../fonts/Monserrat';

const CounterItem = ({ img, end, text }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [start, setStart] = useState(false);

    useEffect(() => {
        if (isInView) {
            setStart(true);
        }
    }, [isInView]);

    return (
        <motion.div
            ref={ref}
            className='flex md:items-start items-center md:flex-row flex-col justify-center gap-10'
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
        >
            <div className='border border-[#3A3C48] w-fit p-6 rounded-3xl mt-2'>
                <Image src={img} alt='' />
            </div>
            <div className='text-white'>
                <h1 className='text-6xl w-fit mx-auto'>
                    {start && <CountUp end={end} duration={2} />}+
                </h1>
                <p className={`mt-6 text-[#798792] md:text-left text-center ${montserrat.className}`}>{text}</p>
            </div>
        </motion.div>
    );
};

const Counts = () => {
    return (
        <div className='bg-[#282A37]'>
            <div className='max-w-[1280px] mx-auto px-6 py-28 grid 2xl:grid-cols-3 xl:grid-cols-3 grid-cols-1 gap-10'>
                <CounterItem img={image1} end={10} text="Happy Clients" />
                <CounterItem img={image2} end={50} text="Project Completed" />
                <CounterItem img={image3} end={4} text="Years of Experience" />
            </div>
        </div>
    );
};

export default Counts;
