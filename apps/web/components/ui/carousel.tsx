'use client';

import * as React from 'react';
import { Icons } from '@/components/icons';
import { cn } from '@/lib';

interface CarouselProps {
  buttonColor: 'black' | 'white';
  indicator: boolean;
  orientation: 'vertical' | 'horizontal';
  autoplay: boolean;
  autoplayInterval: number;
}

interface CarouselButtonProps {
  indication: 'left' | 'right';
  prev: () => void;
  next: () => void;
  keyPrev: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
  keyNext: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
}

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & Partial<CarouselProps>
>(
  (
    {
      className,
      buttonColor = 'black',
      indicator = true,
      autoplay = false,
      orientation = 'vertical',
      autoplayInterval = 1000,
      children,
      ...props
    },
    ref
  ) => {
    const [isPaused, setIsPaused] = React.useState(false);
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const elements = React.Children.toArray(children);
    const isFirstSlide = currentIndex === 0;
    const isLastSlide = currentIndex === elements.length - 1;

    const prevSlide = React.useCallback(() => {
      const newIndex = isFirstSlide ? elements.length - 1 : currentIndex - 1;

      setCurrentIndex(newIndex);
    }, [currentIndex, elements.length, isFirstSlide]);

    const nextSlide = React.useCallback(() => {
      const newIndex = isLastSlide ? 0 : currentIndex + 1;

      setCurrentIndex(newIndex);
    }, [currentIndex, isLastSlide]);

    const keyboardSlide = React.useCallback(
      (
        event: React.KeyboardEvent<HTMLButtonElement>,
        indicatorFn: () => void
      ) => (event.key !== ' ' && event.key !== 'Enter') ?? indicatorFn(),
      []
    );

    const handleSlideIndex = React.useCallback(
      (slideIndex: number) => setCurrentIndex(slideIndex),
      []
    );

    const handleSlidePause = React.useCallback(
      (boolean: boolean) => setIsPaused(boolean),
      []
    );

    React.useEffect(() => {
      let autoplayTimer: ReturnType<typeof setInterval>;

      if (autoplay && !isPaused) {
        autoplayTimer = setInterval(() => {
          nextSlide();
        }, autoplayInterval);

        return () => clearInterval(autoplayTimer);
      }
    }, [nextSlide, autoplayInterval, autoplay, isPaused]);

    return (
      <div
        ref={ref}
        className={cn(
          'group relative m-auto h-[780px] w-full max-w-[1400px] rounded-lg border bg-card text-card-foreground shadow-sm',
          `${orientation === 'horizontal' && 'max-h-[450px] w-full'}`
        )}
        onMouseOver={() => handleSlidePause(true)}
        onMouseOut={() => handleSlidePause(false)}
        {...props}
      >
        {indicator && !isFirstSlide && (
          <CarouselButton
            color={buttonColor}
            indication='left'
            prev={prevSlide}
            keyPrev={(e) => keyboardSlide(e, prevSlide)}
            onFocus={() => handleSlidePause(true)}
            onBlur={() => handleSlidePause(false)}
          />
        )}
        <div className='h-full duration-500'>{elements[currentIndex]}</div>
        <div className='top-4 flex justify-center py-2'>
          {elements.map((_, idx) => (
            <div
              key={`slide${idx}`}
              onClick={() => handleSlideIndex(idx)}
              className='cursor-pointer text-2xl'
            >
              <Icons.dot
                className={cn(
                  'text-foreground/40 hover:text-foreground/60 duration-300',
                  `${idx === currentIndex && `text-foreground`}`
                )}
              />
            </div>
          ))}
        </div>
        {indicator && !isLastSlide && (
          <CarouselButton
            color={buttonColor}
            indication='right'
            next={nextSlide}
            keyPrev={(e) => keyboardSlide(e, nextSlide)}
            onFocus={() => handleSlidePause(true)}
            onBlur={() => handleSlidePause(false)}
          />
        )}
      </div>
    );
  }
);

Carousel.displayName = 'Carousel';

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { src: string }
>(({ className, src, ...props }, ref) => (
  <div className={cn('', className)} ref={ref} {...props}></div>
));

CarouselItem.displayName = 'CarouselItem';

const CarouselButton = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement> & Partial<CarouselButtonProps>
>(({ indication, color, prev, keyPrev, next, keyNext, ...props }, ref) =>
  indication === 'left' ? (
    <button
      ref={ref}
      className={cn(
        'absolute left-0 top-[50%] hidden translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-transparent p-2 text-2xl group-hover:block',
        `${`text-${color}`}`
      )}
      onKeyDown={keyPrev}
      onClick={prev}
      tabIndex={0}
      {...props}
    >
      <Icons.chevronLeft />
    </button>
  ) : (
    <button
      className={cn(
        'absolute right-0 top-[50%] hidden translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-transparent p-2 text-2xl group-hover:block',
        `${`text-${color}`}`
      )}
      onKeyDown={keyNext}
      onClick={next}
      tabIndex={0}
      {...props}
    >
      <Icons.chevronRight />
    </button>
  )
);

CarouselButton.displayName = 'CarouselButton';

export { Carousel, CarouselItem };
