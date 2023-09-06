'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { Link as LinkIcon } from 'lucide-react';
import { sanitizeDescription } from '@/lib';
import { useParsedFeed } from '@/hooks';
import { TITLE_PREFIX } from '@/config/rss-feed';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogHeader,
  DialogFooter,
} from 'ui/src/components/dialog';
import { Feed, PathType } from '@/types/rss-feed';
import { buttonVariants } from 'ui/src/components/button';
import { TypographyMuted, TypographyP } from 'ui/src/components/typography';

type ModalProps = {
  type: PathType;
  trigger: ReactNode;
  feed: Feed;
};

export default function FeedDialog({
  type,
  trigger,
  feed: { title, description, link, pubDate },
}: ModalProps) {
  const { parsedFeed } = useParsedFeed(description);

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className='min-w-[800px] p-10'>
        <DialogHeader className='mb-10'>
          <DialogTitle>{title.replace(TITLE_PREFIX, '')}</DialogTitle>
        </DialogHeader>
        <div className='overflow-hidden'>
          <TypographyP className='max-h-[300px] overflow-auto'>
            {type === 'BBC Sport - Football'
              ? description
              : type === 'Korean FE article'
              ? sanitizeDescription(parsedFeed)
              : parsedFeed}
          </TypographyP>
        </div>
        <DialogFooter className='mt-10'>
          <div className='flex w-full flex-row items-center justify-between'>
            <TypographyMuted>{pubDate}</TypographyMuted>
            <Link
              target='_blank'
              href={link}
              className={buttonVariants({ size: 'sm' })}
            >
              <LinkIcon className='mr-2 h-4 w-4' />
              Link to Feed
            </Link>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
