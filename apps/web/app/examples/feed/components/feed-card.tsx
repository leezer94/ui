import FeedDialog from '@/app/examples/feed/components/feed-dialog';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { TITLE_PREFIX } from '@/config/rss-feed';
import { cn } from '@/lib';
import { RssFeedType } from '@/types/rss-feed';

interface FeedCard {
  className?: string;
  articles: RssFeedType;
}

export default function FeedCard({ className, articles }: FeedCard) {
  return (
    <Card className={cn('', className)}>
      <CardHeader>
        <CardTitle>{articles.title}</CardTitle>
        <CardDescription>{articles.description}</CardDescription>
      </CardHeader>
      <CardContent className='max-h-[500px] overflow-scroll'>
        {articles?.item.map((feed, idx) => (
          <div key={feed.link + idx}>
            <FeedDialog
              type='korean-fe'
              button={
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
        <Button variant='outline'>
          <Icons.newspaper className='mr-1 h-3 w-3' />
          <p>
            Articles from{' '}
            <a
              href='https://kofearticle.substack.com/'
              target='_blank'
              rel='noreferrer'
              className='font-medium underline underline-offset-4'
            >
              Korean FE articles
            </a>
          </p>
        </Button>
      </CardFooter>
    </Card>
  );
}
