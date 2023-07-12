import FeedDialog from '@/app/examples/feed/components/feed-dialog';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
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
      <CardContent>
        {articles?.item.map((feed, idx) => (
          <div key={feed.link + idx}>
            <FeedDialog
              type='korean-fe'
              button={
                <p className='cursor-pointer py-5 hover:text-red-300'>
                  {feed.title}
                </p>
              }
              feed={feed}
            />
            <Separator />
          </div>
        ))}
      </CardContent>
      <CardFooter>Footer</CardFooter>
    </Card>
  );
}
