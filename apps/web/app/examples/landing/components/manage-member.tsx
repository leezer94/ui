import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from 'ui/components/card';
import { Button } from 'ui/components/button';
import { Avatar, AvatarFallback, AvatarImage } from 'ui/components/avatar';
import { TypographyMuted } from 'ui/components/typography';
import { Icons } from '@/components/icons';

const MEMBERS = [
  {
    src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?&w=64&h=64&dpr=2&q=70&crop=faces&fit=crop',
    name: 'Keonhee',
    email: 'keonhee.dev@example.com',
    fallback: 'KH',
  },
  {
    src: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?&w=64&h=64&dpr=2&q=70&crop=faces&fit=crop',
    name: 'Jaesang',
    email: 'borderjae@example.com',
    fallback: 'JC',
  },
  {
    src: 'https://images.unsplash.com/photo-1526510747491-58f928ec870f?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.48&fp-y=0.48&fp-z=1.3&fit=crop',
    name: 'YoungJin',
    email: 'newhar@example.com',
    fallback: 'YK',
  },
  {
    src: 'https://images.unsplash.com/photo-1541823709867-1b206113eafd?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1.5&fit=crop',
    name: 'Taekyung',
    email: 'taekyung@example.com',
    fallback: 'TS',
  },
  {
    src: 'https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.48&fp-y=0.35&fp-z=2&fit=crop',
    name: 'Youngyun',
    email: 'yougyun@example.com',
    fallback: 'YA',
  },
  {
    src: 'https://plus.unsplash.com/premium_photo-1691622500373-da5adfe5b2ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    name: 'SeHee',
    email: 'shinsehantan@example.com',
    fallback: 'SS',
  },
];

export default function ManageMember() {
  return (
    <Card className='w-4/12 p-2'>
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
        {MEMBERS.map(({ src, name, email, fallback }, idx) => (
          <div
            key={`${name}/${idx}`}
            className='flex items-center gap-x-2 border-b-2 pb-2 text-left'
          >
            <Avatar>
              <AvatarImage src={src} />
              <AvatarFallback>{fallback}</AvatarFallback>
            </Avatar>
            <TypographyMuted className='hidden w-[15%] max-w-[15%] text-center text-orange-500 md:flex'>
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
