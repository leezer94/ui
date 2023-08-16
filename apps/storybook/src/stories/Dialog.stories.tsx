import '../global.css';
import type { Meta } from '@storybook/react';

import { Button } from 'ui/components/button';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogDescription,
  DialogTitle,
  DialogFooter,
} from 'ui/components/dialog';
import { TypographyMuted } from 'ui/components/typography';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Leezer-ui/Dialog',
  component: Dialog,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    children: {
      description: 'Overwritten description',
    },
  },
} satisfies Meta<typeof Dialog>;

export default meta;

// type Story = StoryObj<typeof meta>;

export const Default = () => (
  <div className='w-full h-full flex justify-center items-center bg-black'>
    <Dialog>
      <DialogTrigger asChild>
        <Button size='lg' variant='default'>
          Dialog
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className='text-2xl'>Heading</DialogTitle>
          <DialogDescription>
            <TypographyMuted className='text-md'>Description</TypographyMuted>
          </DialogDescription>
        </DialogHeader>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        neque deserunt nam rem, quo accusamus rerum corrupti, nostrum velit qui
        sunt aperiam quis at iure sapiente eos consequatur deleniti nemo!
        <DialogFooter>
          <DialogTrigger asChild>
            <Button variant='destructive' size='md'>
              Cancel
            </Button>
          </DialogTrigger>
          <DialogTrigger asChild>
            <Button variant='outline' size='md'>
              Confirm
            </Button>
          </DialogTrigger>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  </div>
);
