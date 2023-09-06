import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { cn } from '../lib';

export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  asChild?: boolean;
  onSubmit: (...args: any[]) => any;
}

const Form = React.forwardRef<HTMLFormElement, FormProps>(
  ({ className, onSubmit, ...props }, ref) => {
    const methods = useForm();
    return (
      <FormProvider {...methods}>
        <form
          ref={ref}
          onSubmit={onSubmit}
          className={cn(
            'w-full border-2 border-orange-600 min-h-[300px]',
            className
          )}
          {...props}
        ></form>
      </FormProvider>
    );
  }
);

Form.displayName = 'Form';

const FormField = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('w-full flex flex-col', className)} {...props} />
));

FormField.displayName = 'FormField';

interface FormItemProps {
  label?: string;
  name?: string;
}

const FormItem = React.forwardRef<
  HTMLInputElement,
  React.HTMLAttributes<HTMLInputElement> & FormItemProps
>(({ className, label, name, ...props }, ref) => (
  <>
    {label && <label htmlFor={name}>{label}</label>}
    <input ref={ref} className={cn('', className)} name={name} {...props} />
  </>
));

FormItem.displayName = 'FormItem';

export { Form, FormField, FormItem };
