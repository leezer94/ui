import { Icons } from '@/components/icons';
import { FEED_URLS } from '@/config/rss-feed';

export const overviewConfig = [
  {
    title: 'Subscriptions',
    description: "Rss feeds that you've subscribed",
    icon: <Icons.rss />,
    amount: FEED_URLS.length,
  },
  {
    title: 'New Articles',
    description: 'New articles from feeds since you left',
    icon: <Icons.newspaper />,
    amount: Math.floor(Math.random() * 30) + 1,
  },
  {
    title: 'Remain Tasks',
    description: 'Remain Tasks from todo list',
    icon: <Icons.alarm />,
    amount: 14,
  },
  {
    title: 'Done',
    description: "Tasks you've finished already",
    icon: <Icons.done />,
    amount: 6,
  },
];

const WEATHERS = [
  { title: 'sunny', icon: <Icons.sun /> },
  { title: 'cloudy', icon: <Icons.cloudy /> },
  { title: 'rainy', icon: <Icons.rainy /> },
  { title: 'snowy', icon: <Icons.snowy /> },
];

const RANDOM_INDEX = Math.floor(Math.random() * 4);

export const weatherConfig = [
  {
    title: 'Weather',
    description: 'Regensburg',
    icon: <Icons.globe />,
    amount: WEATHERS[RANDOM_INDEX].icon,
  },
  {
    title: 'Temperature',
    description: 'Seoul',
    icon: <Icons.temperature />,
    amount: `24 °C`,
  },
];

export const todoListConfig = [
  {
    id: 1,
    title: 'Housework',
    status: 'In Progress',
    description: '',
    dueDate: 'D - 12',
  },
  {
    id: 2,
    title: 'Assignment',
    status: 'Todo',
    description: '',
    dueDate: 'D - 1',
  },
  {
    id: 3,
    title: 'Rent',
    status: 'Done',
    description: '',
    dueDate: 'D + 1',
  },
  {
    id: 4,
    title: 'Training',
    status: 'Canceled',
    description: '',
    dueDate: 'D - 6',
  },
];

export type OVERVIEW_CONFIG = typeof overviewConfig;

export type WEATHER_CONFIG = typeof weatherConfig;

export type TODO_LIST_CONFIG = typeof todoListConfig;
