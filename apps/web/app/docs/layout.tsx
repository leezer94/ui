import { DocsSidebarNav } from '@/components/site/navigation/sidebar-nav';
import { ScrollArea } from 'ui/components';
import { DOCS_CONFIG } from '@/config/docs';

interface DocsLayoutProps {
  children: React.ReactNode;
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className='container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10'>
      <aside className='fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r md:sticky md:block'>
        <ScrollArea className='py-6 pr-6 lg:py-8'>
          <DocsSidebarNav items={DOCS_CONFIG.SIDE_NAV} />
        </ScrollArea>
      </aside>
      {children}
    </div>
  );
}
