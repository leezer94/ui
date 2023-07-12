export interface Feed {
  title: string;
  description: string;
  link: string;
  guid?: object;
  pubDate: string;
  enclosure?: object;
  'content:encoded'?: string;
  'dc:creator'?: string;
}

export interface RssFeedType {
  title: string;
  description: string;
  item: Feed[];
}

export type PathType = string;
// | 'Korean FE article'
// | 'korean-fe'
// | 'BBC Sport - Football'
// | 'bbc-football'
// | 'CSS-Tricks'
// | 'css-tricks'
// | 'DEV Community'
// | 'dev-to'
// | "TkDodo's blog"
// | 'tkdodo';
