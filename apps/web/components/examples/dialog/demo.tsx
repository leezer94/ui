import Link from 'next/link';

import {
  Dialog,
  DialogTrigger,
  DialogTitle,
  DialogFooter,
  DialogDescription,
  DialogContent,
  DialogHeader,
} from 'ui/components/dialog';
import { Button, buttonVariants } from 'ui/components/button';
import { TypographyP } from 'ui/components/typography';

export default function DialogDemo() {
  return (
    <div className='flex items-center justify-center'>
      <Dialog>
        <DialogTrigger asChild>
          <Button size='md'>새로운 피드 확인</Button>
        </DialogTrigger>
        <DialogContent className='min-w-[800px] p-5'>
          <DialogHeader className='mb-5'>
            <DialogTitle>
              시맨틱과 팝오버 속성: 언제 사용해야 할까요?
            </DialogTitle>
            <DialogDescription>
              시맨틱한 HTML을 구성하는법을 알아보세요!
            </DialogDescription>
          </DialogHeader>
          <TypographyP>
            HTML의 새로운 속성인 popover 속성에 대해 들어보셨나요? 이 속성을
            이용하면 팝오버 동작들을 보다 쉽게 구현할 수 있습니다. 하지만 이
            속성은 단지 동작을 추가해 줄 뿐 동작에 맞는 시맨틱을 추가해 주는
            것은 아닌데요. 접근성을 향상시키기 위해 popover 속성을 사용하는
            요소에 적합한 시맨틱은 어떤 것들이 있는지 이 글을 통해 살펴보세요!
          </TypographyP>
          <DialogFooter className='mt-5 flex'>
            <DialogTrigger asChild>
              <Button variant='destructive' size='sm'>
                나가기
              </Button>
            </DialogTrigger>
            <Link
              className={buttonVariants({ variant: 'outline', size: 'sm' })}
              href='https://kofearticle.substack.com/p/korean-fe-article-1bb'
            >
              피드 보기
            </Link>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
