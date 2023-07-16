import { useState } from 'react';

interface Button {
  variant:
    | 'default'
    | 'secondary'
    | 'destructive'
    | 'ghost'
    | 'link'
    | 'disabled';
  size: ButtonSize;
}

type ButtonSize = 'default' | 'sm' | 'lg';

export default function useHandleButtonVariant() {
  const [buttonVariant, setButtonVariant] =
    useState<Button['variant']>('default');
  const [buttonSize, setButtonSize] = useState<Button['size']>('lg');

  return {
    handleSetButtonVariant: (variant: Button['variant']) =>
      setButtonVariant(variant),
    handleSetButtonSize: (size: Button['size']) => setButtonSize(size),
    buttonVariant,
    buttonSize,
  };
}
