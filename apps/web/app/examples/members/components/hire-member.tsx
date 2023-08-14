'use client';

import { Card, CardHeader, CardContent, CardTitle } from 'ui/components/card';
import { Avatar, AvatarImage, AvatarFallback } from 'ui/components/avatar';
import {
  Accordion,
  AccordionContent,
  AccordionDescription,
  AccordionItem,
  AccordionTrigger,
} from 'ui/components/accordion';
import { TypographyMuted } from 'ui/components/typography';
import { Separator } from 'ui/components/separator';
import { Carousel } from 'ui/components/carousel';
import { membersConfig } from '@/config/examples';
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
    <Card className='p-2'>
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
      <CardContent className='flex gap-x-2 px-5'>
        <div className='flex w-full justify-between'>
          <Accordion className='w-[50%] flex-col' type='single' collapsible>
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
