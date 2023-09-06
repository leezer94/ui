import { Icons } from '@/components/icons';
import MainNav from '@/components/site/navigation/main-nav';
import { buttonVariants } from 'ui/src/components/button';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib';
import Link from 'next/link';
import MobileNav from './mobile-nav';

export default function SiteHeader() {
  return (
    <header className='supports-backdrop-blur:bg-background/100 sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur-sm'>
      <div className='container flex h-14 items-center'>
        <MainNav />
        <MobileNav />
        <div className='flex flex-1 items-center justify-between space-x-2 sm:space-x-4 md:justify-end'>
          <div className='w-full flex-1 md:w-auto md:flex-none'></div>
          <nav className='flex items-center space-x-1'>
            <Link
              href={siteConfig.links.github}
              target='_blank'
              rel='noreferrer'
            >
              <div
                className={cn(
                  buttonVariants({
                    size: 'sm',
                    variant: 'ghost',
                  }),
                  'w-9 px-0 '
                )}
              >
                <Icons.gitHub className='h-5 w-5' />
                <span className='sr-only'>GitHub</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.linkedin}
              target='_blank'
              rel='noreferrer'
            >
              <div
                className={cn(
                  buttonVariants({
                    size: 'sm',
                    variant: 'ghost',
                  }),
                  'w-9 px-0 '
                )}
              >
                <Icons.linkedIn className='h-5 w-5 fill-current' />
                <span className='sr-only'>LinkedIn</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.medium}
              target='_blank'
              rel='noreferrer'
            >
              <div
                className={cn(
                  buttonVariants({
                    size: 'sm',
                    variant: 'ghost',
                  }),
                  'w-9 px-0 '
                )}
              >
                <Icons.medium className='h-5 w-5 fill-current' />
                <span className='sr-only'>Medium</span>
              </div>
            </Link>
            <Link href={siteConfig.links.npm} target='_blank' rel='noreferrer'>
              <div
                className={cn(
                  buttonVariants({
                    size: 'sm',
                    variant: 'ghost',
                  }),
                  'w-9 px-0 hidden md:flex'
                )}
              >
                <Icons.npm className='h-5 w-5 fill-current' />
                <span className='sr-only'>NPM</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.storybook}
              target='_blank'
              rel='noreferrer'
              className='pointer-events-none'
            >
              <div
                className={cn(
                  buttonVariants({
                    size: 'sm',
                    variant: 'ghost',
                  }),
                  'w-9 px-0 hidden md:flex'
                )}
              >
                <Icons.storybook className='h-5 w-5 fill-current' />
                <span className='sr-only'>Storybook</span>
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
