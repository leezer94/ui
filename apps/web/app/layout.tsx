import '../styles/global.css';
import SiteHeader from '@/components/site/navigation/site-header';

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
      </body>
    </html>
  );
}
