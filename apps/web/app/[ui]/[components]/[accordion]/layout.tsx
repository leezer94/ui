import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accordion',
  description: 'Accordion Component',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='flex h-screen items-center justify-center'>
        {children}
      </body>
    </html>
  );
}
