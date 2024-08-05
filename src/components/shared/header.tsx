'use client';

import React, { useEffect, useState } from 'react';
import { FolderClosed, House, Info, Sparkles, Moon, SunMedium } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Switch } from '../ui';
import { useModeStore } from '@/app/store/mode';
import { useSectionStore } from '@/app/store/section';

interface Props {
   className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
   const darkMode = useModeStore((state) => state.darkMode);
   const switchMode = useModeStore((state) => state.switchMode);
   const activeSectionId = useSectionStore((state) => state.activeId);
   const [isRounded, setIsRounded] = useState(false);
   const [activeSectionPosition, setActiveSectionPosition] = useState(0);
   
   useEffect(() => {
      const handleChange = (event: MediaQueryListEvent) => {
         if (event.matches && !darkMode) {
            switchMode();
         } else if (!event.matches && darkMode) {
            switchMode();
         }
      }

      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      mediaQuery.addEventListener('change', handleChange);
      return () => {
         mediaQuery.removeEventListener('change', handleChange);
      }
   }, [darkMode, switchMode]);

   useEffect(() => {
      if (darkMode) {
         document.documentElement.classList.add('dark');
      } else {
         document.documentElement.classList.remove('dark');
      }
   }, [darkMode]);

   useEffect(() => {
      const iconContainer = document.querySelector('.icon-container');
      if (iconContainer) {
         const icons = document.querySelectorAll('[data-icon]');
         if (icons[activeSectionId - 1]) {
           const parentRect = iconContainer?.getBoundingClientRect();
           const iconRect = icons[activeSectionId - 1].getBoundingClientRect();
           setActiveSectionPosition(iconRect.left - parentRect.left);
         }
      }
    }, [activeSectionId]);
   
   if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
         if (scrollY != 0) {
            setIsRounded(true);
         } else {
            setIsRounded(false);
         }
      });
   };
   
   return (
      <div className={cn('absolute md:fixed w-full top-5 flex justify-center z-20', className)}>
        <div className='mx-auto w-[350px] sm:w-[500px] flex justify-end md:hidden'>
            {darkMode ? <Moon width={30} height={30} className='cursor-pointer' onClick={() => switchMode()} /> : <SunMedium width={30} height={30} className='cursor-pointer' onClick={() => switchMode()} />}
        </div>
        <div className={`hidden md:flex h-14 justify-center bg-background px-8 rounded-2xl transition-shadow duration-300 ${isRounded && 'shadow-md dark:border-b dark:bg-black dark:border-white/20 dark:shadow-lg dark:shadow-black/50 dark:shadow-inner dark:shadow-white/10'}`}>
            <div className='relative flex items-center pr-8 w-fit gap-24 icon-container'>
               <span className={`absolute transition-transform duration-300 h-[38px] w-[38px] bg-black/10 dark:bg-white/15 rounded-md`} style={{transform: `translate(${activeSectionPosition - 4}px`}}/>
                <House width={30} height={30} className='cursor-pointer' data-icon='1' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
                <a href='/#about'><Info width={30} height={30} className='cursor-pointer' data-icon='2' /></a>
                <a href='/#experience'><Sparkles width={30} height={30} className='cursor-pointer' data-icon='3' /></a>
                <a href='/#projects'><FolderClosed width={30} height={30} className='cursor-pointer' data-icon='4' /></a>
            </div>
            <span className='h-full w-[1px] bg-black/10 dark:bg-white/15 py-3'/>
            <div className='flex justify-center items-center pl-6'>
                <Switch checked={darkMode} onCheckedChange={switchMode}/>
            </div>
        </div>
      </div>
   );
};