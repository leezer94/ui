'use client';

import React from 'react';
import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
import { cn } from '../lib';

const HoverCard = HoverCardPrimitive.Root;

const HoverCardTrigger = HoverCardPrimitive.Trigger;

const HoverCardPortal = HoverCardPrimitive.Portal;

const HoverCardArrow = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Arrow>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Arrow>
>(({ className, ...props }, ref) => (
  <HoverCardPrimitive.Arrow
    ref={ref}
    className={cn('fill-transparent', className)}
    {...props}
  />
));

HoverCardArrow.displayName = HoverCardPrimitive.Arrow.displayName;

const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <HoverCardPortal>
    <HoverCardPrimitive.Content
      ref={ref}
      className={cn(
        'flex flex-col border w-[300px] rounded-md shadow-lg bg-white p-3 data-[side=bottom]:animate-slide-up-fade data-[side=right]:animate-slide-left-fade data-[side=left]:animate-slide-right-fade data-[side=top]:animate-slide-down-fade',
        className
      )}
      {...props}
    >
      {children}
      <HoverCardArrow />
    </HoverCardPrimitive.Content>
  </HoverCardPortal>
));

HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

const HoverCardHeader = ({
  className,
  ...props
}: React.HtmlHTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('w-full justify-start flex flex-col pb-2', className)}
    {...props}
  />
);

HoverCardHeader.displayName = 'HoverCardHeader';

const HoverCardTitle = ({
  className,
  ...props
}: React.HtmlHTMLAttributes<HTMLHeadingElement>) => (
  <h1 className={cn('text-md font-md', className)} {...props} />
);

HoverCardTitle.displayName = 'HoverCardTitle';

const HoverCardDescription = ({
  className,
  ...props
}: React.HtmlHTMLAttributes<HTMLParagraphElement>) => (
  <p
    className={cn('text-sm font-md text-foreground/60', className)}
    {...props}
  />
);

HoverCardDescription.displayName = 'HoverCardDescription';

const HoverCardFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex flex-reverse justify-end', className)} {...props} />
);

HoverCardFooter.displayName = 'HoverCardFooter';

export {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
  HoverCardArrow,
  HoverCardHeader,
  HoverCardTitle,
  HoverCardDescription,
  HoverCardFooter,
};
