'use client';

import { useHandleButtonVariant } from '@/components/examples/hooks';
import { Button } from 'ui/components/button';
import { TypographyH4 } from 'ui/components/typography';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from 'ui/components/select';

const BUTTON = {
  variant: ['default', 'secondary', 'destructive', 'ghost', 'link', 'disabled'],
  size: ['default', 'sm', 'lg'],
};

// TODO: 버튼 사이즈 조절이 가능한 컴포넌트 혹은 공통으로 사용 가능한 컴포넌트가 데모 페이지에 공통으로 필요

export default function ButtonDemo() {
  const {
    buttonVariant,
    buttonSize,
    handleSetButtonVariant,
    handleSetButtonSize,
  } = useHandleButtonVariant();

  return (
    <div>
      <div className='flex justify-between'>
        <div>
          <TypographyH4>Variants</TypographyH4>
          <Select onValueChange={handleSetButtonVariant}>
            <SelectTrigger className='w-[180px]'>
              <SelectValue placeholder={buttonVariant} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {BUTTON.variant.map((button, idx) => (
                  <SelectItem key={`${button}/${idx}`} value={button}>
                    {button}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div>
          <TypographyH4>Size</TypographyH4>
          <Select onValueChange={handleSetButtonSize}>
            <SelectTrigger className='w-[180px]'>
              <SelectValue placeholder={buttonSize} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {BUTTON.size.map((size, idx) => (
                  <SelectItem key={`${size}/${idx}`} value={size}>
                    {size}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className='flex justify-center'>
        <Button variant={buttonVariant} size={buttonSize}>
          {buttonVariant}
        </Button>
      </div>
    </div>
  );
}
