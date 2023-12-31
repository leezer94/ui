import { ReactNode } from 'react';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from 'ui/components/dialog';

interface Props {
  trigger: ReactNode;
}

export default function TodoDialog({ trigger }: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className='min-w-[800px] p-10'>
        <DialogHeader className='mb-10'>
          {/* <DialogTitle>{title}</DialogTitle> */}
        </DialogHeader>

        <DialogFooter className='mt-10'>
          {/* <div className='flex w-full flex-row items-center justify-between'>
            <TypographyMuted>{pubDate}</TypographyMuted>
            <Link
              target='_blank'
              href={link}
              className={buttonVariants({ size: 'sm' })}
            >
              <LinkIcon className='mr-2 h-4 w-4' />
              Link to Feed
            </Link>
          </div> */}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
