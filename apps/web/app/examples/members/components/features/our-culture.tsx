import {
  Accordion,
  AccordionContent,
  AccordionDescription,
  AccordionItem,
  AccordionTrigger,
} from 'ui/src/components/accordion';

import { Card } from 'ui/src/components/card';

export default function OurCulture() {
  return (
    <Card className='flex h-full items-center justify-center p-2'>
      <Accordion
        className='mb-2 min-h-[250px] w-full'
        type='single'
        collapsible
        defaultValue='item-2'
      >
        <AccordionItem value='item-1'>
          <AccordionTrigger>
            어떤 개발 방식을 지향하나요 ?
            <AccordionDescription>
              우리의 개발 문화에 대해 이야기 합니다.
            </AccordionDescription>
          </AccordionTrigger>
          <AccordionContent>
            나도, 나의 조직도 애자일하게 일해보고 싶을 때 무엇부터 시작을 해볼
            수 있을지, 어떤 변화를 지향해야 할지를 실제 사례에 기반한 지식과
            방법을 공유합니다.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-2'>
          <AccordionTrigger>
            기술 스택 선정은 어떻게 이루어지나요 ?
          </AccordionTrigger>
          <AccordionContent>
            팀원들과의 소통을 통해 가장 자신있는 스택으로 선정하고 새로운 기술은
            같이 배워나가요.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-3'>
          <AccordionTrigger>복지는 어떻나요 ?</AccordionTrigger>
          <AccordionContent>
            최신 사양 노트북을 제공하고, 점심 식대 제공합니다.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-4'>
          <AccordionTrigger>
            업무는 어떻게 진행되나요 ?
            <AccordionDescription>
              직무에 따른 업무에 대해 이야기 합니다.
            </AccordionDescription>
          </AccordionTrigger>
          <AccordionContent>
            다양한 팀과 협업하여 제품 개발과정에서 의사소통을 원활하게 합니다.
            엔지니어, SW개발자, 제품 디자이너 등과 함께 일하며 목표를
            달성합니다.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
}
