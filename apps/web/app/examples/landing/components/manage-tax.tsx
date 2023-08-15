import { Card, CardHeader, CardContent, CardTitle } from 'ui/components/card';

import { Avatar, AvatarImage, AvatarFallback } from 'ui/components/avatar';

import { TypographyMuted } from 'ui/components/typography';
import { Separator } from 'ui/components/separator';

export default function ManageTax() {
  return (
    <Card className='p-2'>
      <CardHeader>
        <CardTitle className='flex items-center justify-center text-xl'>
          <Avatar className='mr-2'>
            <AvatarImage src='https://images.unsplash.com/photo-1544005313-94ddf0286df2?&w=64&h=64&dpr=2&q=70&crop=faces&fit=crop' />
            <AvatarFallback>EX</AvatarFallback>
          </Avatar>
          <div className='flex items-center gap-2'>
            <TypographyMuted>구글</TypographyMuted>
            <Separator orientation='vertical' className='h-full' />
            <TypographyMuted>민수</TypographyMuted>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  );
}
