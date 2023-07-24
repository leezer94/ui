import { Icons } from '@/components/icons';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Carousel,
  Separator,
} from '@/components/ui';
import { TypographyMuted } from '@/components/ui/typography';
import Image from 'next/image';

export default function CardDemo() {
  const IMAGE =
    'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp-digitalmat-gallery-2-202206_GEO_KR?wid=364&hei=333&fmt=png-alpha&.v=1665427482788';

  return (
    <Card className='flex h-full w-full justify-evenly'>
      <Card className='flex-1 select-none'>
        <Image
          className='flex-1'
          width={300}
          height={550}
          src={IMAGE}
          alt='MacBook pro 13'
        />
      </Card>
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
