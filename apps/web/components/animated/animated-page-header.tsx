'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import React from 'react';

function AnimatedPageHeading({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof motion.h1>) {
  return (
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 100 }}
      transition={{ ease: 'easeIn', delay: 0.5, duration: 0.5 }}
      className={cn(
        'text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]'
      )}
      {...props}
    >
      {children}
    </motion.h1>
  );
}

function AnimatedPageDescription({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof motion.h4>) {
  return (
    <motion.h4
      initial={{ opacity: 0 }}
      animate={{ opacity: 100 }}
      transition={{ ease: 'easeIn', delay: 1, duration: 0.5 }}
      className={cn(
        'max-w-[750px] text-lg text-muted-foreground sm:text-xl',
        className
      )}
      {...props}
    />
  );
}

function AnimatedWrapper({
  className,
  variants,
  ...props
}: React.ComponentPropsWithoutRef<typeof motion.div>) {
  return (
    <motion.div
      {...variants}
      initial={{ opacity: 0 }}
      animate={{ opacity: 100 }}
      transition={{ ease: 'easeIn', delay: 1.5, duration: 0.5 }}
      className={cn('', className)}
      {...props}
    />
  );
}

function AnimatedContainer({
  className,
  variants,
  ...props
}: React.ComponentPropsWithoutRef<typeof motion.div>) {
  return (
    <motion.div
      {...variants}
      initial={{ opacity: 0 }}
      animate={{ opacity: 100 }}
      transition={{ ease: 'easeIn', delay: 1.5, duration: 1 }}
      className={cn('', className)}
      {...props}
    />
  );
}

export {
  AnimatedContainer,
  AnimatedWrapper,
  AnimatedPageDescription,
  AnimatedPageHeading,
};
