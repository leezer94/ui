'use client';

import { CheckIcon } from 'lucide-react';
import { Checkbox, CheckboxIndicator } from 'ui/src/components/checkbox';
import { Button } from 'ui/src/components/button';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { ZodType } from 'zod';
import { useForm } from 'react-hook-form';

interface FormType {
  'terms-and-conditions': boolean;
  'additional-services': boolean;
}

export default function CheckboxDemo() {
  const schema: ZodType<FormType> = z.object({
    'terms-and-conditions': z.boolean(),
    'additional-services': z.boolean(),
  });

  const { register, handleSubmit } = useForm<FormType>({
    resolver: zodResolver(schema),
  });

  const submitForm = (data: FormType) => {};

  return (
    <form
      className='flex flex-col items-center justify-center'
      onSubmit={handleSubmit(submitForm)}
    >
      <div className='mb-10 flex flex-col gap-y-2'>
        <div className='flex flex-col'>
          <div className='flex items-center'>
            <Checkbox
              id='terms-and-conditions'
              {...register('terms-and-conditions')}
            >
              <CheckboxIndicator icon={<CheckIcon className='p-1' />} />
            </Checkbox>
            <label
              className='select-none pl-[15px] text-[15px] leading-none text-black'
              htmlFor='terms-and-conditions'
            >
              회원가입 개인정보 수집 및 이용 동의
            </label>
          </div>
        </div>
        <div className='flex items-center'>
          <Checkbox
            id='additional-services'
            {...register('additional-services')}
          >
            <CheckboxIndicator icon={<CheckIcon className='p-1' />} />
          </Checkbox>
          <label
            className='select-none pl-[15px] text-[15px] leading-none text-black'
            htmlFor='additional-services'
          >
            부가서비스 이용 동의
          </label>
        </div>
      </div>
      <div>
        <Button type='submit' variant='outline' size='sm'>
          제출하기
        </Button>
      </div>
    </form>
  );
}
