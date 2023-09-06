import { useCallback, MouseEvent, useRef } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from 'ui/src/components/card';
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from 'framer-motion';

export default function CardDemo() {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  /**
   * 왼쪽 상단 rotateX(-10deg) rotateY(10deg)
   * 왼쪽 하단 rotateX(10deg) rotateY(10deg)
   *
   * 기본 중앙 rotateX(0deg) rotateY(0deg)
   * 상단 중앙 rotateX(-10deg) rotateY(0deg)
   * 좌측 중앙 rotateX(0deg) rotateY(10deg)
   * 하단 중앙 rotateX(0deg) rotateY(0deg)
   * 우측 중앙 rotateX(10deg) rotateY(-10deg)
   *
   *
   * 오른쪽 상단 rotateX(-10deg) rotateY(-10deg)
   * 오른쪽 하단 rotateX(10deg) rotateY(-10deg)
   */

  const handleMouseMove = useCallback(
    ({ currentTarget, clientX, clientY }: MouseEvent) => {
      let { left, top, width, height } = currentTarget.getBoundingClientRect();

      const cardCenterX = left + width / 2;
      const cardCenterY = top + height / 2;

      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    },
    [mouseX, mouseY]
  );

  /**
   * rotation 의 범위는 from -10deg to 10deg
   */

  const rotateY = useTransform<number, number>(mouseX, (newMouseX) => {
    const horizontalDepth = 15;
    if (!cardRef.current) return 0;

    const { width } = cardRef.current.getBoundingClientRect();
    const newRotateX = newMouseX - width / 2;

    return -newRotateX / horizontalDepth;
  });
  const rotateX = useTransform<number, number>(mouseY, (newMouseY) => {
    const verticalDepth = 15;
    if (!cardRef.current) return 0;

    const { height } = cardRef.current.getBoundingClientRect();
    const newRotateY = newMouseY - height / 2;

    return -newRotateY / verticalDepth;
  });

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);

    animate(mouseX, 0, { duration: 0.5 }); // Assuming the duration is 0.5 seconds
    animate(mouseY, 0, { duration: 0.5 });
  }, [mouseX, mouseY]);

  return (
    <Card
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className='group relative w-full max-w-md rounded-xl border border-white/10 bg-gray-900 px-8 py-16 shadow-2xl shadow-gray-900'
    >
      <motion.div style={{ rotateX, rotateY }}>
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
      </motion.div>
    </Card>
  );
}
