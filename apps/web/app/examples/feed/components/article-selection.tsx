import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { RssFeedType, FEED_TITLE } from '@/types/rss-feed';

interface Props {
  articles: RssFeedType[];
  currentArticle: FEED_TITLE;
  handleCurrentArticle: (article: FEED_TITLE) => void;
}
export default function ArticleSelection({
  articles,
  handleCurrentArticle,
  currentArticle,
}: Props) {
  return (
    <Select onValueChange={handleCurrentArticle}>
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder={currentArticle} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {articles.map(({ title }, idx) => (
            <SelectItem key={`${title}/${idx}`} value={title}>
              {title}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
