import '../global.css';
import type { Meta, StoryFn } from '@storybook/react';
import { Carousel } from 'ui/src/components/carousel';
import {
  AppleTemplateCard,
  IssueTemplateCard,
  TeamMembers,
} from '../components/carousel';

const meta = {
  title: 'Leezer-UI/Carousel',
  component: Carousel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      options: ['horizontal', 'vertical'],
      defaultValue: 'horizontal',
      description: '수평 혹은 수직으로 캐러셀 컴포넌트를 나열할 수 있습니다.',
    },
    indicator: {
      options: [true, false],
      defaultValue: true,
      description: '슬라이드를 이동할 수 있는 버튼',
    },
    autoplay: {
      options: [true, false],
      defaultValue: true,
      description: '오토플레이를 활성화할 수 있습니다.',
    },
    autoplayInterval: {
      defaultValue: 3000,
      description: '오토플레이 주기를 설정할 수 있습니다. 1000 = 1s',
    },
    buttonColor: {
      options: ['black', 'white'],
      defaultValue: 'white',
      description: '버튼 기본 색상을 지정합니다. ',
    },
  },
} satisfies Meta<typeof Carousel>;
export default meta;

const CAROUSEL_IMAGES = [
  'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
  'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
];

type Story = StoryFn<typeof Carousel>;

const Template: Story = (args) => (
  <div className='w-[500px] h-[500px]'>
    <Carousel {...args}>
      {CAROUSEL_IMAGES.map((url, idx) => (
        <div
          className='h-full w-full rounded-lg bg-cover bg-center'
          style={{ backgroundImage: `url(${url})` }}
          key={`${url}/${idx}`}
        />
      ))}
    </Carousel>
  </div>
);

export const Default = Template.bind({});

Default.args = {
  buttonColor: 'white',
  autoplay: true,
  indicator: true,
  orientation: 'horizontal',
  autoplayInterval: 1200,
};

export const WithComponent = () => (
  <div className='w-[650px] h-[500px]'>
    <Carousel autoplay autoplayInterval={3000} buttonColor='black'>
      <IssueTemplateCard />
      <AppleTemplateCard />
    </Carousel>
  </div>
);

export const VerticalCarousel = () => <TeamMembers />;
