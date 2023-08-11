'use client';

import { useState, useCallback, useEffect } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from 'ui/components/alert-dialog';
import { Card, CardContent, CardHeader, CardTitle } from 'ui/components/card';
import { TypographyH4 } from 'ui/components/typography';
import { Button } from 'ui/components/button';
import { Separator } from 'ui/components/separator';
import { todoListConfig } from '@/config/examples';
import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';
import ProgressBar from '../../../app/examples/feed/components/progress-bar';

const MEETUPS = [
  {
    id: 1,
    name: 'Football',
    status: '2 Spots Left',
    level: 'A',
    nickname: 'FB',
  },
  {
    id: 2,
    name: 'BasketBall',
    status: 'Filled',
    level: 'B',
    nickname: 'BB',
  },
  {
    id: 3,
    name: 'History',
    status: '1 Spot Left',
    level: 'A',
    nickname: 'HS',
  },
  {
    id: 4,
    name: 'English',
    status: '10 Spots Left',
    level: 'C',
    nickname: 'EN',
  },
];

export default function AlertDialogDemo() {
  const [todoList, setTodoList] = useState([...todoListConfig]);
  const percentage = 100 - 25 * todoList.length;

  const handleDeleteTodo = useCallback(
    (todoId: number) => {
      const copied = todoList.slice();
      const targetIndex = todoList.findIndex(({ id }) => id === todoId);
      copied.splice(targetIndex, 1);

      setTodoList(copied);
    },
    [todoList]
  );

  const handleResetTodo = useCallback(() => setTodoList(todoListConfig), []);

  return (
    <Card className='row-span-2 h-full w-full min-w-[300px] border-none shadow-xl'>
      <CardHeader className='mb-5 flex flex-row items-center justify-between space-y-0 pb-2'>
        <CardTitle className='flex w-full items-baseline justify-between gap-x-2'>
          Todo
          <div className='flex w-[60%] flex-col items-center gap-y-1'>
            <ProgressBar
              percentage={percentage}
              defaultProgress={0}
              className='w-[100%]'
            />
            <span className='text-sm font-medium'>
              {todoList.length === 0 ? 'completed' : 'progress'}
            </span>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className='flex flex-col gap-y-5'>
        {todoList.length === 0 && (
          <div className='flex justify-center'>
            <Button
              className='gap-4 text-lg'
              variant='ghost'
              size='md'
              onClick={handleResetTodo}
            >
              <Icons.partyPopper className='mr-2 h-4 w-4' />
              No more todos left
              <Icons.partyPopper className='mr-2 h-4 w-4' />
            </Button>
          </div>
        )}
        {todoList.map(({ title, status, dueDate, id }, idx) => (
          <Card key={`${title}/${idx}`}>
            <CardContent className='flex p-3 text-left'>
              <p className='flex-1 p-0 text-left font-bold'>{title}</p>
              <Separator
                className='mx-2 hidden h-6 md:block'
                orientation='vertical'
              />
              <p
                className={cn(
                  'flex-1 hidden md:block',
                  (status === 'Canceled' || status === 'Done') && 'line-through'
                )}
              >
                {status}
              </p>
              <Separator
                className='mx-2 hidden h-6 md:block'
                orientation='vertical'
              />
              <div className={cn('flex-1 flex justify-evenly')}>
                <p
                  className={cn(
                    'flex-1 hidden sm:block',
                    dueDate === 'D - 1' && 'text-red-600 font-bold'
                  )}
                >
                  {dueDate}
                </p>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Icons.trash2
                      className={cn(
                        'cursor-pointer items-center justify-center',
                        `${idx === 0 && 'animate-bounce drop-shadow-2xl'}`
                      )}
                    />
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle className='text-xl font-semibold'>
                        Complete it !!
                      </AlertDialogTitle>
                      <AlertDialogDescription className='text-sm font-light'>
                        Delete todo that you have completed
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogCancel>
                      <Button variant='outline' size='sm'>
                        Cancel
                      </Button>
                    </AlertDialogCancel>
                    <AlertDialogAction>
                      <Button size='sm' onClick={() => handleDeleteTodo(id)}>
                        Complete
                      </Button>
                    </AlertDialogAction>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </CardContent>
          </Card>
        ))}
      </CardContent>
    </Card>
  );
}
