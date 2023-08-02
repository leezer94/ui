import { useCallback, useState } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from 'ui/components/avatar';
import { TypographyH4 } from 'ui/components/typography';
import { cn } from '@/lib';

interface AvatarProps {
  src?: string;
  alt: string;
  fallback: string;
  size: number;
  description: string;
}

const SAMPLE_AVATAR: AvatarProps[] = [
  {
    src: 'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80',
    alt: 'sample-avatar1',
    fallback: 'sample',
    size: 45,
    description: 'Default',
  },
  {
    src: 'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80',
    alt: 'sample-avatar2',
    fallback: 'sample',
    size: 45,
    description: 'Large',
  },
];

const FALLBACK_AVATAR: AvatarProps[] = [
  {
    src: '',
    alt: 'sample-avatar1/fallback',
    fallback: 'FB',
    size: 45,
    description: 'Default',
  },
  {
    src: '',
    alt: 'sample-avatar2/fallback',
    fallback: 'FB',
    size: 45,
    description: 'Large',
  },
];

export default function AvatarDemo() {
  const [isHovered, setIsHovered] = useState(false);

  const handleIsHovered = useCallback(
    (hover: boolean) => setIsHovered(hover),
    []
  );

  return (
    <div className='flex items-center justify-center gap-10'>
      {!isHovered &&
        SAMPLE_AVATAR.map(({ src, alt, fallback, size, description }, idx) => (
          <div
            key={`${alt}/${idx}`}
            className='flex h-[180px] w-[180px] flex-col items-center justify-start gap-y-2 font-bold'
          >
            <TypographyH4 className='flex-1 bg-cover font-light text-foreground/60'>
              {description}
            </TypographyH4>
            <div className={cn('flex flex-1 items-center')}>
              <Avatar
                onMouseEnter={() => handleIsHovered(true)}
                onMouseLeave={() => handleIsHovered(false)}
                // size={size}
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
              className='flex h-[180px] w-[180px] flex-col items-center justify-start gap-y-2 font-bold'
            >
              <TypographyH4 className='flex-1 font-light text-foreground/60'>
                {description}
              </TypographyH4>
              <div className={cn('flex flex-1 items-center')}>
                <Avatar
                  onMouseEnter={() => handleIsHovered(true)}
                  onMouseLeave={() => handleIsHovered(false)}
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
