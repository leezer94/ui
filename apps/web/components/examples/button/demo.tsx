'use client';

import { Button } from 'ui/components/button';
import { TypographyMuted } from 'ui/components/typography';

interface ButtonProps {
  buttonVariant:
    | 'default'
    | 'secondary'
    | 'destructive'
    | 'ghost'
    | 'link'
    | 'disabled';
  buttonSize: 'sm' | 'default' | 'md' | 'lg';
}

const BUTTON_SIZE = [
  'sm',
  'default',
  'md',
  'lg',
] as ButtonProps['buttonSize'][];

export default function ButtonDemo({ buttonVariant }: ButtonProps) {
  return (
    <div className='flex flex-wrap items-center justify-center gap-x-8 gap-y-5 md:flex-nowrap md:gap-y-0'>
      {BUTTON_SIZE.map((size, idx) => (
        <div key={`${size}/${idx}`} className=' flex flex-col items-center'>
          <TypographyMuted className='mb-5'>{size}</TypographyMuted>
          <Button variant={buttonVariant} size={size}>
            {buttonVariant}
          </Button>
        </div>
      ))}
    </div>
  );
}
