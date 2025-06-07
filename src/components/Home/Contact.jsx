import React from 'react';
import montserrat from '../fonts/Monserrat';
import Title from '../Shared/Title/Title';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import Swal from 'sweetalert2';

const CDiv = ({ text, value }) => {
    return (
        <div className=' bg-[#282A37] py-10 md:px-20 px-10'>
            <h1 className={`text-white w-fit ${montserrat.className}`}>{text}</h1>
            <p className={`mt-8 text-[#798792] w-fit ${montserrat.className}`}>{value}</p>
        </div>
    )
}

const Contact = () => {
    return (
        <div className='max-w-[1280px] mx-auto px-6 py-20 gap-20 flex 2xl:flex-row xl:flex-row flex-col items-start' id='hire-me'>
            <div className='flex flex-col gap-10 2xl:w-[30%] xl:w-[30%] w-full'>
                <CDiv text={'Phone:'} value={'+880-1726-108060'} />
                <CDiv text={'Email'} value={'shariar.ayon128@gmail.com'} />
                <CDiv text={'Website'} value={'https://portfolio-lake-five-93.vercel.app/'} />
            </div>
            <div>
                <Title header={'If you have any porject or need help. Contact me'} subheader={'If you have any porject or need help. Contact me'} />
                <form
                    onSubmit={async (e) => {
                        e.preventDefault();
                        const formData = new FormData(e.currentTarget);

                        const data = {
                            name: formData.get('name'),
                            email: formData.get('email'),
                            phone: formData.get('phone'),
                            subject: formData.get('subject'),
                            message: formData.get('message'),
                        };

                        // Show loading
                        Swal.fire({
                            title: 'Submitting...',
                            allowOutsideClick: false,
                            didOpen: () => {
                                Swal.showLoading();
                            },
                        });

                        try {
                            const res = await fetch('/api/contact', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify(data),
                            });

                            const result = await res.json();

                            if (res.ok) {
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Message Sent!',
                                    text: result.message,
                                });
                                e.target.reset(); // Optionally reset the form
                            } else {
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Oops...',
                                    text: result.error || 'Something went wrong.',
                                });
                            }
                        } catch (error) {
                            Swal.fire({
                                icon: 'error',
                                title: 'Network Error',
                                text: 'Could not submit the form. Please try again later.',
                            });
                        }
                    }}
                    className="space-y-8 mt-10"
                >
                    <div className="flex items-center 2xl:flex-row xl:flex-row flex-col gap-6">
                        <Input
                            type="text"
                            name="name"
                            className="rounded-none border border-[#3A3C48] py-8 px-6 text-lg text-white"
                            placeholder="Name"
                        />
                        <Input
                            type="email"
                            name="email"
                            className="text-white rounded-none border border-[#3A3C48] text-lg py-8 px-6"
                            placeholder="Email"
                        />
                    </div>
                    <div className="flex items-center 2xl:flex-row xl:flex-row flex-col gap-6">
                        <Input
                            type="tel"
                            name="phone"
                            className="rounded-none border border-[#3A3C48] text-lg py-8 px-6 text-white"
                            placeholder="Phone"
                        />
                        <Input
                            type="text"
                            name="subject"
                            className="rounded-none border border-[#3A3C48] text-lg py-8 px-6 text-white"
                            placeholder="Subject"
                        />
                    </div>
                    <Textarea
                        name="message"
                        className="rounded-none border border-[#3A3C48] text-lg py-20 px-6 text-white"
                        placeholder="Type your message here."
                    />
                    <Button
                        type="submit"
                        className="border border-[#3A3C48] bg-[#252734] hover:bg-[#2A2C39] transition-all duration-300 hover:border-[#2A2C39] py-7 rounded-4xl text-lg cursor-pointer"
                    >
                        <span className="flex items-center gap-2 px-6">
                            <span className={`${montserrat.className}`}>Submit Message</span>
                        </span>
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
