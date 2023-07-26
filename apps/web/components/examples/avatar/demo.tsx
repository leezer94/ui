import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui';

export default function AvatarDemo() {
  const sample_avatar =
    'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80';

  return (
    <Avatar className='h-[90px] w-[90px]'>
      <AvatarImage src={sample_avatar} alt='sample-avatar' />
      <AvatarFallback />
    </Avatar>
  );
}
