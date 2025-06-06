import React from 'react';
import montserrat from '../fonts/Monserrat';
import Title from '../Shared/Title/Title';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';

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
                <Title header={'If you have any porject or need help. Contact me'} subheader={'If you have any porject or need help. Contact me'} />
                <form className='space-y-8 mt-10'>
                    <div className='flex items-center gap-6'>
                        <Input type="name" className={'rounded-none border border-[#3A3C48] py-8 px-6'} placeholder="Name" />
                        <Input type="email" className={'rounded-none border border-[#3A3C48] py-8 px-6'} placeholder="Email" />
                    </div>
                    <div className='flex items-center gap-6'>
                        <Input type="phone" className={'rounded-none border border-[#3A3C48] py-8 px-6'} placeholder="Phone" />
                        <Input type="text" className={'rounded-none border border-[#3A3C48] py-8 px-6'} placeholder="Subject" />
                    </div>
                    <Textarea className={'rounded-none border border-[#3A3C48] py-20 px-6'} placeholder="Type your message here." />
                    <Button className="border border-[#3A3C48] bg-[#252734] hover:bg-[#2A2C39] transition-all duration-300 hover:border-[#2A2C39] py-7 rounded-4xl text-lg cursor-pointer">
                        <span className='flex items-center gap-2 px-6'>
                            <span className={`${montserrat.className}`}>Submit Message</span>
                        </span>
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
