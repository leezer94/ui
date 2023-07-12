import { MainNavItem, SideNavItem } from '@/types/navigation';

type DocsConfig = {
  MAIN_NAV: MainNavItem[];
  SIDE_NAV: SideNavItem[];
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
  SIDE_NAV: [
    {
      title: '컴포넌트',
      items: [
        {
          title: '아코디언',
          href: '/docs/components/accordion',
          items: [],
        },
        {
          title: '템플릿',
          href: '/docs/components/templates',
          items: [],
        },

        {
          title: '버튼',
          href: '/docs/components/button',
          items: [],
        },
      ],
    },
    {
      title: '예시',
      items: [
        {
          title: '피드',
          href: 'examples/feed',
          items: [],
        },
      ],
    },
  ],
};
