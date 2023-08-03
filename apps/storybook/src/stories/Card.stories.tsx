import { Accordion } from 'ui/components';
import '../global.css';
import type { Meta } from '@storybook/react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from 'ui/components/card';
import { Button } from 'ui/components';
import { Icons } from 'ui/icons';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Accordion',
  component: Accordion,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof Accordion>;

export default meta;

// type Story = StoryObj<typeof meta>;

export const Single = () => {
  return (
    <Card className='flex-1 select-none rounded-none'>
      <CardHeader>
        <CardTitle>MacBook Pro 13</CardTitle>
        <div className='flex items-baseline justify-between'>
          <CardDescription>₩1,790,000부터</CardDescription>
          <Button
            className='pointer-events-none rounded-3xl bg-blue-500'
            size='sm'
          >
            구입하기
          </Button>
        </div>
      </CardHeader>
      <CardContent className='flex flex-col gap-y-2'>
        <div className='flex items-center gap-x-2'>
          <Icons.monitor size={30} />
          {/* <TypographyMuted className='overflow-hidden text-ellipsis text-xs'> */}
          차세대 Apple M2 칩과 전문가급 성능을 유지해주는 액티브 쿨링 시스템으로
          더 많은 일을 더 빠르게 처리
          {/* </TypographyMuted> */}
        </div>
        {/* <Separator /> */}
        <div className='flex items-center gap-x-2'>
          <Icons.batteryFull size={30} />
          {/* <TypographyMuted className='overflow-hidden text-ellipsis text-xs'> */}
          하루 종일 쓰고도 밤 늦게까지 너끈한 최대 20시간의 배터리 사용
          시간각주¹
          {/* </TypographyMuted> */}
        </div>
        {/* <Separator /> */}
        <div className='flex items-center gap-x-2'>
          <Icons.diagonal size={30} />
          {/* <TypographyMuted className='overflow-hidden text-ellipsis text-xs'> */}
          생생한 색상과 놀라운 디테일을 보여주는 500 니트 밝기의 Retina
          디스플레이
          {/* </TypographyMuted> */}
        </div>
        {/* <Separator /> */}
        <div className='flex items-center gap-x-2'>
          <Icons.plugZap size={30} />
          {/* <TypographyMuted className='overflow-hidden text-ellipsis text-xs'> */}
          고속 액세서리에 연결하고 전원을 공급해주는 Thunderbolt 포트 2개
          {/* </TypographyMuted> */}
        </div>
        {/* <Separator /> */}
      </CardContent>
      <CardFooter className='flex cursor-pointer select-none items-center  gap-x-1 '>
        {/* <TypographyMuted className='text-blue-500'> */}
        MacBook Pro 13 더 살펴보기
        {/* </TypographyMuted> */}
        <Icons.chevronRight className='text-blue-500' size={15} />
      </CardFooter>
    </Card>
  );
};
