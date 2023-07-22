/* eslint-disable @next/next/no-img-element */
'use client';

import * as React from 'react';
import { Icons } from '@/components/icons';

interface CarouselProps {
  images: { url: string }[];
  indicator?: boolean;
  orientation: 'vertical' | 'horizontal';
  autoplay?: boolean;
}

interface CarouselButtonProps {
  indication: 'left' | 'right';
  prev?: () => void;
  next?: () => void;
}

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & Partial<CarouselProps>
>(
  (
    {
      className,
      images,
      indicator = true,
      autoplay = false,
      children,
      ...props
    },
    ref
  ) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const prevSlide = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
      const isLastSlide = currentIndex === images.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };

    // const goToSlide = (slideIndex: number) => setCurrentIndex(slideIndex);

    return (
      <div
        ref={ref}
        className='group relative m-auto h-[780px] w-full max-w-[1400px] rounded-lg border bg-card text-card-foreground shadow-sm'
        {...props}
      >
        {indicator && <CarouselButton indication='left' prev={prevSlide} />}
        <div
          style={{
            backgroundImage: `url(${images[currentIndex].url})`,
          }}
          className='h-full w-full rounded-lg bg-cover bg-center duration-500'
        ></div>
        {indicator && <CarouselButton indication='right' next={nextSlide} />}
      </div>
    );
  }
);
Carousel.displayName = 'Carousel';

const CarouselButton = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement> & CarouselButtonProps
>(({ indication, prev, next, ...props }, ref) =>
  indication === 'left' ? (
    <button
      ref={ref}
      className='absolute left-5 top-[50%] hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-transparent p-2 text-2xl text-white group-hover:block'
      {...props}
    >
      <Icons.chevronLeft onClick={prev} />
    </button>
  ) : (
    <button
      className='absolute right-5 top-[50%] hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-transparent p-2 text-2xl text-white group-hover:block'
      {...props}
    >
      <Icons.chevronRight onClick={next} />
    </button>
  )
);

CarouselButton.displayName = 'CarouselButton';

export { Carousel };
