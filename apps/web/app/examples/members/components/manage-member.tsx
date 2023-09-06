import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from 'ui/src/components/card';
import { Button } from 'ui/src/components/button';
import { Avatar, AvatarFallback, AvatarImage } from 'ui/src/components/avatar';
import { TypographyMuted } from 'ui/src/components/typography';
import { Icons } from '@/components/icons';
import { membersConfig } from '@/config/examples';

export default function ManageMember() {
  return (
    <Card className='h-[60%] w-full p-2'>
      <CardHeader>
        <div className='mb-5 flex flex-col gap-y-2'>
          <CardTitle>현재 운용가능 인원</CardTitle>
          <CardDescription>
            현재 운용가능 인원을 확인하고 관리하세요.
          </CardDescription>
        </div>
        <div className='flex gap-x-2'>
          <input
            className='flex-1 border px-2 text-sm'
            name='add-member'
            placeholder='이메일을 입력해 주세요.'
          />
          <Button variant='outline' size='sm' className='text-sm'>
            초대하기
          </Button>
        </div>
      </CardHeader>
      <CardContent className='flex flex-col gap-y-2 overflow-scroll'>
        {membersConfig.map(({ src, name, email, fallback }, idx) => (
          <div
            key={`${name}/${idx}`}
            className='flex items-center gap-x-2 border-b-2 pb-2 text-left'
          >
            <Avatar>
              <AvatarImage src={src} />
              <AvatarFallback>{fallback}</AvatarFallback>
            </Avatar>
            <TypographyMuted className='hidden w-[15%] max-w-[15%] text-ellipsis text-center text-orange-500 md:flex'>
              {name}
            </TypographyMuted>
            <TypographyMuted className='hidden flex-1 px-2 text-start md:flex'>
              {email}
            </TypographyMuted>
            <Button size='sm' variant='ghost'>
              <Icons.ellipsisHorizontal className='h-4 w-4' />
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
