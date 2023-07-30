import {
  Button,
  Dialog,
  DialogTrigger,
  DialogTitle,
  DialogFooter,
  DialogDescription,
  DialogContent,
  DialogHeader,
} from '@/components/ui';

export default function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Title</DialogTitle>
          <DialogDescription>Description</DialogDescription>
        </DialogHeader>
        <DialogFooter>Footer</DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
