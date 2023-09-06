import { Metadata } from 'next';
import Link from 'next/link';
import { cn } from '@/lib/utils';

import { buttonVariants } from 'ui/src/components/button';
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import { ExamplesNav } from '@/components/examples-nav';

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
      <div className='container relative p-1 pb-10 md:p-8'>
        <PageHeader>
          <PageHeaderHeading>
            UI 컴포넌트로 구성된 예시 화면들을 참고하세요.
          </PageHeaderHeading>
          <PageHeaderDescription>
            제공된 UI 컴포넌트들로 구성된 예시 화면들을 확인할 수 있습니다.
          </PageHeaderDescription>
          <section className='flex w-full items-center space-x-4 pb-8 pt-4 md:pb-10'>
            <Link
              // component related to the example component
              href='/docs/components/accordion'
              className={cn(buttonVariants(), 'rounded-[6px]')}
            >
              시작하기
            </Link>
            <Link
              // component related to the example component
              href='/docs/components/accordion'
              className={cn(
                buttonVariants({ variant: 'outline' }),
                'rounded-[6px]'
              )}
            >
              컴포넌트
            </Link>
          </section>
        </PageHeader>
        <section>
          <ExamplesNav />
          <div className='overflow-hidden rounded-[0.5rem] border bg-background shadow-xl'>
            {children}
          </div>
        </section>
      </div>
    </>
  );
}
