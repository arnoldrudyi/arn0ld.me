import React from 'react';

import { Title } from './title';
import { cn } from '@/lib/utils';

interface Props {
   tech_stack: string[];
   className?: string;
}

export const About: React.FC<Props> = ({ className, tech_stack }) => {
   return (
      <div className={cn('max-w-[540px]', className)}>
        <Title size="md" text="About me"/>
        <p>
          I am a self-taught <b>Software Developer</b> with over <b>2.5 years of coding experience</b>. I specialize mostly on <b>backend development</b>, but I also enjoy creating visually appealing web pages using industry-leading frameworks.
        </p>
        <p>
          My areas of interest also include machine learning, generative art, and the science of light.
        </p>
        <p>
          Here are some technologies I have been working with:
        </p>
        <ul className="grid grid-cols-[repeat(2,minmax(230px,10px))] list-disc max-w-[540px] pl-5">
          {tech_stack.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
        <p>
          Outside of work, I am interested in following the latest advancements in computer science technologies.
        </p>
      </div>
   );
};