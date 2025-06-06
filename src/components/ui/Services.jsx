import React from 'react';
import Title from "@/components/Shared/Title/Title";
import development from '@/../public/service-icon-2.webp'
import Image from "next/image";
import { ChevronsRight } from "lucide-react";
import UpAnimation from '../Shared/Animations/UpAniamtiton';

const Services = () => {
    return (
        <div className="bg-[#2A2C39]" id='service'>
            <UpAnimation>
                <div className="max-w-[1280px] mx-auto px-6 py-20">
                    <Title
                        subheader={'My Services'}
                        header={'Service Provide For My Clients.'}
                    />
                    <div className="grid 2xl:grid-cols-3 xl:grid-cols-3 grid-cols-1 md:gap-12 gap-6 mt-16">
                        <div className="bg-[#252734] md:p-16 p-8">
                            <Image src={development} alt="development" className='md:w-auto md:h-auto w-[40px] h-[40px]' />
                            <p className="uppercase text-white md:text-2xl text-xl font-semibold md:my-16 my-8 leading-10">full stack development</p>
                            <div className="space-y-4 text-[#798792]">
                                <div className="flex items-center gap-2">
                                    <ChevronsRight className="w-5 h-5" />
                                    <p>HTML/CSS</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <ChevronsRight className="w-5 h-5" />
                                    <p>JavaScript</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <ChevronsRight className="w-5 h-5" />
                                    <p>React.js</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <ChevronsRight className="w-5 h-5" />
                                    <p>Next.js</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <ChevronsRight className="w-5 h-5" />
                                    <p>Node.js</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <ChevronsRight className="w-5 h-5" />
                                    <p>Express.js</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <ChevronsRight className="w-5 h-5" />
                                    <p>MongoDB</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <ChevronsRight className="w-5 h-5" />
                                    <p>Firebase</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <ChevronsRight className="w-5 h-5" />
                                    <p>Git & GitHub</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#252734] md:p-16 p-8">
                            <Image src={development} alt="development" className='md:w-auto md:h-auto w-[40px] h-[40px]' />
                            <p className="uppercase text-white md:text-2xl text-xl font-semibold md:my-16 my-8">WordPress Development</p>
                            <div className="space-y-4 text-[#798792]">
                                <div className="flex items-center gap-2">
                                    <ChevronsRight className="w-5 h-5" />
                                    <p>WordPress Theme Customization</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <ChevronsRight className="w-5 h-5" />
                                    <p>Elementor & WPBakery</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <ChevronsRight className="w-5 h-5" />
                                    <p>WooCommerce Integration</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <ChevronsRight className="w-5 h-5" />
                                    <p>Custom Post Types</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <ChevronsRight className="w-5 h-5" />
                                    <p>ACF (Advanced Custom Fields)</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <ChevronsRight className="w-5 h-5" />
                                    <p>Plugin Development & Integration</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <ChevronsRight className="w-5 h-5" />
                                    <p>Performance Optimization</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <ChevronsRight className="w-5 h-5" />
                                    <p>Security & Maintenance</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <ChevronsRight className="w-5 h-5" />
                                    <p>Website Migration & Backup</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#252734] md:p-16 p-8">
                            <Image src={development} alt="development" className='md:w-auto md:h-auto w-[40px] h-[40px]' />
                            <p className="uppercase text-white md:text-2xl text-xl font-semibold md:my-16 my-8">API Development & Automation</p>
                            <div className="space-y-4 text-[#798792]">
                                <div className="flex items-center gap-2">
                                    <ChevronsRight className="w-5 h-5" />
                                    <p>REST API & GraphQL</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <ChevronsRight className="w-5 h-5" />
                                    <p>Third-party API Integration<br /> (Stripe, PayPal, etc.)</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <ChevronsRight className="w-5 h-5" />
                                    <p>Webhooks & Event-driven<br /> Architecture</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <ChevronsRight className="w-5 h-5" />
                                    <p>Authentication (OAuth, JWT)</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <ChevronsRight className="w-5 h-5" />
                                    <p>Python & Node.js Scripting</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <ChevronsRight className="w-5 h-5" />
                                    <p>Task Automation with Cron Jobs</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <ChevronsRight className="w-5 h-5" />
                                    <p>No-code Automation (Zapier, Make)</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <ChevronsRight className="w-5 h-5" />
                                    <p>Data Scraping & ETL Scripts</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </UpAnimation>
        </div>
    );
};

export default Services;