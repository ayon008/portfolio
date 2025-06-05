import React from 'react';
import { motion } from 'framer-motion';

const UpAnimation = ({ children }) => {
    return (
        <motion.div
            className='flex items-start justify-center gap-10'
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            viewport={{ once: true }}
        >
            {children}
        </motion.div>
    );
};


export default UpAnimation