import { defineConfig, type DefaultTheme } from 'vitepress'

export const zh = defineConfig({
  lang: 'zh-CN',
  description: '个人 AI 学习记录',

  themeConfig: {
    nav: nav(),
    sidebar: sidebar(),

    editLink: {
      pattern: 'https://github.com/zhangpaopao/ai-study-record/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页',
    },

    footer: {
      message: '基于 MIT 许可证发布',
      copyright: '版权所有 © 2026-present',
    },

    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    outline: {
      label: '页面导航',
    },

    lastUpdated: {
      text: '最后更新于',
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
  },
})

function nav(): DefaultTheme.NavItem[] {
  return [
    { text: '指南', link: '/zh/guide/', activeMatch: '/zh/guide/' },
    {
      text: '学习笔记',
      items: [
        { text: '技术分类', link: '/zh/topics/', activeMatch: '/zh/topics/' },
        { text: '学习阶段', link: '/zh/stages/', activeMatch: '/zh/stages/' },
        { text: '课程笔记', link: '/zh/courses/', activeMatch: '/zh/courses/' },
      ],
    },
  ]
}

function sidebar(): DefaultTheme.Sidebar {
  return {
    '/zh/guide/': [
      {
        text: '快速开始',
        items: [
          { text: '简介', link: '/zh/guide/' },
        ],
      },
    ],
    '/zh/topics/': [
      {
        text: '技术分类',
        items: [
          { text: '概览', link: '/zh/topics/' },
        ],
      },
    ],
    '/zh/stages/': [
      {
        text: '学习阶段',
        items: [
          { text: '概览', link: '/zh/stages/' },
        ],
      },
    ],
    '/zh/courses/hung-yi-lee-ml-2020/': [
      {
        text: '李宏毅机器学习 2020',
        items: [
          { text: '课程概览', link: '/zh/courses/hung-yi-lee-ml-2020/' },
          { text: 'Regression', link: '/zh/courses/hung-yi-lee-ml-2020/regression' },
        ],
      },
    ],
    '/zh/courses/': [
      {
        text: '课程笔记',
        items: [
          { text: '概览', link: '/zh/courses/' },
          { text: '李宏毅机器学习 2020', link: '/zh/courses/hung-yi-lee-ml-2020/' },
        ],
      },
    ],
  }
}
