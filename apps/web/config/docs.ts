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
      title: '시작하기',
      items: [
        {
          title: '소개',
          href: '/docs',
          items: [],
        },
        // {
        //   title: '라이브러리에 대해',
        //   href: '/docs/about',
        //   items: [],
        // },
      ],
    },
    {
      title: '컴포넌트',
      items: [
        {
          title: '아코디언',
          href: '/docs/components/accordion',
          items: [],
        },
        {
          title: '카드',
          href: '/docs/components/card',
          items: [],
        },
        {
          title: '버튼',
          href: '/docs/components/button',
          items: [],
        },
        {
          title: '캐러셀',
          href: '/docs/components/carousel',
          items: [],
        },
        {
          title: '아바타',
          href: '/docs/components/avatar',
          items: [],
        },
        {
          title: '다이얼로그 모달',
          href: '/docs/components/dialog',
          items: [],
        },
        {
          title: '얼럿 다이얼로그 모달',
          href: '/docs/components/alert-dialog',
          items: [],
        },
        {
          title: '카드 호버',
          href: '/docs/components/hover-card',
          items: [],
        },
        // {
        //   title: '폼',
        //   href: '/docs/components/form',
        //   items: [],
        // },
      ],
    },
    {
      title: '예시',
      items: [
        {
          title: '피드',
          href: '/examples/feed',
          items: [],
        },
        {
          title: '멤버',
          href: '/examples/members',
          items: [],
        },
      ],
    },
    {
      title: '레퍼런스',
      items: [
        {
          title: 'Radix/ui',
          href: 'https://www.radix-ui.com/',
          external: true,
          items: [],
        },
        {
          title: 'TailwindCSS',
          href: 'https://tailwindcss.com/',
          external: true,
          items: [],
        },
      ],
    },
  ],
};
