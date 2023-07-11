'use client';

import { Button } from '@/components/ui/button';

interface Button {
  variant:
    | 'default'
    | 'secondary'
    | 'destructive'
    | 'ghost'
    | 'link'
    | 'disabled';
}

type ButtonSize = 'default' | 'sm' | 'lg';

const buttons: Button[] = [
  { variant: 'default' },
  { variant: 'secondary' },
  { variant: 'destructive' },
  { variant: 'ghost' },
  { variant: 'link' },
  { variant: 'disabled' },
];

export default function ButtonDemo() {
  return (
    <div className='flex flex-col'>
      <div className='flex gap-5'>
        {buttons.map(({ variant }, idx: number) => (
          <Button key={`${variant}/${idx}`} variant={variant} size='default'>
            {variant}
          </Button>
        ))}
      </div>
    </div>
  );
}
