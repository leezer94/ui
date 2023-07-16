import { cn } from '@/lib';

export type Typography = string;

export function TypographyH1({
  children,
  className,
}: {
  children: Typography;
  className?: string;
}) {
  return (
    <h1
      className={cn(
        'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
        className
      )}
    >
      {children}
    </h1>
  );
}

export function TypographyH2({
  children,
  className,
}: {
  children: Typography;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0',
        className
      )}
    >
      {children}
    </h2>
  );
}

export function TypographyH3({
  children,
  className,
}: {
  children: Typography;
  className?: string;
}) {
  return (
    <h3
      className={cn(
        'scroll-m-20 text-2xl font-semibold tracking-tight',
        className
      )}
    >
      {children}
    </h3>
  );
}

export function TypographyH4({ children }: { children: Typography }) {
  return (
    <h4 className='scroll-m-20 text-xl font-semibold tracking-tight'>
      {children}
    </h4>
  );
}

export function TypographyP({
  children,
  className,
}: {
  children: Typography;
  className?: string;
}) {
  return (
    <p className={cn('leading-7 [&:not(:first-child)]:mt-6', className)}>
      {children}
    </p>
  );
}

export function TypographyMuted({
  children,
  className,
}: {
  children: Typography;
  className?: string;
}) {
  return (
    <p className={cn('text-sm text-muted-foreground', className)}>{children}</p>
  );
}
