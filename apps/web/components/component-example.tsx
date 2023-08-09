'use client';

import * as React from 'react';

import { cn } from '@/lib';
import { Tabs, TabsContent, TabsList, TabsTrigger } from 'ui/components/tabs';
import { CopyButton, CopyWithClassNames } from '@/components/copy-button';

interface ComponentExampleProps extends React.HTMLAttributes<HTMLDivElement> {
  extractClassName?: boolean;
  extractedClassNames?: string;
  align?: 'center' | 'start' | 'end';
  src?: string;
  category?: string;
}

export function ComponentExample({
  children,
  className,
  extractClassName,
  extractedClassNames,
  align = 'center',
  category = 'Sample',
  src: _,
  ...props
}: ComponentExampleProps) {
  const [Example, Code, ...Children] = React.Children.toArray(
    children
  ) as React.ReactElement[];

  const codeString = React.useMemo(() => {
    if (
      typeof Code?.props['data-rehype-pretty-code-fragment'] !== 'undefined'
    ) {
      const [, Button] = React.Children.toArray(
        Code.props.children
      ) as React.ReactElement[];
      return Button?.props?.value || Button?.props?.__rawString__ || null;
    }
  }, [Code]);

  return (
    <div
      className={cn('group relative my-4 flex flex-col space-y-2', className)}
      {...props}
    >
      <Tabs defaultValue='Sample' className='relative mr-auto w-full'>
        <div className='flex items-center justify-between pb-3'>
          <TabsList className='w-full justify-start rounded-none border-b bg-transparent p-0'>
            <TabsTrigger
              value='Sample'
              className='relative rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none'
            >
              {category}
            </TabsTrigger>
            {/* Code Area */}
            {/* <TabsTrigger
              value='code'
              className='relative rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none'
            >
              Code
            </TabsTrigger> */}
          </TabsList>
          {extractedClassNames ? (
            <CopyWithClassNames
              value={codeString}
              classNames={extractedClassNames}
              className='absolute right-4 top-20'
            />
          ) : (
            codeString && (
              <CopyButton
                value={codeString}
                className='absolute right-4 top-20'
              />
            )
          )}
        </div>
        <TabsContent value='Sample' className='rounded-md border'>
          <div
            className={cn('flex min-h-[350px] justify-center p-10', {
              'items-center': align === 'center',
              'items-start': align === 'start',
              'items-end': align === 'end',
            })}
          >
            {Example}
          </div>
        </TabsContent>
        {/* Code Area */}
        {/* <TabsContent value='code'>
          <div className='flex flex-col space-y-4'>
            <div className='w-full rounded-md [&_button]:hidden [&_pre]:my-0 [&_pre]:max-h-[350px] [&_pre]:overflow-auto'>
              {Code}
            </div>
            {Children?.length ? (
              <div className='rounded-md [&_button]:hidden [&_pre]:my-0 [&_pre]:max-h-[350px] [&_pre]:overflow-auto'>
                {Children}
              </div>
            ) : null}
          </div>
        </TabsContent> */}
      </Tabs>
    </div>
  );
}
