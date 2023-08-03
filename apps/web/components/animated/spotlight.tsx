'use client';

import { MouseEvent, useCallback } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

export default function Spotlight() {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  const handleMouseMove = useCallback(
    ({ currentTarget, clientX, clientY }: MouseEvent) => {
      let { left, top } = currentTarget.getBoundingClientRect();

      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    },
    [mouseX, mouseY]
  );

  return (
    <div
      className='group relative h-screen w-full max-w-md rounded-xl border border-white/10 bg-gray-900 px-8 py-16 shadow-2xl'
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className='pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100'
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(14, 165, 233, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <div>
        <h3 className='text-base font-semibold leading-7 text-sky-500'>
          Byline
        </h3>
        <div className='mt-2 flex items-center gap-x-2'>
          <span className='text-5xl font-bold tracking-tight text-white'>
            Hero
          </span>
        </div>
        <p className='mt-6 text-base leading-7 text-gray-300'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit, facilis illum
          eum ullam nostrum atque quam.
        </p>
      </div>
    </div>
  );
}
