import React from 'react';
import Link from 'next/link';
import greatVibes from '@/components/fonts/Vibes';
import { Button } from '@/components/ui/button';
import { ChevronsRight, Menu } from "lucide-react";
import montserrat from '@/components/fonts/Monserrat';
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { playfair } from '@/components/fonts/Disney';

const text = `< Shariar Ayon />`
export const Logo = () => {
    return (
        <Link href={'/'}>
            <h1 className={`text-white 2xl:text-3xl xl:text-3xl text-xl ${greatVibes.className}`}>
                {text}
            </h1>
        </Link>
    )
}
const Navbar = () => {
    return (
        <div className='bg-[#252734] sticky top-0 z-50 '>
            <div className='text-white flex items-center justify-between max-w-[1280px] mx-auto  p-6'>
                <div>
                    <Logo />
                </div>
                <div className={`2xl:flex xl:flex hidden items-center gap-10 ${montserrat.className}`}>
                    <Link className='text-base font-medium text-[#798792] hover:text-white transition-all duration-300' href={'/'}>Home</Link>
                    <Link className='text-base font-medium text-[#798792] hover:text-white transition-all duration-300' href={'#service'}>Service</Link>
                    <Link className='text-base font-medium text-[#798792] hover:text-white transition-all duration-300' href={'#projects'}>Projects</Link>
                    <Link className='text-base font-medium text-[#798792] hover:text-white transition-all duration-300' href={'#reviews'}>Reviews</Link>
                    <Link className='text-base font-medium text-[#798792] hover:text-white transition-all duration-300' href={'#contact'}>Contact</Link>
                </div>
                <div className='2xl:block xl:block hidden'>
                    <Button className="border border-[#3A3C48] bg-[#252734] hover:bg-[#2A2C39] transition-all duration-300 hover:border-[#2A2C39] py-7 rounded-4xl text-lg cursor-pointer">
                        <span className='flex items-center gap-2 px-6'>
                            <Link href={'#hire-me'} className={`${playfair.className}`}>Hire me</Link>
                            <ChevronsRight className="w-5 h-5 mt-1" />
                        </span>
                    </Button>
                </div>
                <div className='2xl:hidden xl:hidden block'>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Menu />
                        </SheetTrigger>
                        <SheetContent className={'bg-[#252734]'}>
                            <div className='pt-20 flex flex-col px-10'>
                                <Link className='text-xl py-4 font-medium text-[#798792] flex items-center justify-between' href={''}>
                                    <span>Home</span>
                                    <ChevronsRight />
                                </Link>
                                <Link className='text-xl py-4 font-medium text-[#798792] flex items-center justify-between' href={'/service'}>
                                    <span>Service</span>
                                    <ChevronsRight />
                                </Link>
                                <Link className='text-xl py-4 font-medium text-[#798792] flex items-center justify-between' href={''}>
                                    <span>Contact</span>
                                    <ChevronsRight />
                                </Link>
                                <Link className='text-xl py-4 font-medium text-[#798792] flex items-center justify-between' href={''}>
                                    <span>Projects</span>
                                    <ChevronsRight />
                                </Link>
                                <Link className='text-xl py-4 font-medium text-[#798792] flex items-center justify-between' href={''}>
                                    <span>Reviews</span>
                                    <ChevronsRight />
                                </Link>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </div>
    );
};

export default Navbar;