'use client';

import { useState } from 'react';
import type { RssFeedType, FEED_TITLE } from '@/types/rss-feed';
import { ArticleSelection, FeedCard } from '@/app/examples/feed/components';

interface Props {
  articles: RssFeedType[];
}

export default function UserFeed({ articles }: Props) {
  const [currentArticle, setCurrentArticle] =
    useState<FEED_TITLE>('Korean FE article');

  const handleCurrentArticle = (article: FEED_TITLE) =>
    setCurrentArticle(article);

  return (
    <div className='flex flex-col items-center justify-center gap-10 md:flex-row'>
      {articles.map(
        (article, idx) =>
          currentArticle === article.title && (
            <FeedCard
              key={`${article.title}/${idx}`}
              className='mt-5'
              articles={article}
              selection={
                <ArticleSelection
                  articles={articles}
                  currentArticle={currentArticle}
                  handleCurrentArticle={handleCurrentArticle}
                />
              }
            />
          )
      )}
    </div>
  );
}
