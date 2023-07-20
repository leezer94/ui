export const FEEDS = {
  KOREAN_FE: 'https://kofearticle.substack.com/feed',
  BBC_FOOTBALL: 'https://feeds.bbci.co.uk/sport/football/rss.xml',
  CSS_TRICS: 'https://css-tricks.com/feed/',
  DEV_TO: 'https://dev.to/feed',
  // TKDODO: 'https://tkdodo.eu/blog/rss.xml', // error ?
} as const;

export const FEED_URLS = Object.keys(FEEDS).map((key) => FEEDS[key]);

export const TITLE_PREFIX = '[Korean FE Article]';

export const URL_REGEX = /^(https?:\/\/[^\/]+).*$/;
