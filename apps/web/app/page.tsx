import FeedExample from '@/app/examples/feed/page';
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { buttonVariants } from 'ui/components/button';
import { cn } from '@/lib';
import { Icons } from '@/components/icons';

export default function Page() {
  return (
    <div className='container relative pb-10'>
      <PageHeader>
        <PageHeaderHeading>확장성을 고려한 컴포넌트</PageHeaderHeading>
        <PageHeaderDescription>
          접근가능성, 확장성을 고려한 재사용 가능한 컴포넌트를 로컬에 보유하고
          사용하세요.
        </PageHeaderDescription>
        <div className=' flex w-full items-center space-x-4 pb-8 pt-4 md:pb-10'>
          <Link
            href='/docs'
            className={cn(
              'pointer-events-none',
              buttonVariants({ variant: 'disabled' })
            )}
          >
            시작하기
          </Link>
          <Link
            target='_blank'
            rel='noreferrer'
            href={siteConfig.links.github}
            className={cn(buttonVariants({ variant: 'outline' }))}
          >
            <Icons.gitHub className='mr-2 h-4 w-4' />
            깃허브
          </Link>
        </div>
      </PageHeader>
      <section className='hidden md:block'>
        <div className='overflow-hidden rounded-lg border bg-background p-5 shadow-xl'>
          {/* @ts-expect-error Server Component */}
          <FeedExample />
        </div>
      </section>
    </div>
  );
}
