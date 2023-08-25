'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';
import { ScrollArea, ScrollBar } from 'ui/components/scroll-area';
import { Icons } from '@/components/icons';

const examples = [
  {
    name: 'Members',
    href: '/examples/members',
    code: 'https://github.com/leezer94/ui/tree/main/apps/web/app/examples/members',
  },
  {
    name: 'Feed',
    href: '/examples/feed',
    code: 'https://github.com/leezer94/ui/tree/main/apps/web/app/examples/feed',
  },
];

interface ExamplesNavProps extends React.HTMLAttributes<HTMLDivElement> {}

export function ExamplesNav({ className, ...props }: ExamplesNavProps) {
  const pathname = usePathname();

  return (
    <div className='relative'>
      <ScrollArea className='max-w-[600px] lg:max-w-none'>
        <div className={cn('mb-4 flex items-center', className)} {...props}>
          {examples.map((example) => (
            <Link
              href={example.href}
              key={example.href}
              className={cn(
                'flex items-center px-4',
                pathname?.startsWith(example.href)
                  ? 'font-bold text-primary'
                  : 'font-medium text-muted-foreground'
              )}
            >
              {example.name}
            </Link>
          ))}
        </div>
        <ScrollBar orientation='horizontal' className='invisible' />
      </ScrollArea>
      <ExampleCodeLink
        pathname={pathname === '/' ? '/examples/dashboard' : pathname}
      />
    </div>
  );
}

interface ExampleCodeLinkProps {
  pathname: string | null;
}

export function ExampleCodeLink({ pathname }: ExampleCodeLinkProps) {
  const example = examples.find((example) =>
    pathname?.startsWith(example.href)
  );

  if (!example?.code) {
    return null;
  }

  return (
    <Link
      href={example?.code}
      target='_blank'
      rel='nofollow'
      className='absolute right-0 top-0 hidden items-center rounded-[0.5rem] text-sm font-semibold hover:underline md:flex'
    >
      source code
      <Icons.link className='ml-2 h-4 w-4' />
    </Link>
  );
}
