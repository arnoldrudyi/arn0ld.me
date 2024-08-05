'use client';

import React from 'react';

import { Title } from './title';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

interface JobContent {
    title: string;
    company_name: string;
    date: string;
    responsibilities: string[];
}

interface Job {
    trigger_title: string;
    content: JobContent;
}

interface Props {
   experience: Job[];
   className?: string;
}

export const Experience: React.FC<Props> = ({ experience, className }) => {
   return (
      <div className={className}>
        <Title size="md" text="Experience"/>
        <p className='max-w-[540px]'>My professional journey, showcasing my skills and accomplishments in software development and related fields.</p>
        <Tabs defaultValue='freelance' orientation='horizontal'>
          <TabsList>
            {experience.map((job) => (
                <TabsTrigger key={job.trigger_title} value={job.trigger_title}>{job.trigger_title.charAt(0).toUpperCase() + job.trigger_title.slice(1)}</TabsTrigger>
            ))}
          </TabsList>
          {experience.map((job) => (
            <TabsContent key={job.trigger_title} value={job.trigger_title}>
                <div className='max-w-[540px]'>
                    <p>{job.content.title} @ <b>{job.content.company_name}</b></p>
                    <p className='text-sm'>{job.content.date}</p>
                    <ul className='list-disc text-sm pl-4 pt-2'>
                        {job.content.responsibilities.map((responsibility, index) => (
                            <li className='py-1' key={index}>{responsibility}</li>
                        ))}
                    </ul>
                </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
   );
};