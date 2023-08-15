'use client';

import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from 'ui/components/card';
import { Avatar, AvatarImage, AvatarFallback } from 'ui/components/avatar';
import {
  Accordion,
  AccordionContent,
  AccordionDescription,
  AccordionItem,
  AccordionTrigger,
} from 'ui/components/accordion';
import { TypographyMuted, TypographyH4 } from 'ui/components/typography';
import { Separator } from 'ui/components/separator';
import { Carousel } from 'ui/components/carousel';
import { membersConfig, teamProfitConfig } from '@/config/examples';
import { Button } from 'ui/components/button';
import { useState, useCallback } from 'react';
import { cn } from '@/lib/utils';

export default function HireMember() {
  const [isHovered, setIsHovered] = useState(false);

  const handleIsHovered = useCallback(
    () => setIsHovered(!isHovered),
    [isHovered]
  );

  return (
    <Card className='z-50 p-2'>
      <CardHeader>
        <CardTitle className='flex items-center justify-center text-xl'>
          <Avatar className='mr-2'>
            <AvatarImage src='https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?&w=64&h=64&dpr=2&q=70&crop=faces&fit=crop' />
            <AvatarFallback>JC</AvatarFallback>
          </Avatar>
          <div className='flex items-center gap-2'>
            <TypographyMuted>프로젝트 매니저</TypographyMuted>
            <Separator orientation='vertical' className='h-4' />
            <TypographyMuted>재상</TypographyMuted>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className='flex'>
        <div className='flex w-full justify-between'>
          <div className='flex w-[50%] flex-col'>
            <Accordion
              className='mb-2 min-h-[250px] w-full'
              type='single'
              collapsible
            >
              <AccordionItem value='item-1'>
                <AccordionTrigger>
                  어떤 개발 방식을 지향하나요 ?
                  <AccordionDescription>
                    우리의 개발 문화에 대해 이야기 합니다.
                  </AccordionDescription>
                </AccordionTrigger>
                <AccordionContent>
                  애자일한 개발방싱을 지향해요 !
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value='item-2'>
                <AccordionTrigger>
                  기술 스택 선정은 어떻게 이루어지나요 ?
                </AccordionTrigger>
                <AccordionContent>
                  팀원들과의 소통을 통해 가장 자신있는 스택으로 선정하고 새로운
                  기술은 같이 배워나가요.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value='item-3'>
                <AccordionTrigger>복지는 어떻나요 ?</AccordionTrigger>
                <AccordionContent>
                  최신 사양 노트북을 제공하고, 점심 식대 제공합니다.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Card className='h-full rounded-md border-none shadow-none'>
              <CardHeader>
                <CardTitle className='text-2xl'>Team Growth</CardTitle>
                <CardDescription>
                  이전달의 KPI 와 비교해서 리뷰해 보세요.
                </CardDescription>
              </CardHeader>
              <CardContent className='m-0 grid grid-cols-3 gap-6 p-2'>
                {teamProfitConfig.map(({ title, percentage, growth }, idx) => (
                  <Card
                    key={`${title}/${idx}`}
                    className='border-0 p-1 shadow-md transition-all duration-200 hover:scale-125'
                  >
                    <div className='mb-2 flex justify-between pt-2'>
                      <TypographyMuted className='text-sm'>
                        {title}
                      </TypographyMuted>
                      <TypographyMuted
                        className={cn(
                          'flex rounded-xl border px-2 text-center text-xs items-center',
                          `${
                            parseInt(percentage, 10) < 0
                              ? 'bg-red-50 text-red-500'
                              : parseInt(percentage, 10) === 0
                              ? null
                              : 'bg-green-50 text-green-500'
                          }`
                        )}
                      >
                        {percentage}
                      </TypographyMuted>
                    </div>
                    <CardContent className='flex justify-center'>
                      <TypographyH4 className='text-2xl font-bold'>
                        {growth}
                      </TypographyH4>
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>
          </div>
          <div
            className={cn('flex h-[30%] w-[40%] items-center justify-center ')}
          >
            <Button
              onClick={handleIsHovered}
              className={cn(
                'absolute top-[60%] z-50 text-white text-lg',
                `${isHovered && 'hidden'}`
              )}
              variant='outline'
              size='lg'
            >
              Our Team Members
            </Button>
            <Carousel
              className={cn('h-fit w-fit')}
              buttonColor='white'
              orientation='vertical'
              autoplayInterval={1500}
              autoplay
            >
              {membersConfig.map(({ name, src }, idx) => (
                <div
                  key={`${name}/${idx}`}
                  className={cn(
                    'h-full w-full rounded-lg bg-cover bg-center transition-all duration-500',
                    `${isHovered ? 'blur-none' : 'blur'}`
                  )}
                  style={{ backgroundImage: `url(${src})` }}
                />
              ))}
            </Carousel>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
