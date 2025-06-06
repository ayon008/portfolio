
import React from 'react';
import Title from '../Shared/Title/Title';
import { Button } from '../ui/button';
import { ChevronsLeft, ChevronsRight } from 'lucide-react';

const Projects = () => {
    return (
        <div className='py-28 px-6 relative max-w-[1280px] mx-auto' id='projects'>
            <Title subheader={'Awesome Portfolio'}
                header={'My Complete Projects'}
            />
            <div className='absolute top-28 right-6 flex gap-6'>
                <Button
                    variant="outline"
                    className="bg-transparent text-[#798792] border-[#3A3C48] p-4 rounded-full w-20 h-20 flex items-center justify-center"
                >
                    <ChevronsLeft className="w-6 h-6" />
                </Button>

                <Button
                    variant="outline"
                    className="bg-transparent text-[#798792] border-[#3A3C48] p-4 rounded-full w-20 h-20 flex items-center justify-center"
                >
                    <ChevronsRight className="w-6 h-6" />
                </Button>

            </div>
        </div>
    );
};

export default Projects;