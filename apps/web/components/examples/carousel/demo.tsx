'use client';

import { useState } from 'react';
import { Icons } from '@/components/icons';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from 'ui/components/card';
import { Carousel } from 'ui/components/carousel';
import { Separator } from 'ui/components/separator';
import { Button } from 'ui/components/button';
import { TypographyH4, TypographyMuted } from 'ui/components/typography';

const CAROUSEL_IMAGES = [
  'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
  'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
];

export default function CarouselDemo() {
  const [autoplay, setAutoplay] = useState(true);

  const handleAutoPlay = () => setAutoplay(!autoplay);

  return (
    <>
      <div className='pb-5'>
        <Button
          variant={autoplay ? 'outline' : 'default'}
          size='sm'
          onClick={handleAutoPlay}
        >
          Autoplay {autoplay ? 'Off' : 'On'}
        </Button>
      </div>
      <Carousel
        buttonColor='black'
        orientation='horizontal'
        autoplay={autoplay}
      >
        {CAROUSEL_IMAGES.map((url, idx) => (
          <div
            className='h-full w-full rounded-lg bg-cover bg-center duration-500'
            style={{ backgroundImage: `url(${url})` }}
            key={`${url}/${idx}`}
          />
        ))}
        <IssueTemplateCard />
        <AppleTemplateCard />
      </Carousel>
    </>
  );
}

function IssueTemplateCard() {
  return (
    <Card className='hidden h-full overflow-scroll duration-500 md:block'>
      <CardHeader>
        <div className='flex items-baseline justify-between'>
          <CardTitle className='text-xl'>Issue Template</CardTitle>
          <div className='flex gap-x-2'>
            <Button variant='outline' size='sm'>
              Edit
            </Button>
            <Button variant='disabled' size='sm'>
              New issue
            </Button>
          </div>
        </div>
        <CardDescription className='flex items-baseline gap-4'>
          <Button
            className='cursor-auto select-none rounded-3xl'
            variant='destructive'
            size='sm'
          >
            Closed
          </Button>
          leezer94 opened this issue 4 hours ago.
        </CardDescription>
      </CardHeader>
      <CardContent className='flex flex-col'>
        <div className='flex flex-col'>
          <TypographyH4>Branch</TypographyH4>
        </div>
        <Separator />
        <div className='flex items-center py-4'>
          <Icons.dot />
          <div className='flex items-center gap-2'>
            <span className='text-sm'>feat/carousel</span>
          </div>
        </div>
        <Separator />
        <div className='ml-2 py-4'>
          <div className='flex items-center gap-2'>
            <Icons.checkSquare size={15} />
            <TypographyMuted>
              add features to accordion component
            </TypographyMuted>
          </div>
          <div className='flex items-center gap-2'>
            <Icons.square size={15} />
            <TypographyMuted>check code quality</TypographyMuted>
          </div>
          <div className='flex items-center gap-2'>
            <Icons.checkSquare size={15} />
            <TypographyMuted>remove unnecessary comments</TypographyMuted>
          </div>
          <div className='flex items-center gap-2'>
            <Icons.checkSquare size={15} />
            <TypographyMuted>fix too many re-render issue</TypographyMuted>
          </div>
        </div>
        <Separator className='my-4' />
        <div className='flex items-center gap-1'>
          <Icons.dot />
          <Icons.circleDot size={15} className='text-green-600' />
          <div className='flex items-center gap-2'>
            <TypographyMuted className='cursor-pointer font-bold text-blue-600'>
              [Component] Carousel Component
            </TypographyMuted>
            <span className='text-sm font-bold text-foreground/40'>#20</span>
          </div>
        </div>
        <div className='flex items-center gap-1'>
          <Icons.dot />
          <Icons.circleDot size={15} className='text-green-600' />
          <div className='flex items-center gap-2'>
            <TypographyMuted className='cursor-pointer font-bold text-blue-600'>
              [Landing / Index ] Index / Landing Page
            </TypographyMuted>
            <span className='text-sm font-bold text-foreground/40'>#16</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
function AppleTemplateCard() {
  const IMAGES = [
    'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
    'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
  ];
  return (
    <Card className='flex h-full w-full justify-evenly duration-500'>
      <div
        className='h-full flex-1 bg-cover bg-center'
        style={{ backgroundImage: `url(${IMAGES[1]})` }}
      ></div>
      <Card className='hidden flex-1 rounded-none md:block'>
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
            <TypographyMuted className='overflow-hidden text-ellipsis text-xs'>
              차세대 Apple M2 칩과 전문가급 성능을 유지해주는 액티브 쿨링
              시스템으로 더 많은 일을 더 빠르게 처리
            </TypographyMuted>
          </div>
          <Separator />
          <div className='flex items-center gap-x-2'>
            <Icons.batteryFull size={30} />
            <TypographyMuted className='overflow-hidden text-ellipsis text-xs'>
              하루 종일 쓰고도 밤 늦게까지 너끈한 최대 20시간의 배터리 사용
              시간각주¹
            </TypographyMuted>
          </div>
          <Separator />
          <div className='flex items-center gap-x-2'>
            <Icons.diagonal size={30} />
            <TypographyMuted className='overflow-hidden text-ellipsis text-xs'>
              생생한 색상과 놀라운 디테일을 보여주는 500 니트 밝기의 Retina
              디스플레이
            </TypographyMuted>
          </div>
          <Separator />
          <div className='flex items-center gap-x-2'>
            <Icons.plugZap size={30} />
            <TypographyMuted className='overflow-hidden text-ellipsis text-xs'>
              고속 액세서리에 연결하고 전원을 공급해주는 Thunderbolt 포트 2개
            </TypographyMuted>
          </div>
          <Separator />
        </CardContent>
        <CardFooter className='flex cursor-pointer select-none items-center  gap-x-1 '>
          <TypographyMuted className='text-blue-500'>
            MacBook Pro 13 더 살펴보기
          </TypographyMuted>
          <Icons.chevronRight className='text-blue-500' size={15} />
        </CardFooter>
      </Card>
    </Card>
  );
}
