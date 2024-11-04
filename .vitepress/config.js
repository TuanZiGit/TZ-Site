import { defineConfig } from 'vitepress'
import {processData} from "@chunge16/vitepress-blogs-theme/config";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "团子の站",
  description: "团子的个人网站，同时供苦力怕镇服务器作为文档使用",
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      {
        text: '博客',
        activeMatch: '/blog',
        items: [
          {
            text: '主页',
            link: '/blog/',
            activeMatch: '/blog/$'
          },
          {
            text: '标签',
            link: '/blog/tags',
            activeMatch: '/blog/tags$'
          },
          {
            text: '归档',
            link: '/blog/archives',
            activeMatch: '/blog/archives$'
          }
        ]
      },
      { text: '苦力怕镇', link: '/ct', activeMatch: '/ct/' }
    ],

    blog: {
      title: '团子の博客',
      description: '一个平凡的个人博客',
      defaultAuthor: '佚名',
      defaultCategory: '其他',

      categoryIcons: {
        日寄: 'i-[mdi/book-arrow-down-outline]',
        日记: 'i-[mdi/calendar-edit-outline]',
        公告: 'i-[mdi/email-fast-outline]',
        其他: 'i-[mdi/cube-scan]',
      },

      tagIcons: {
        前端: 'i-[mdi/application-edit-outline]',
        后端: 'i-[mdi/access-point-network]',
        安全: 'i-[mdi/security]',
        云服务: 'i-[mdi/cloud-check-variant-outline]',
        计算: 'i-[mdi/computer-classic]',
        魔法上网: 'i-[mdi/airplane-takeoff]',
        其他: 'i-[mdi/cube-scan]',
      },

      giscus: {
        repo: 'TuanZiGit/TZ-Site',
        repoId: 'R_kgDOMpUFhQ',
        category: 'Giscus 评论系统',
        categoryId: 'DIC_kwDOMpUFhc4Ch_yZ',
      }
    },

    sidebar: {
      '/ct/': [{
        text: '苦力怕镇服务器',
        items: [
          { text: '引言', link: '/ct/' },
          { text: '加入服务器', link: '/ct/join' },
          { text: '服规与群规', link: '/ct/rule' },
          { text: '常用指令大全', link: '/ct/commands'},
          { text: '迁移账号', link: '/ct/migrate' }
        ]
      }]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/TuanZiGit/TZ-Site' }
    ],

    notFound: {
      code: "404",
      title: "网页不见啦 Σ(っ °Д °;)っ",
      linkLabel: "返回上一页",
      linkText: "返回上一页",
      quote: "可能是被饥饿的团子吃掉力（悲"
    }
  },
  vite: {
    optimizeDeps: {
      exclude: ['@chunge16/vitepress-blogs-theme'],
    },
    ssr: {
      noExternal: ['@chunge16/vitepress-blogs-theme']
    },
  },
  async transformPageData(pageData, ctx) {
    await processData(pageData, ctx);
  },
})
