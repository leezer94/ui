import type { Metadata } from 'next/types';
import axios, { type AxiosResponse } from 'axios';
import { parseStringPromise } from 'xml2js';
import type { RssFeedType } from '@/types/rss-feed';

import { URL_REGEX, FEED_URLS } from '@/config/rss-feed';
import {
  overviewConfig,
  weatherConfig,
  todoListConfig,
} from '@/config/examples';
import { Icons } from '@/components/icons';
import {
  Overview,
  UserFeed,
  ProgressBar,
  TodoDialog,
} from '@/app/examples/feed/components';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib';

export const metadata: Metadata = {
  title: 'News Feed',
  description: 'Example News Feed app using the components.',
};

const parseRssFeedArticles = async (url: string): Promise<RssFeedType> => {
  const response: AxiosResponse<string> = await axios.get(url);
  const xml = response.data;

  const result = await parseStringPromise(xml, {
    explicitArray: false,
  });

  const { title, description, item } = await result.rss.channel;

  return {
    title,
    description,
    item,
    url: url.replace(URL_REGEX, '$1'),
  };
};

export default async function FeedPage() {
  const articles = await Promise.all(
    FEED_URLS.map(async (url) => await parseRssFeedArticles(url))
  );

  return (
    <div className=''>
      <p className='font-bold text-amber-600'>
        <Icons.rss />
        News Feed
      </p>
      <div className='mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
        {overviewConfig.map(({ title, description, amount, icon }, idx) => (
          <Overview
            key={`${title}/${idx}`}
            title={title}
            description={description}
            icon={icon}
            amount={amount}
          />
        ))}
      </div>
      <div className='flex'>
        <div className='w-8/12'>
          <UserFeed articles={articles} />
        </div>
        <div className='grid w-4/12 grid-rows-3 gap-5 p-5'>
          <Card className='row-span-2'>
            <CardHeader className='mb-5 flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle>Todo</CardTitle>
              <TodoDialog trigger={<Icons.todo className='cursor-pointer' />} />
            </CardHeader>
            <CardContent className='flex flex-col gap-y-5'>
              {todoListConfig.map(({ title, status, dueDate }, idx) => (
                <Card key={`${title}/${idx}`}>
                  <CardContent className='flex p-3 text-left'>
                    <p className='flex-1 p-0 text-left font-bold'>{title}</p>
                    <Separator className='mx-2 h-6' orientation='vertical' />
                    <p className='flex-1'>{status}</p>
                    <Separator className='mx-2 h-6' orientation='vertical' />
                    <p
                      className={cn(
                        'flex-1',
                        dueDate === 'D - 1' && 'text-red-600 font-bold'
                      )}
                    >
                      {dueDate}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>
          <div className='flex gap-1'>
            {weatherConfig.map(({ title, description, icon, amount }, idx) => (
              <Card key={`${title}/${idx}`} className='w-full'>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                  <CardTitle>{title}</CardTitle>
                  {icon}
                </CardHeader>
                <CardContent className='flex flex-col items-center justify-center'>
                  <div className='mb-3 p-3 text-xl font-bold'>{amount}</div>
                  <p>{description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <ProgressBar percentage={73} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
