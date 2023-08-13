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
    activity: {
      action: 'Updated client details for issue #7',
      activeAt: '10:12 am',
    },
  },
  {
    src: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?&w=150&h=150&dpr=2&q=70&crop=faces&fit=crop',
    name: 'Jaesang',
    email: 'borderjae@example.com',
    fallback: 'JC',
    activity: {
      action: 'pushed a PR to dev branch',
      activeAt: '11:34 am',
    },
  },
  {
    src: 'https://images.unsplash.com/photo-1526510747491-58f928ec870f?&w=150&h=150&dpr=2&q=70&crop=focalpoint&fp-x=0.48&fp-y=0.48&fp-z=1.3&fit=crop',
    name: 'YoungJin',
    email: 'newhar@example.com',
    fallback: 'YK',
    activity: {
      action: 'Responded to your comment #7514',
      activeAt: '13:04 pm',
    },
  },
  {
    src: 'https://images.unsplash.com/photo-1541823709867-1b206113eafd?&w=150&h=150&dpr=2&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1.5&fit=crop',
    name: 'Taekyung',
    email: 'taekyung@example.com',
    fallback: 'TS',
    activity: { action: 'Created a new issue', activeAt: '15:14 pm' },
  },
  {
    src: 'https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?&w=150&h=150&dpr=2&q=70&crop=focalpoint&fp-x=0.48&fp-y=0.35&fp-z=2&fit=crop',
    name: 'Youngyun',
    email: 'yougyun@example.com',
    fallback: 'YA',
    activity: {
      action: 'Approved pull request #361',
      activeAt: '20:50 pm',
    },
  },
  {
    src: 'https://plus.unsplash.com/premium_photo-1691622500373-da5adfe5b2ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    name: 'SeHee',
    email: 'shinsehantan@example.com',
    fallback: 'SS',
    activity: { action: 'Joined the team', activeAt: '21:00 pm' },
  },
];

export const teamProfitConfig = [
  {
    title: 'MRR',
    percentage: '3.2%',
    growth: '$350K',
  },
  {
    title: 'OpEx',
    percentage: '12.8%',
    growth: '$211K',
  },
  {
    title: 'CapEx',
    percentage: '-8.8%',
    growth: '$94K',
  },
  {
    title: 'GPM',
    percentage: '44.6%',
    growth: '44.6%',
  },
  {
    title: 'NPM',
    percentage: '0.0%',
    growth: '9.1%',
  },
  {
    title: 'EBTDA',
    percentage: '4.1%',
    growth: '$443K',
  },
  {
    title: 'CAC',
    percentage: '-11.0%',
    growth: '$146',
  },
  {
    title: 'LTV',
    percentage: '3%',
    growth: '$1849',
  },
  {
    title: 'Churn',
    percentage: '12.4%',
    growth: '12.4%',
  },
];

export type TEAM_GROWTH_CONFIG = typeof teamProfitConfig;

export type MEMBERS_CONFIG = typeof membersConfig;

export type OVERVIEW_CONFIG = typeof overviewConfig;

export type WEATHER_CONFIG = typeof weatherConfig;

export type TODO_LIST_CONFIG = typeof todoListConfig;
