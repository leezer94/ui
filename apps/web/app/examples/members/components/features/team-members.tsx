'use client';

import { membersConfig } from '@/config/examples';
import { cn } from '@/lib/utils';
import { useCallback, useState } from 'react';
import { Button } from 'ui/components/button';
import { Carousel } from 'ui/components/carousel';

export default function TeamMembers() {
  const [isHovered, setIsHovered] = useState(false);

  const handleIsHovered = useCallback(
    () => setIsHovered(!isHovered),
    [isHovered]
  );
  return (
    <div className={cn('flex h-full w-[40%] items-center justify-center ')}>
      <Button
        onClick={handleIsHovered}
        className={cn(
          'absolute top-[60%] z-50 text-white text-lg',
          `${isHovered && 'hidden'}`
        )}
        variant='outline'
        size='lg'
      >
        Our Team Members
      </Button>
      <Carousel
        className={cn('h-fit w-fit')}
        buttonColor='white'
        orientation='vertical'
        autoplayInterval={1500}
        autoplay
      >
        {membersConfig.map(({ name, src }, idx) => (
          <div
            key={`${name}/${idx}`}
            className={cn(
              'h-full w-full rounded-lg bg-cover bg-center transition-all duration-500',
              `${isHovered ? 'blur-none' : 'blur'}`
            )}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
      </Carousel>
    </div>
  );
}
