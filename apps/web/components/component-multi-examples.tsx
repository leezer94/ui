'use client';

import * as React from 'react';

import { cn } from '@/lib';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState, useCallback } from 'react';

interface ComponentExampleProps extends React.HTMLAttributes<HTMLDivElement> {
  extractClassName?: boolean;
  extractedClassNames?: string;
  align?: 'center' | 'start' | 'end';
  src?: string;
  categories?: string[];
}

export function ComponentMultiExamples({
  children,
  className,
  extractClassName,
  extractedClassNames,
  align = 'center',
  categories,
  src: _,
  ...props
}: ComponentExampleProps) {
  const childrens = React.Children.toArray(children) as React.ReactElement[];
  const [currentCategory, setCurrentCategory] = useState<string>('default');

  const handleCategory = useCallback(
    (category: string) => setCurrentCategory(category),
    []
  );

  return (
    <div
      className={cn('group relative my-4 flex flex-col space-y-2', className)}
      {...props}
    >
      <Tabs defaultValue='default' className='relative mr-auto w-full'>
        <div className='flex items-center justify-between pb-3'>
          <TabsList className='w-full justify-start rounded-none border-b bg-transparent p-0'>
            {categories?.map((category, idx) => (
              <TabsTrigger
                key={`${category}/${idx}`}
                value={category}
                className='relative rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none'
                onClick={() => handleCategory(category)}
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        {categories?.map((category, idx) => (
          <TabsContent
            key={`category/${idx}`}
            value={category}
            className='rounded-md border'
          >
            {childrens.map(
              (children, idx) =>
                currentCategory === children.props.buttonVariant && (
                  <div
                    key={`example/${idx}`}
                    className={cn('flex min-h-[350px] justify-center p-10', {
                      'items-center': align === 'center',
                      'items-start': align === 'start',
                      'items-end': align === 'end',
                    })}
                  >
                    <div className='flex w-full max-w-[70%] flex-col justify-between gap-x-5'>
                      {children}
                    </div>
                  </div>
                )
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
