import MainNav from '@/components/site/navigation/main-nav';
import MobileNav from './mobile-nav';

export default function SiteHeader() {
  return (
    <header className='supports-backdrop-blur:bg-background/100 sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur-sm'>
      <div className='container flex h-14 items-center'>
        <MainNav />
        <MobileNav />
      </div>
    </header>
  );
}
