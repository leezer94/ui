'use client';

import {
  Accordion,
  AccordionContent,
  AccordionDescription,
  AccordionItem,
  AccordionTrigger,
} from 'ui/components/accordion';

export default function AccordionDemo() {
  return (
    <Accordion type='single' collapsible className='w-full'>
      <AccordionItem value='item-1'>
        <AccordionTrigger>
          접근 가능성은 어떤가요 ?
          <AccordionDescription>
            접근 가능성에 대해 이야기 합니다.
          </AccordionDescription>
        </AccordionTrigger>
        <AccordionContent>
          WAI-ARIA 의 디자인 패턴을 차용 했습니다.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-2'>
        <AccordionTrigger>스타일링이 되어 있나요?</AccordionTrigger>
        <AccordionContent>
          네. 다른 컴포넌트들과 미학적으로 일치하는 기본형 스타일이 적용되어
          있습니다.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-3'>
        <AccordionTrigger>애니메이션이 적용되어 있나요?</AccordionTrigger>
        <AccordionContent>
          네. 기본적으로 애니메이션이 적용되어 있지만, 개인적인 선호도에따라
          비활성화 할 수 있습니다.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
