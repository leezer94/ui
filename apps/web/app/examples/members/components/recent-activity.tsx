import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from 'ui/components/card';
import { Avatar, AvatarFallback, AvatarImage } from 'ui/components/avatar';
import { membersConfig } from '@/config/examples';
import { TypographyMuted } from 'ui/components/typography';
import { cn } from '@/lib/utils';

export default function RecentActivity() {
  return (
    <Card className='h-full w-full border-2'>
      <CardHeader>
        <CardTitle>최근 활동한 멤버</CardTitle>
        <CardDescription>최근 활동한 멤버들을 확인하세요.</CardDescription>
      </CardHeader>
      <CardContent className='flex w-full flex-col-reverse gap-y-2'>
        {membersConfig.map(({ src, name, fallback, activity }, idx) => (
          <Card
            className={cn(
              'flex gap-x-2 rounded-l-3xl transition-all opacity-0',
              `delay-${idx * 100} opacity-100 duration-500`
            )}
            key={`${activity}/${idx}`}
          >
            <Avatar>
              <AvatarImage src={src} />
              <AvatarFallback>{fallback}</AvatarFallback>
            </Avatar>
            <div className='flex w-full flex-col'>
              <div className='flex justify-between pr-2 pt-1'>
                <TypographyMuted className='font-semibold text-foreground'>
                  {name}
                </TypographyMuted>
                <TypographyMuted>{activity.activeAt}</TypographyMuted>
              </div>
              <TypographyMuted className='overflow-hidden text-sm'>
                {activity.action}
              </TypographyMuted>
            </div>
          </Card>
        ))}
      </CardContent>
    </Card>
  );
}
