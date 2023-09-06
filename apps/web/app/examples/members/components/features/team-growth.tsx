import { teamProfitConfig } from '@/config/examples';
import { cn } from '@/lib/utils';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from 'ui/src/components/card';
import { TypographyH4, TypographyMuted } from 'ui/src/components/typography';

export default function TeamGrowth() {
  return (
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
              <TypographyMuted className='text-sm'>{title}</TypographyMuted>
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
  );
}
