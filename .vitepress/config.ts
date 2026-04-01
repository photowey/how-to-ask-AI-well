import { defineConfig } from 'vitepress'

const rootSidebar = [
  {
    text: 'Front Matter',
    items: [
      { text: 'About This Book', link: '/about-this-book' },
      { text: 'Why I Wrote This Book', link: '/why-i-wrote-this-book' },
      { text: 'How to Use This Guide', link: '/how-to-use-this-guide' },
    ],
  },
  {
    text: 'Part I. Why So Many AI Conversations Fail',
    items: [
      { text: '1. Most People Are Not Really Asking', link: '/part-i/01-most-people-are-not-really-asking' },
      { text: '2. Why "Don’t Give Me an MVP" Usually Fails', link: '/part-i/02-why-dont-give-me-an-mvp-fails' },
      { text: '3. The Hidden Cost of Vague Requests', link: '/part-i/03-hidden-cost-of-vague-requests' },
    ],
  },
  {
    text: 'Part II. What Makes a Good AI Question',
    items: [
      { text: '4. Goals, Constraints, and Definitions of Done', link: '/part-ii/04-goals-constraints-and-done' },
      { text: '5. Scope, Boundaries, and Non-Goals', link: '/part-ii/05-scope-boundaries-and-non-goals' },
      { text: '6. Verification, Evidence, and Why Confidence Is Not Enough', link: '/part-ii/06-verification-evidence-and-confidence' },
      { text: '7. Change Axes: How to Ask for Better Design, Not Just More Code', link: '/part-ii/07-change-axes-and-better-design' },
    ],
  },
  {
    text: 'Part III. Building Your Personal Prompting Operating System',
    items: [
      { text: '8. The Eight Modules of a Strong Request', link: '/part-iii/08-eight-modules-of-a-strong-request' },
      { text: '9. Prompt Patterns You Can Reuse', link: '/part-iii/09-prompt-patterns-you-can-reuse' },
      { text: '10. Anti-Patterns That Push AI Back Into Shallow Work', link: '/part-iii/10-anti-patterns-that-create-shallow-work' },
      { text: '11. From Template to Habit: Turning Good Prompting Into Workflow', link: '/part-iii/11-turning-good-prompting-into-workflow' },
    ],
  },
  {
    text: 'Part IV. Applied Playbooks',
    items: [
      { text: '12. Debugging Production Problems', link: '/part-iv/12-debugging-production-problems' },
      { text: '13. Refactoring Legacy Code', link: '/part-iv/13-refactoring-legacy-code' },
      { text: '14. Designing Extensible Systems', link: '/part-iv/14-designing-extensible-systems' },
      { text: '15. Reviewing Code for Real Risk', link: '/part-iv/15-reviewing-code-for-real-risk' },
      { text: '16. Writing, Research, and Knowledge Work Beyond Programming', link: '/part-iv/16-writing-research-and-knowledge-work' },
    ],
  },
  {
    text: 'Part V. Hands-On Labs and Case Studies (Placeholder)',
    items: [
      { text: '17. Placeholder: Hands-On Labs and Case Studies to Come', link: '/part-v/17-why-this-part-is-not-finished-yet' },
      { text: '18. The Experimental Frame', link: '/part-v/18-the-experimental-frame' },
      { text: '19. What Will Be Compared', link: '/part-v/19-what-will-be-compared' },
      { text: '20. How Results Will Be Judged', link: '/part-v/20-how-results-will-be-judged' },
      { text: '21. To Be Continued', link: '/part-v/21-to-be-continued' },
    ],
  },
  {
    text: 'Appendices',
    items: [
      { text: 'Prompt Snippets', link: '/appendices/prompt-snippets' },
      { text: 'Fill-in Forms', link: '/appendices/fill-in-forms' },
      { text: 'Terminology Notes', link: '/appendices/terminology-notes' },
      { text: 'Sources', link: '/appendices/sources' },
      { text: 'Afterword', link: '/afterword' },
      { text: 'Acknowledgments', link: '/acknowledgments' },
    ],
  },
]

const zhSidebar = [
  {
    text: '前言与导读',
    items: [
      { text: '本书简介', link: '/zh/about-this-book' },
      { text: '写书动机', link: '/zh/why-i-wrote-this-book' },
      { text: '如何使用本书', link: '/zh/how-to-use-this-guide' },
    ],
  },
  {
    text: '第一部分：为什么那么多 AI 对话会失败',
    items: [
      { text: '1. 大多数人其实没有真正发问', link: '/zh/part-i/01-most-people-are-not-really-asking' },
      { text: '2. 为什么“不要给我 MVP”通常没有用', link: '/zh/part-i/02-why-dont-give-me-an-mvp-fails' },
      { text: '3. 模糊请求的隐性成本', link: '/zh/part-i/03-hidden-cost-of-vague-requests' },
    ],
  },
  {
    text: '第二部分：什么样的问题才是好问题',
    items: [
      { text: '4. 目标、约束与完成定义', link: '/zh/part-ii/04-goals-constraints-and-done' },
      { text: '5. 范围、边界与非目标', link: '/zh/part-ii/05-scope-boundaries-and-non-goals' },
      { text: '6. 验证、证据，以及为什么信心不等于答案', link: '/zh/part-ii/06-verification-evidence-and-confidence' },
      { text: '7. 变化轴：如何要求更好的设计，而不只是更多代码', link: '/zh/part-ii/07-change-axes-and-better-design' },
    ],
  },
  {
    text: '第三部分：构建你的个人提问操作系统',
    items: [
      { text: '8. 一个强请求的八个模块', link: '/zh/part-iii/08-eight-modules-of-a-strong-request' },
      { text: '9. 可复用的提问模式', link: '/zh/part-iii/09-prompt-patterns-you-can-reuse' },
      { text: '10. 会把 AI 拉回浅层工作的反模式', link: '/zh/part-iii/10-anti-patterns-that-create-shallow-work' },
      { text: '11. 从模板到习惯：把好提问变成工作流', link: '/zh/part-iii/11-turning-good-prompting-into-workflow' },
    ],
  },
  {
    text: '第四部分：真实任务中的作战手册',
    items: [
      { text: '12. 生产问题排查', link: '/zh/part-iv/12-debugging-production-problems' },
      { text: '13. 遗留代码重构', link: '/zh/part-iv/13-refactoring-legacy-code' },
      { text: '14. 可扩展系统设计', link: '/zh/part-iv/14-designing-extensible-systems' },
      { text: '15. 面向真实风险的代码审查', link: '/zh/part-iv/15-reviewing-code-for-real-risk' },
      { text: '16. 编程之外的写作、研究与知识工作', link: '/zh/part-iv/16-writing-research-and-knowledge-work' },
    ],
  },
  {
    text: '第五部分：实操演练与案例分析（预占位）',
    items: [
      { text: '17. 预占位：后续的实操演练与案例分析', link: '/zh/part-v/17-why-this-part-is-not-finished-yet' },
      { text: '18. 实验框架', link: '/zh/part-v/18-the-experimental-frame' },
      { text: '19. 将比较什么', link: '/zh/part-v/19-what-will-be-compared' },
      { text: '20. 结果将如何评估', link: '/zh/part-v/20-how-results-will-be-judged' },
      { text: '21. 待续', link: '/zh/part-v/21-to-be-continued' },
    ],
  },
  {
    text: '附录',
    items: [
      { text: '提问模板速查', link: '/zh/appendices/prompt-snippets' },
      { text: '填空表单', link: '/zh/appendices/fill-in-forms' },
      { text: '术语说明', link: '/zh/appendices/terminology-notes' },
      { text: '参考来源', link: '/zh/appendices/sources' },
      { text: '后记', link: '/zh/afterword' },
      { text: '致谢', link: '/zh/acknowledgments' },
    ],
  },
]

export default defineConfig({
  base: '/how-to-ask-AI-well/',
  title: 'How to Ask AI Well',
  titleTemplate: ':title | How to Ask AI Well',
  description: 'A practical, human-centered guide to asking AI better questions and getting deeper results.',
  lang: 'en-US',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
  ],
  lastUpdated: true,
  cleanUrls: true,
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'How to Ask AI Well',
    outline: {
      level: [2, 3],
      label: 'On this page',
    },
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索',
                buttonAriaLabel: '搜索',
              },
              modal: {
                displayDetails: '显示详情',
                resetButtonTitle: '重置搜索',
                backButtonTitle: '关闭搜索',
                noResultsText: '没有结果',
                footer: {
                  selectText: '选择',
                  selectKeyAriaLabel: '回车键',
                  navigateText: '切换',
                  navigateUpKeyAriaLabel: '上箭头',
                  navigateDownKeyAriaLabel: '下箭头',
                  closeText: '关闭',
                  closeKeyAriaLabel: 'esc 键',
                },
              },
            },
          },
        },
      },
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/wuji-labs/nopua' },
    ],
    footer: {
      message: 'Written as a practical book, not a prompt cheat sheet.',
      copyright: 'Built with VitePress for the first edition manuscript',
    },
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      themeConfig: {
        nav: [
          { text: 'Start Here', link: '/about-this-book', activeMatch: '^/(about-this-book|why-i-wrote-this-book|how-to-use-this-guide)' },
          { text: 'Book', link: '/part-i/01-most-people-are-not-really-asking', activeMatch: '^/part-' },
          { text: 'Playbooks', link: '/part-iv/12-debugging-production-problems', activeMatch: '^/part-iv/' },
          { text: 'Labs', link: '/part-v/17-why-this-part-is-not-finished-yet', activeMatch: '^/part-v/' },
          { text: 'Appendices', link: '/appendices/prompt-snippets', activeMatch: '^/(appendices|afterword|acknowledgments)' },
        ],
        sidebar: rootSidebar,
      },
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/',
      title: '如何有效向 AI 提问',
      description: '一本兼顾原理与实战、以技术人为主但面向更广读者的 AI 提问指南。',
      themeConfig: {
        nav: [
          { text: '开始阅读', link: '/zh/about-this-book', activeMatch: '^/zh/(about-this-book|why-i-wrote-this-book|how-to-use-this-guide)' },
          { text: '正文', link: '/zh/part-i/01-most-people-are-not-really-asking', activeMatch: '^/zh/part-' },
          { text: '场景手册', link: '/zh/part-iv/12-debugging-production-problems', activeMatch: '^/zh/part-iv/' },
          { text: '实验卷', link: '/zh/part-v/17-why-this-part-is-not-finished-yet', activeMatch: '^/zh/part-v/' },
          { text: '附录', link: '/zh/appendices/prompt-snippets', activeMatch: '^/zh/(appendices|afterword|acknowledgments)' },
        ],
        sidebar: zhSidebar,
        outline: {
          level: [2, 3],
          label: '本页目录',
        },
        footer: {
          message: '这是一部可阅读的指南，而不是模板堆砌。',
          copyright: '使用 VitePress 编写的首版书稿',
        },
      },
    },
  },
})
