'use client';

import { Avatar, AvatarImage } from 'ui/components/avatar';
import {
  HoverCard,
  HoverCardArrow,
  HoverCardContent,
  HoverCardTrigger,
  HoverCardHeader,
  HoverCardTitle,
  HoverCardDescription,
  HoverCardFooter,
} from 'ui/components/hover-card';
import { TypographyMuted } from 'ui/components/typography';

export default function HoverCardDemo() {
  return (
    <HoverCard openDelay={300} closeDelay={300}>
      <HoverCardTrigger>
        <Avatar>
          <AvatarImage src='https://images.unsplash.com/photo-1692007295949-527fa2f16b63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1365&q=80' />
        </Avatar>
      </HoverCardTrigger>
      <HoverCardContent className='border-s border-orange-600'>
        <HoverCardHeader>
          <HoverCardTitle>Title</HoverCardTitle>
          <HoverCardDescription>Description</HoverCardDescription>
        </HoverCardHeader>
        Content
        <HoverCardFooter>
          <TypographyMuted>Available</TypographyMuted>
        </HoverCardFooter>
      </HoverCardContent>
    </HoverCard>
  );
}
