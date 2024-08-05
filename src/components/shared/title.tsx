import React from 'react';

import { cn } from '@/lib/utils';

type TitleSize = 'sm' | 'md' | 'lg';

interface Props {
   size?: TitleSize;
   className?: string;
   text: string;
}

export const Title: React.FC<Props> = ({ className, size = 'sm', text }) => {
   const mapTagBySize ={
     sm: 'h3',
     md: 'h2',
     lg: 'h1'
   } as const;

   const mapClassNameBySize = {
     sm: 'text-xl',
     md: 'text-[2.12rem] font-medium md:text-2xl md:font-default',
     lg: 'text-2xl md:text-3xl'
   } as const;

   return React.createElement(
     mapTagBySize[size],
     {
       className: cn(className, mapClassNameBySize[size])
     },
     text
   )
};