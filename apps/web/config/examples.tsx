import { Icons } from '@/components/icons';
import { FEED_URLS } from '@/config/rss-feed';

export const overviewConfig = [
  {
    title: 'Subscriptions',
    description: "Rss feeds that you've subscribed",
    icon: <Icons.rss />,
    amount: FEED_URLS.length,
  },
];

export type OVERVIEW_CONFIG = typeof overviewConfig;
