import '../global.css';
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from 'ui/components/button';
import { Icons } from 'ui/icons';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Leezer-ui/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    size: {
      options: ['default', 'sm', 'md', 'lg'],
      description: 'size of the button',
    },
    children: {
      description: 'Overwritten description',
      options: ['default', 'ghost'],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    variant: 'default',
    size: 'default',
    children: 'default',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    size: 'default',
    children: 'outline',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    size: 'default',
    children: 'ghost',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'disabled',
    size: 'default',
    children: 'disabled',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    size: 'default',
    children: 'destructive',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'default',
    children: 'secondary',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    size: 'default',
    children: 'link',
  },
};

export const WithIcon = () => (
  <Button variant='destructive' size='default'>
    <Icons.alarm className='mr-2 h-6 w-6'></Icons.alarm>
    Ring Ring
  </Button>
);
