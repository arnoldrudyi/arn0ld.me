'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

import { setup, draw } from '@/lib/sketch';

interface Props {
  className?: string;
}

const importFunction = () => import('react-p5').then((mod) => mod.default);
let Sketch: any = null;
if (typeof window !== 'undefined') {
  Sketch = dynamic(importFunction, { ssr: false });
}

export const P5jsContainer: React.FC<Props> = ({ className }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={className}>
      {mounted && (
        <Sketch setup={setup} draw={draw} />
      )}
    </div>
  )
}