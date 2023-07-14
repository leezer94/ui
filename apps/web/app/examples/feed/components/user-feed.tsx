'use client';

import { useState } from 'react';
import FeedCard from '@/app/examples/feed/components/feed-card';
import type { RssFeedType, FEED_TITLE } from '@/types/rss-feed';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface Props {
  articles: RssFeedType[];
}

export default function UserFeed({ articles }: Props) {
  const [currentArticle, setCurrentArticle] =
    useState<FEED_TITLE>('Korean FE article');

  const handleCurrentArticle = (article: FEED_TITLE) =>
    setCurrentArticle(article);

  return (
    <div className='flex items-center justify-center gap-10'>
      {articles.map(
        (article, idx) =>
          currentArticle === article.title && (
            <FeedCard
              key={`${article.title}/${idx}`}
              className='mt-5'
              articles={article}
              selection={
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
              }
            />
          )
      )}
      <Card className='w-6/12'>
        <CardHeader>
          <CardTitle>Choose your feed</CardTitle>
          <CardDescription>재미있는 피드를 추가해 보세요.</CardDescription>
        </CardHeader>
        <CardContent>Content</CardContent>
      </Card>
    </div>
  );
}
