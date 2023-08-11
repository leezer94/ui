import { allDocs } from 'contentlayer/generated';
import { Metadata } from 'next/types';
import { notFound } from 'next/navigation';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { Mdx } from '@/components/mdx-components';
import { cn, absoluteUrl } from '@/lib';
import { ScrollArea } from 'ui/components';
import Balancer from 'react-wrap-balancer';

interface DocPageProps {
  params: {
    slug: string[];
  };
}

async function getDocFromParams({ params }: DocPageProps) {
  const slug = params.slug?.join('/') || '';
  const doc = allDocs.find((doc) => doc.slugAsParams === slug);

  if (!doc) {
    null;
  }

  return doc;
}

export async function generateMetadata({
  params,
}: DocPageProps): Promise<Metadata> {
  const doc = await getDocFromParams({ params });

  if (!doc) {
    return {};
  }

  return {
    title: doc.title,
    description: doc.description,
    openGraph: {
      title: doc.title,
      description: doc.description,
      type: 'article',
      url: absoluteUrl(doc.slug),
      images: [
        {
          url: '',
          width: 1200,
          height: 630,
          alt: '',
        },
      ],
    },
  };
}

export default async function Page({ params }: DocPageProps) {
  const doc = await getDocFromParams({ params });

  if (!doc) notFound();

  return (
    <main className='relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]'>
      <div className='mx-auto w-full min-w-0'>
        <div className='mb-4 flex items-center space-x-1 text-sm text-muted-foreground'>
          <div className='overflow-hidden text-ellipsis whitespace-nowrap'>
            Docs
          </div>
          <ChevronRight className='h-4 w-4' />
          <div className='font-medium text-foreground'>{doc.title}</div>
        </div>
        <div className='space-y-2'>
          <h1 className={cn('scroll-m-20 text-4xl font-bold tracking-tight')}>
            {doc.title}
          </h1>
          {doc.description && (
            <p className='text-lg text-muted-foreground'>
              <Balancer>{doc.description}</Balancer>
            </p>
          )}
        </div>
        {doc.radix ? (
          <div className='flex items-center space-x-2 pt-4'>
            {doc.radix?.link && (
              <Link
                href={doc.radix.link}
                target='_blank'
                rel='noreferrer'
                className='underline-offset-8 hover:underline'
              >
                Radix UI
              </Link>
            )}
            {doc.radix?.api && (
              <Link
                href={doc.radix.api}
                target='_blank'
                rel='noreferrer'
                className='underline-offset-8 hover:underline'
              >
                API Reference
              </Link>
            )}
          </div>
        ) : null}
        <Mdx code={doc.body.code} />
        {/* <DocsPager doc={doc} /> */}
      </div>
      <div className='hidden text-sm xl:block'>
        <div className='sticky top-16 -mt-10 h-[calc(100vh-3.5rem)] overflow-hidden pt-6'>
          <ScrollArea className='pb-10'>
            {/* <DashboardTableOfContents toc={toc} /> */}
            <div>TOC</div>
          </ScrollArea>
        </div>
      </div>
    </main>
  );
}
