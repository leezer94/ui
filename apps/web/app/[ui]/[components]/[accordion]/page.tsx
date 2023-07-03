'use client';

import AccordionDemo from '../../../../components/examples/accordion/demo';

export default function Page() {
  return (
    <div className='fixed w-[50%]'>
      <div className='flex flex-col items-center justify-center border-2'>
        <p>Accordion components</p>
        <div className='h-[50%] w-[50%]'>
          <AccordionDemo />
        </div>
      </div>
    </div>
  );
}
