import { defineConfig, type DefaultTheme } from 'vitepress'

export const en = defineConfig({
  lang: 'en-US',
  description: 'A personal AI learning journal',

  themeConfig: {
    nav: nav(),
    sidebar: sidebar(),

    editLink: {
      pattern: 'https://github.com/zhangpaopao/ai-study-record/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026-present',
    },

    docFooter: {
      prev: 'Previous',
      next: 'Next',
    },

    outline: {
      label: 'On this page',
    },

    lastUpdated: {
      text: 'Last updated',
    },

    returnToTopLabel: 'Back to top',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Appearance',
  },
})

function nav(): DefaultTheme.NavItem[] {
  return [
    { text: 'Guide', link: '/guide/', activeMatch: '/guide/' },
    {
      text: 'Notes',
      items: [
        { text: 'By Topic', link: '/topics/', activeMatch: '/topics/' },
        { text: 'By Stage', link: '/stages/', activeMatch: '/stages/' },
        { text: 'Courses', link: '/courses/', activeMatch: '/courses/' },
      ],
    },
  ]
}

function sidebar(): DefaultTheme.Sidebar {
  return {
    '/guide/': [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/guide/' },
        ],
      },
    ],
    '/topics/': [
      {
        text: 'By Topic',
        items: [
          { text: 'Overview', link: '/topics/' },
        ],
      },
    ],
    '/stages/': [
      {
        text: 'By Stage',
        items: [
          { text: 'Overview', link: '/stages/' },
        ],
      },
    ],
    '/courses/': [
      {
        text: 'Courses',
        items: [
          { text: 'Overview', link: '/courses/' },
        ],
      },
    ],
  }
}
