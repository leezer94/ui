import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui';
import { TypographyH4 } from '@/components/ui/typography';
import { cn } from '@/lib';
import { useCallback, useState } from 'react';

const SAMPLE_AVATAR = [
  {
    src: 'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80',
    alt: 'sample-avatar1',
    fallback: 'sample',
    size: 'default',
    description: 'Default',
  },
  {
    src: 'https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1356&q=80',
    alt: 'sample-avatar2',
    fallback: 'sample',
    size: 'lg',
    description: 'Large',
  },
];

const FALLBACK_AVATAR = [
  {
    src: '',
    alt: 'sample-avatar1/fallback',
    fallback: 'FB',
    size: 'default',
    description: 'Default',
  },
  {
    src: '',
    alt: 'sample-avatar2/fallback',
    fallback: 'FB',
    size: 'lg',
    description: 'Large',
  },
];

export default function AvatarDemo() {
  const [isHovered, setIsHovered] = useState(false);

  const handleIsHovered = useCallback(
    (hover: boolean) => setIsHovered(hover),
    []
  );
  // 호버 상태면 fallback
  // 호버가 아닐땐 avatar

  return (
    <div className='flex items-center justify-center gap-10'>
      {!isHovered &&
        SAMPLE_AVATAR.map(({ src, alt, fallback, size, description }, idx) => (
          <div
            key={`${alt}/${idx}`}
            className='flex h-[180px] w-[90px] flex-col items-center justify-start gap-y-2 font-bold'
          >
            <TypographyH4 className='flex-1 font-light text-foreground/60'>
              {description}
            </TypographyH4>
            <div className={cn('flex flex-1 items-center')}>
              <Avatar
                onMouseEnter={() => handleIsHovered(true)}
                onMouseLeave={() => handleIsHovered(false)}
                size={size as 'default' | 'lg'}
              >
                <AvatarImage src={src} alt={alt} />
                <AvatarFallback>{fallback}</AvatarFallback>
              </Avatar>
            </div>
          </div>
        ))}
      {isHovered &&
        FALLBACK_AVATAR.map(
          ({ src, alt, fallback, size, description }, idx) => (
            <div
              key={`${alt}/${idx}`}
              className='flex h-[180px] w-[90px] flex-col items-center justify-start gap-y-2 font-bold'
            >
              <TypographyH4 className='flex-1 font-light text-foreground/60'>
                {description}
              </TypographyH4>
              <div className={cn('flex flex-1 items-center')}>
                <Avatar
                  onMouseEnter={() => handleIsHovered(true)}
                  onMouseLeave={() => handleIsHovered(false)}
                  size={size as 'default' | 'lg'}
                >
                  <AvatarImage src={src} alt={alt} />
                  <AvatarFallback>{fallback}</AvatarFallback>
                </Avatar>
              </div>
            </div>
          )
        )}
    </div>
  );
}
