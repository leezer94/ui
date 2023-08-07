import { Avatar, AvatarImage, AvatarFallback } from 'ui/components/avatar';
import { TypographyH4 } from 'ui/components/typography';
import { cn } from '@/lib';

interface AvatarProps {
  src?: string;
  alt: string;
  fallback: string;
  size: number;
}

const SAMPLE_AVATAR: AvatarProps[] = [
  {
    src: 'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80',
    alt: 'sample-avatar1',
    fallback: 'LZ',
    size: 45,
  },
  {
    src: 'https://images.unsplash.com/photo-1608889175123-8ee362201f81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
    alt: 'sample-avatar2',
    fallback: 'KH',
    size: 45,
  },
];

export default function AvatarDemo() {
  return (
    <div className='flex w-[50%] items-center justify-center'>
      {SAMPLE_AVATAR.map(({ src, alt, fallback }, idx) => (
        <div
          key={`${alt}/${idx}`}
          className='flex items-center justify-center gap-10'
        >
          <div className='flex h-[180px] w-[180px] flex-col items-center justify-start gap-y-2 font-bold'>
            <div className={cn('flex flex-1 items-center')}>
              <Avatar>
                <AvatarImage src={src} alt={alt} />
                <AvatarFallback>{fallback}</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      ))}
      <div className='flex items-center justify-center gap-10'>
        <div className='flex h-[180px] w-[180px] flex-col items-center justify-start gap-y-2 font-bold'>
          <div className={cn('flex flex-1 items-center')}>
            <Avatar>
              <AvatarFallback className='bg-transparent'>LZ</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </div>
  );
}
