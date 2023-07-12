import { useEffect, useState } from 'react';

export function useParsedFeed(feed: string) {
  const [parsedFeed, setParsed] = useState<string>('');

  useEffect(() => {
    const decodedFeed = new DOMParser().parseFromString(feed, 'text/html').body
      .textContent as string;

    setParsed(decodedFeed);
  }, [feed, parsedFeed]);

  return {
    parsedFeed,
  };
}
