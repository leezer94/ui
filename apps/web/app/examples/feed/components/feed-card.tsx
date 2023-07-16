import { ReactNode } from 'react';
import { TITLE_PREFIX } from '@/config/rss-feed';
import type { RssFeedType } from '@/types/rss-feed';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { FeedDialog } from '@/app/examples/feed/components';
import { cn } from '@/lib';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface FeedCard {
  className?: string;
  articles: RssFeedType;
  selection: ReactNode;
}

export default function FeedCard({ className, articles, selection }: FeedCard) {
  return (
    <Card className={cn('w-full', className)}>
      <CardHeader>
        <CardTitle>{articles.title}</CardTitle>
        <div className='flex items-baseline justify-between'>
          <CardDescription>{articles.description}</CardDescription>
          {selection}
        </div>
      </CardHeader>
      <CardContent className='max-h-[500px] overflow-scroll'>
        {articles?.item.map((feed, idx) => (
          <div key={feed.link + idx}>
            <FeedDialog
              type='korean-fe'
              trigger={
                <p className='cursor-pointer py-5 hover:text-red-300'>
                  {feed.title.replace(TITLE_PREFIX, '')}
                </p>
              }
              feed={feed}
            />
            <Separator />
          </div>
        ))}
      </CardContent>
      <CardFooter className='p-5'>
        <Button className='border-2' variant='outline' size='default'>
          <Icons.newspaper className='mr-1 h-3 w-3' />
          <p>
            Articles from{' '}
            <a
              href={articles.url}
              target='_blank'
              rel='noreferrer'
              className='font-medium underline underline-offset-4'
            >
              {articles.title}
            </a>
          </p>
        </Button>
      </CardFooter>
    </Card>
  );
}
