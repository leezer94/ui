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
    icon: <Icons.globe className='hidden lg:block' />,
    amount: WEATHERS[RANDOM_INDEX].icon,
  },
  {
    title: 'Temperature',
    description: 'Seoul',
    icon: <Icons.temperature className='hidden lg:block' />,
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

export const membersConfig = [
  {
    src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?&w=150&h=150&dpr=2&q=70&crop=faces&fit=crop',
    name: 'Keonhee',
    email: 'keonhee.dev@example.com',
    fallback: 'KH',
  },
  {
    src: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?&w=150&h=150&dpr=2&q=70&crop=faces&fit=crop',
    name: 'Jaesang',
    email: 'borderjae@example.com',
    fallback: 'JC',
  },
  {
    src: 'https://images.unsplash.com/photo-1526510747491-58f928ec870f?&w=150&h=150&dpr=2&q=70&crop=focalpoint&fp-x=0.48&fp-y=0.48&fp-z=1.3&fit=crop',
    name: 'YoungJin',
    email: 'newhar@example.com',
    fallback: 'YK',
  },
  {
    src: 'https://images.unsplash.com/photo-1541823709867-1b206113eafd?&w=150&h=150&dpr=2&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1.5&fit=crop',
    name: 'Taekyung',
    email: 'taekyung@example.com',
    fallback: 'TS',
  },
  {
    src: 'https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?&w=150&h=150&dpr=2&q=70&crop=focalpoint&fp-x=0.48&fp-y=0.35&fp-z=2&fit=crop',
    name: 'Youngyun',
    email: 'yougyun@example.com',
    fallback: 'YA',
  },
  {
    src: 'https://plus.unsplash.com/premium_photo-1691622500373-da5adfe5b2ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    name: 'SeHee',
    email: 'shinsehantan@example.com',
    fallback: 'SS',
  },
];

export type MEMBERS_CONFIG = typeof membersConfig;

export type OVERVIEW_CONFIG = typeof overviewConfig;

export type WEATHER_CONFIG = typeof weatherConfig;

export type TODO_LIST_CONFIG = typeof todoListConfig;
