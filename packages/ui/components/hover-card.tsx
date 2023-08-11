'use client';

import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
import React from 'react';
import { cn } from '../lib/utils';

const HoverCard = HoverCardPrimitive.Root;

const HoverCardTrigger = HoverCardPrimitive.Trigger;

const HoverCardPortal = HoverCardPrimitive.Portal;

const HoverCardArrow = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Arrow>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Arrow>
>(({ className, ...props }, ref) => (
  <HoverCardPrimitive.Arrow
    ref={ref}
    className={cn('mt-2 fill-white', className)}
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
      className={cn('', className)}
      {...props}
    >
      {children}
      <HoverCardArrow className='' />
    </HoverCardPrimitive.Content>
  </HoverCardPortal>
));

HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

export { HoverCard, HoverCardTrigger, HoverCardContent, HoverCardArrow };
