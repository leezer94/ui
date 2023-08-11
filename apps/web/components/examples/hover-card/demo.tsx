import { Avatar, AvatarImage } from 'ui/components/avatar';
import {
  HoverCard,
  HoverCardArrow,
  HoverCardContent,
  HoverCardTrigger,
} from 'ui/components/hover-card';

export default function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <Avatar>
          <AvatarImage src='' />
        </Avatar>
      </HoverCardTrigger>
      <HoverCardContent>
        <HoverCardArrow />
      </HoverCardContent>
    </HoverCard>
  );
}
