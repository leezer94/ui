import axios, { type AxiosResponse } from 'axios';
import { parseStringPromise } from 'xml2js';

import { URL_REGEX, FEED_URLS } from '@/config/rss-feed';
import type { RssFeedType } from '@/types/rss-feed';
import { Metadata } from 'next/types';
import { Icons } from '@/components/icons';
import Overview from '@/app/examples/feed/components/overview';
import { overviewConfig } from '../../../config/examples';
import UserFeed from '@/app/examples/feed/components/user-feed';

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
      <UserFeed articles={articles} />
    </div>
  );
}
