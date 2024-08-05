'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

import { Title } from './title';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '../ui';

interface Project {
    title: string;
    description: string;
    icon: string;
    stack: string[];
    link: string;
}

interface Props {
   projects: Project[];
   className?: string;
}

export const PetProjects: React.FC<Props> = ({ projects, className }) => {
   return (
      <div className={className}>
        <Title size="md" text="Pet projects"/>
        <p className='max-w-[540px]'>In my spare time, I focus on developing easy-to-use solutions to address common real-world problems. Below, you can explore some of my most recent projects.</p>
        <Carousel className='max-w-[740px]' opts={{
            slidesToScroll: typeof(window) !== 'undefined' && window.innerWidth < 768 ? 1 : 2,
        }}>
            <CarouselContent className='-ml-14'>
                {projects.map((project) => (
                    <CarouselItem key={project.title} className='group md:basis-1/2 pl-14 cursor-pointer'>
                        <a href={project.link} target="_blank" rel="noreferrer">
                            <div className='flex flex-col gap-3'>
                                <div className='flex justify-center bg-card rounded-2xl w-auto min-h-[240px]'>
                                    <Image src={`/${project.icon}`} alt={project.title.toLowerCase()} width={140} height={140} className='object-contain'/>
                                </div>
                                <div className='relative flex items-center transition duration-300 w-fit'>
                                    <Title size="sm" text={project.title} className='font-medium' />
                                    <ArrowUpRight className='absolute -right-7 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0' />
                                </div>
                                <p className='w-auto'>{project.description}</p>
                                <p className='w-auto text-sm text-secondary'>{project.stack.join(', ') }</p>
                            </div>
                        </a>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <div className='flex gap-4 justify-end mt-2'>
                <CarouselPrevious />
                <CarouselNext />
            </div>
        </Carousel>
      </div>
   );
};