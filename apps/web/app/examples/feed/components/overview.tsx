import { ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from 'ui/components/card';
import { cn } from '@/lib';

interface Props {
  icon: ReactNode;
  title: string;
  amount: string | number;
  description: string;
  className?: string;
}

export default function Overview({
  icon,
  title,
  amount,
  description,
  className,
}: Props) {
  return (
    <Card className={cn('', className)}>
      <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
        <CardTitle className='text-sm font-medium'>{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className='text-2xl font-bold'>{amount}</div>
        <p className='text-xs text-muted-foreground'>{description}</p>
      </CardContent>
    </Card>
  );
}
