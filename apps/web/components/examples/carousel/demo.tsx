import { Icons } from '@/components/icons';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Separator,
} from '@/components/ui';
import { Carousel } from '@/components/ui/carousel';
import { TypographyH4, TypographyMuted } from '@/components/ui/typography';

const CAROUSEL_IMAGES = [
  'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
  'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
];

export default function CarouselDemo() {
  return (
    <Carousel buttonColor='black' orientation='horizontal'>
      <IssueTemplateCard />
      <Card2 />
      {CAROUSEL_IMAGES.map((url, idx) => (
        <div
          className='h-full w-full rounded-lg bg-cover bg-center duration-500'
          style={{ backgroundImage: `url(${url})` }}
          key={`${url}/${idx}`}
        />
      ))}
    </Carousel>
  );
}

function IssueTemplateCard() {
  return (
    <Card className='h-full overflow-scroll '>
      <CardHeader>
        <div className='flex items-baseline justify-between'>
          <CardTitle className='text-xl'>Issue Template</CardTitle>
          <div className='flex gap-x-2'>
            <Button variant='outline' size='sm'>
              Edit
            </Button>
            <Button variant='disabled' size='sm'>
              New issue
            </Button>
          </div>
        </div>
        <CardDescription className='flex items-baseline gap-4'>
          <Button
            className='cursor-auto select-none rounded-3xl'
            variant='destructive'
            size='sm'
          >
            Closed
          </Button>
          leezer94 opened this issue 4 hours ago.
        </CardDescription>
      </CardHeader>
      <CardContent className='flex flex-col'>
        <div className='flex flex-col'>
          <TypographyH4>Branch</TypographyH4>
        </div>
        <Separator />
        <div className='flex items-center py-4'>
          <Icons.dot />
          <div className='flex items-center gap-2'>
            <span className='text-sm'>feat/carousel</span>
          </div>
        </div>
        <Separator />
        <div className='ml-2 py-4'>
          <div className='flex items-center gap-2'>
            <Icons.checkSquare size={15} />
            <TypographyMuted>
              add features to accordion component
            </TypographyMuted>
          </div>
          <div className='flex items-center gap-2'>
            <Icons.square size={15} />
            <TypographyMuted>check code quality</TypographyMuted>
          </div>
          <div className='flex items-center gap-2'>
            <Icons.checkSquare size={15} />
            <TypographyMuted>remove unnecessary comments</TypographyMuted>
          </div>
          <div className='flex items-center gap-2'>
            <Icons.checkSquare size={15} />
            <TypographyMuted>fix too many re-render issue</TypographyMuted>
          </div>
        </div>
        <Separator className='my-4' />
        <div className='flex items-center gap-1'>
          <Icons.dot />
          <Icons.circleDot size={15} className='text-green-600' />
          <div className='flex items-center gap-2'>
            <TypographyMuted className='cursor-pointer font-bold text-blue-600'>
              [Component] Carousel Component
            </TypographyMuted>
            <span className='text-sm font-bold text-foreground/40'>#20</span>
          </div>
        </div>
        <div className='flex items-center gap-1'>
          <Icons.dot />
          <Icons.circleDot size={15} className='text-green-600' />
          <div className='flex items-center gap-2'>
            <TypographyMuted className='cursor-pointer font-bold text-blue-600'>
              [Landing / Index ] Index / Landing Page
            </TypographyMuted>
            <span className='text-sm font-bold text-foreground/40'>#16</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
function Card2() {
  return (
    <Card className='h-full'>
      <CardHeader>
        <CardTitle>Title1</CardTitle>
        <CardDescription>Description</CardDescription>
      </CardHeader>
      <CardContent>Content</CardContent>
      <CardFooter>Footer</CardFooter>
    </Card>
  );
}
