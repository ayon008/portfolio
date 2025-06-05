import React, { useEffect, useState } from 'react';
import { motion } from "motion/react"
const ProgressBar = ({ value, name }) => {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const timeout = setTimeout(() => setProgress(value), 300)
        return () => clearTimeout(timeout)
    }, [value])
    return (
        <>
            <p className="text-[#798792] font-normal text-lg mb-6 flex items-center justify-between">
                <span>
                    {name}
                </span>
                <motion.span
                    initial={{ x: -200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className='mr-4'
                >
                    {value}%
                </motion.span>
            </p>
            <div className="w-full h-2 bg-[#40424D] rounded-md overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="h-full bg-white"
                />
            </div>
        </>
    );
};

export default ProgressBar;