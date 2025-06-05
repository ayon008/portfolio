import React from 'react';
import montserrat from '../fonts/Monserrat';
import Title from '../Shared/Title/Title';

const CDiv = ({ text, value }) => {
    return (
        <div className=' bg-[#282A37] py-10 px-20'>
            <h1 className={`text-white w-fit ${montserrat.className}`}>{text}</h1>
            <p className={`mt-8 text-[#798792] w-fit ${montserrat.className}`}>{value}</p>
        </div>
    )
}

const Contact = () => {
    return (
        <div className='max-w-[1280px] mx-auto px-6 py-20 gap-20 flex items-start'>
            <div className=' flex flex-col gap-10 2xl:w-[30%] xl:w-[30%]'>
                <CDiv text={'Phone:'} value={'+880-1726-108060'} />
                <CDiv text={'Email'} value={'shariar.ayon128@gmail.com'} />
                <CDiv text={'Website'} value={'https://portfolio-lake-five-93.vercel.app/'} />
            </div>
            <div>
                <Title header={'If you have any porject or need help. Contact me'} subheader={'If you have any porject or need help. Contact me'}/>
            </div>
        </div>
    );
};

export default Contact;
