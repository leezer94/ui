'use client';

import { useEffect, useState } from 'react';
import { Progress } from 'ui/components/progress';

interface Props {
  percentage: number;
  defaultProgress?: number;
}

export default function ProgressBar({
  percentage,
  defaultProgress = 13,
}: Props) {
  const [progress, setProgress] = useState(defaultProgress);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(percentage), 500);
    return () => clearTimeout(timer);
  }, [percentage]);

  return <Progress value={progress} className='w-[100%]' />;
}
