import '../styles/global.css';
import { SiteFooter, SiteHeader } from '@/components/site/navigation';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <SiteHeader />
        <div className='flex-1'>{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
