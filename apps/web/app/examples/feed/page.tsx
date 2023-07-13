import axios, { type AxiosResponse } from 'axios';
import { parseStringPromise } from 'xml2js';

import { FEED_URL } from '@/config/rss-feed';
import type { RssFeedType } from '@/types/rss-feed';
import FeedCard from '@/app/examples/feed/components/feed-card';
import { Metadata } from 'next/types';

export const metadata: Metadata = {
  title: 'Feed',
  description: 'Example Feed app using the components.',
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
  };
};

export default async function FeedPage() {
  const articles = await parseRssFeedArticles(FEED_URL.KOREAN_FE);

  return (
    <div>
      <FeedCard className='mt-10' articles={articles} />
    </div>
  );
}
