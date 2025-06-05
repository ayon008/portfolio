import React from 'react';
import Title from '../Shared/Title/Title';
import ProgressBar from '@/components/ui/ProgressBar'
const Skill = () => {
    return (
        <div className="bg-[#252734]">
            <div className="max-w-[1280px] mx-auto py-20 px-6 flex 2xl:flex-row xl:flex-row flex-col items-center justify-between gap-20">
                <div className="2xl:w-1/2 xl:w-1/2 w-full">
                    <Title
                        subheader={'Special Skills'}
                        header={'My Special Skill Field Here.'}
                    />
                </div>
                <div className="2xl:w-1/2 xl:w-1/2 w-full flex flex-col gap-y-8">
                    <div className="bg-[#2A2C39] p-10">
                        <ProgressBar value={85} name={'Communication'} />
                    </div>
                    <div className="bg-[#2A2C39] p-10">
                        <ProgressBar value={90} name={'Full Stack Development'} />
                    </div>
                    <div className="bg-[#2A2C39] p-10">
                        <ProgressBar value={94} name={'Wordpress Development'} />
                    </div>
                    <div className="bg-[#2A2C39] p-10">
                        <ProgressBar value={90} name={'Team Work'} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skill;