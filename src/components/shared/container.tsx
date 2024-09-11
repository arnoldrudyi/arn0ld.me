'use client';

import React, { PropsWithChildren, useRef, useEffect } from 'react';
import { useIntersection } from 'react-use';

import { useSectionStore } from '@/app/store/section';
import { cn } from '@/lib/utils';

interface Props {
   className?: string;
   sectionId?: number;
   title?: string;
}

export const Container: React.FC<PropsWithChildren<Props>> = ({ className, children, sectionId = 1, title }) => {
   const setActiveSectionId = useSectionStore((state) => state.setActiveId);
   const intersectionRef = useRef(null);
   const intersection = useIntersection(intersectionRef, {
     root: null,
     rootMargin: '0px',
     threshold: 1,
   });

   useEffect(() => {
     if (intersection?.isIntersecting) {
      setActiveSectionId(Math.min(sectionId, 4));
     }
   }, [sectionId, intersection?.isIntersecting]);

   return (
      <div className={cn('mx-auto max-w-[350px] overflow-hidden sm:max-w-[500px] md:max-w-[650px] md:overflow-visible lg:max-w-[800px] xl:max-w-[1200px] 2xl:max-w-[1300px]', className)} ref={intersectionRef} id={title}>{children}</div>
   );
};