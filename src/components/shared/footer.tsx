import React from 'react';

import { cn } from '@/lib/utils';
import { Container } from './container';

interface Props {
   className?: string;
}

export const Footer: React.FC<Props> = ({ className }) => {
   return (
      <footer className={cn('text-[1rem] pt-[70px] pb-5 md:pt-[100px] md:pb-10', className)}>
         <Container sectionId={5} title='footer' className='flex justify-between'>
            <span className='flex gap-4'>
               <a className='hover:underline' href='https://github.com/arnoldrudyi' target='_blank' rel="noreferrer"><p>Github</p></a>
               <p>·</p>
               <a className='hover:underline' href='https://www.linkedin.com/in/arnold-rudyi/' target='_blank' rel="noreferrer"><p>LinkedIn</p></a>
            </span>
            <span className='hidden md:block'>
               <p>built by Arnold Rudyi</p>
            </span>
         </Container>
      </footer>
   );
};