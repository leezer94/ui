import { Form, FormField, FormItem } from 'ui/components/form';

import { Button } from 'ui/components/button';
import { ZodType, z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';

interface FormType {
  email: string;
  password: string;
  confirmPassword: string;
  age: number;
}

export default function FormDemo() {
  const schema: ZodType<FormType> = z
    .object({
      email: z.string().min(2).max(7),
      password: z.string().min(4).max(20),
      confirmPassword: z.string().min(4).max(20),
      age: z.number().min(18).max(30),
    })
    .refine((scheme) => scheme.password == scheme.confirmPassword, {
      message: 'Password does not match',
      path: ['confirmPassword'],
    });

  const { register, handleSubmit } = useForm<FormType>({
    resolver: zodResolver(schema),
  });

  return (
    <Form
      className='border-2'
      onSubmit={(e) => {
        e.preventDefault();
        console.log(e);
      }}
    >
      <FormField className='w-full'>
        <FormItem label='email' />
      </FormField>
      <Button>Submit</Button>
    </Form>
  );
}
