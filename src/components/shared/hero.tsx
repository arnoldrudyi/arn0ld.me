'use client';

import React from 'react';
import { TypeAnimation } from 'react-type-animation';

import { Title } from './title';
import { Button } from '@/components/ui';
import { ArrowRight } from 'lucide-react';
import { P5jsContainer } from './p5jsContainer';

interface Props {
   className?: string;
}

export const Hero: React.FC<Props> = ({ className }) => {
   return (
      <div className={className}>
        <div className="flex flex-col gap-7">
          <div className="flex flex-col leading-none">
            <TypeAnimation 
                sequence={[
                    'hello.',
                    3000,
                    'szió.',
                    3000,
                    'bonjour.',
                    3000,
                    'привіт.',
                    3000,
                    'hallo.',
                    3000,
                    'cześć.',
                    3000,
                    'hola.',
                    3000,
                    'ahoj.',
                    3000
                ]}
                wrapper='h1'
                speed={20}
                repeat={Infinity}
                className='text-2xl md:text-3xl min-h-[48px] md:min-h-[72px]'
                cursor={false}
                preRenderFirstString={true}
            />
            <Title size="lg" text="my name is"/>
            <Title size="lg" text="arnold"/>
          </div>
          <p className="max-w-[540px]">
            A web engineer based in Budapest, Hungary. My passion lies in crafting cutting-edge, transformative products at the intersection of technology and innovation.
          </p>
          <Button className="group relative" onClick={() => window.location.href = 'mailto:hi.arnoldrudyi@gmail.com'}>
            say hi
            <ArrowRight size={20} className="absolute opacity-0 right-5 transition duration-300 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100"/>
          </Button>
        </div>
        <P5jsContainer className="w-[500px] h-[500px] hidden xl:block"/>
      </div>
   );
};