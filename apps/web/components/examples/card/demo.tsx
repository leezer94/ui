import Image from 'next/image';
import { Icons } from '@/components/icons';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Separator,
  TypographyMuted,
} from 'ui/components';
import {
  MotionValue,
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from 'framer-motion';
import { useCallback, MouseEvent, useRef } from 'react';

export default function CardDemo() {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const depth = 45;

  const handleMouseMove = useCallback(
    ({ currentTarget, clientX, clientY }: MouseEvent) => {
      let { left, top } = currentTarget.getBoundingClientRect();

      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    },
    [mouseX, mouseY]
  );

  let rotateX = useTransform<number, number>(mouseX, (newMouseX) => {
    if (!cardRef.current) return 0;

    const rect = cardRef.current.getBoundingClientRect();
    const newRotateX = newMouseX - rect.left - rect.height / 2;

    return -newRotateX / depth;
  });
  let rotateY = useTransform<number, number>(mouseY, (newMouseY) => {
    if (!cardRef.current) return 0;

    const rect = cardRef.current.getBoundingClientRect();
    const newRotateY = newMouseY - rect.top - rect.width / 2;

    return newRotateY / depth;
  });

  return (
    // <div className='flex h-[500px] w-full items-center justify-center border-2 bg-gray-600'>
    //   <motion.div
    //     onMouseMove={handleMouseMove}
    //     ref={cardRef}
    //     className=' h-[80%] w-[80%] border-2 bg-white backdrop-blur-xl'
    //     style={{ rotateX, rotateY }}
    //   >
    //     3D Card
    //   </motion.div>
    // </div>
    <Card
      className='group relative w-full max-w-md rounded-xl border border-white/10 bg-gray-900 px-8 py-16 shadow-2xl shadow-gray-900'
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className='pointer-events-none absolute -inset-px rounded-xl border-2 opacity-0 transition duration-300 group-hover:opacity-100'
        style={{
          background: useMotionTemplate`
          radial-gradient(
            650px circle at ${mouseX}px ${mouseY}px,
            rgba(14, 165, 233, 0.15),
            transparent 90%
          )
        `,
        }}
      />
      <CardHeader>
        <CardTitle className='text-5xl font-bold tracking-tight text-white'>
          Card
        </CardTitle>
        <CardDescription className='text-base font-semibold leading-7 text-sky-500'>
          Component
        </CardDescription>
        <CardContent className='mt-2 flex items-center gap-x-2'>
          <p className='mt-6 text-base leading-7 text-gray-300'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit, facilis
            illum eum ullam nostrum atque quam.
          </p>
        </CardContent>
      </CardHeader>
    </Card>
  );
}
