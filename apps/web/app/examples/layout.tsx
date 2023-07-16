import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
// import { ExamplesNav } from '@/components/examples-nav';
// import {
//   header,
//   PageHeaderDescription,
//   PageHeaderHeading,
// } from '@/components/page-header';

export const metadata: Metadata = {
  title: 'Examples',
  description: 'Check out some examples app built using the components.',
};

interface ExamplesLayoutProps {
  children: React.ReactNode;
}

export default function ExamplesLayout({ children }: ExamplesLayoutProps) {
  return (
    <>
      <div className='container relative pb-10'>
        <header className='page-header mt-10'>
          <Link
            href='/docs/components/accordion'
            className='inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium'
          >
            🎉 <Separator className='mx-2 h-4' orientation='vertical' />{' '}
            Subscribe interesting RSS feed using Card and Dialog Components
            <ChevronRight className='ml-1 h-4 w-4' />
          </Link>
          <p className='hidden md:block'>Check out some examples.</p>
          <p className='md:hidden'>Examples</p>
          <p>
            {/* Dashboard, cards, authentication. Some examples built using the
            components. Use this as a guide to build your own. */}
            example messages
          </p>
          <section className='flex w-full items-center space-x-4 pb-8 pt-4 md:pb-10'>
            <Link
              // component related to the example component
              href='/docs/components/accordion'
              className={cn(buttonVariants(), 'rounded-[6px]')}
            >
              Get Started
            </Link>
            <Link
              // component related to the example component
              href='/docs/components/accordion'
              className={cn(
                buttonVariants({ variant: 'outline' }),
                'rounded-[6px]'
              )}
            >
              Components
            </Link>
          </section>
        </header>
        <section>
          {/* <ExamplesNav /> */}
          <div className='overflow-hidden rounded-[0.5rem] border bg-background p-5 shadow-xl'>
            {children}
          </div>
        </section>
      </div>
    </>
  );
}
