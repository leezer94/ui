'use client';

import { Card, CardHeader, CardContent, CardTitle } from 'ui/components/card';
import { Avatar, AvatarImage, AvatarFallback } from 'ui/components/avatar';
import { TypographyMuted } from 'ui/components/typography';
import { Separator } from 'ui/components/separator';
import RecentActivity from '@/app/examples/members/components/features/recent-activity';
import {
  TeamGrowth,
  TeamMembers,
} from '@/app/examples/members/components/features';

export default function HireMember() {
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
      <CardContent className='flex'>
        <div className='flex w-full justify-between'>
          <div className='flex w-[50%] flex-col'>
            <RecentActivity />
            <TeamGrowth />
          </div>
          <TeamMembers />
        </div>
      </CardContent>
    </Card>
  );
}
