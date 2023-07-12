'use client';

import { Icons } from '@/components/icons';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MainNav() {
  const pathname = usePathname();

  return (
    <div className='mr-4 hidden md:flex'>
      <Link href='/' className='mr-6 flex items-center space-x-2'>
        <Icons.logo className='h-6 w-6' />
        <span className='hidden font-bold sm:inline-block'>
          {siteConfig.name}
        </span>
      </Link>
      <nav className='flex items-center space-x-6 text-sm font-medium'>
        <Link
          href='/docs'
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname === '/docs' ? 'text-foreground' : 'text-foreground/60'
          )}
        >
          문서
        </Link>
        <Link
          href='/docs/components/accordion'
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname?.startsWith('/docs/components')
              ? 'text-foreground'
              : 'text-foreground/60'
          )}
        >
          컴포넌트
        </Link>
        <Link
          href='/examples/feed'
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname?.startsWith('/examples')
              ? 'text-foreground'
              : 'text-foreground/60'
          )}
        >
          예시
        </Link>
        <Link
          href={siteConfig.links.github}
          className={cn(
            'hidden text-foreground/60 transition-colors hover:text-foreground/80 lg:block'
          )}
        >
          깃허브
        </Link>
      </nav>
    </div>
  );
}
