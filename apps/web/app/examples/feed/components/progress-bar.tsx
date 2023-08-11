'use client';

import { useEffect, useState } from 'react';
import { Progress } from 'ui/components/progress';
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
  percentage: number;
  defaultProgress?: number;
}

export default function ProgressBar({
  className,
  percentage,
  defaultProgress = 13,
}: Props) {
  const [progress, setProgress] = useState(defaultProgress);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(percentage), 500);
    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <Progress
      aria-label='progress-bar'
      value={progress}
      className={cn('w-[100%]', className)}
    />
  );
}
