'use client';

import React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { cn } from '../lib/utils';

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, children, ...props }, ref) => {
  return (
    <AvatarPrimitive.Root
      ref={ref}
      className={cn(
        `rounded-full h-[45px] w-[45px] border-orange-500 border-2 flex justify-center items-center select-none align-middle overflow-hidden bg-blackA3`,

        className
      )}
      {...props}
    >
      {children}
    </AvatarPrimitive.Root>
  );
});

Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, onLoadingStatusChange, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    onLoadingStatusChange={onLoadingStatusChange}
    className={cn(
      'h-full w-full rounded-[inherit] object-cover bg-cover',
      className
    )}
    {...props}
  />
));

AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, delayMs, children, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      'flex items-center justify-center w-full h-full font-medium text-lg text-foreground/80 border-2 rounded-[inherit] bg-white',
      className
    )}
    delayMs={delayMs}
    {...props}
  >
    {children}
  </AvatarPrimitive.Fallback>
));

AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };
