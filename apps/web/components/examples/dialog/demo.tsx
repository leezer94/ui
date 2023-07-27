import {
  Button,
  Dialog,
  DialogTrigger,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from '@/components/ui';

import { DialogClose, DialogContent } from '@radix-ui/react-dialog';

export default function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Title</DialogTitle>
        <DialogClose>
          <Button variant='destructive'>x</Button>
        </DialogClose>
        <DialogDescription>Description</DialogDescription>
        <DialogFooter>Footer</DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
