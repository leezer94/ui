import { MainNavItem } from '@/types/navigation';

type DocsConfig = {
  MAIN_NAV: MainNavItem[];
};

export const DOCS_CONFIG: DocsConfig = {
  MAIN_NAV: [
    {
      title: 'Documentation',
      href: '/docs',
    },
    {
      title: 'Component',
      href: '/docs/component/accordion',
    },
    {
      title: 'Examples',
      href: '/examples',
    },
    {
      title: 'Github',
      href: 'https://github.com/leezer94/ui',
      external: true,
    },
  ],
};
