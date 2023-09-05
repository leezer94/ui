'use client';

import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import React, { ReactNode } from 'react';
import { cn } from '../lib/utils';

interface CheckboxIndicatorProps {
  icon: ReactNode;
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      'hover:bg-foreground/5 flex h-[25px] w-[25px] border appearance-none items-center justify-center rounded-md bg-white outline-none ',
      className
    )}
    {...props}
  />
));

Checkbox.displayName = CheckboxPrimitive.Checkbox.displayName;

const CheckboxIndicator = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Indicator> &
    CheckboxIndicatorProps
>(({ className, icon, ...props }, ref) => (
  <CheckboxPrimitive.Indicator
    ref={ref}
    className={cn('text-black ', className)}
    {...props}
  >
    {icon}
  </CheckboxPrimitive.Indicator>
));

CheckboxIndicator.displayName = CheckboxPrimitive.Indicator.displayName;

export { Checkbox, CheckboxIndicator };
