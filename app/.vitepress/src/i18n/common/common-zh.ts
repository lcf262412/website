export default {
  REQUIRE_FIELD: '必填',
  COMMON_CONFIG: {
    DOWNLOAD: '下载',
    ISO: '软件包',
    SUPPORTTOOLS: '支持工具',
    DOCS: '文档',
    MOOC: '慕课',
    KNOWLEDGE: '知识图谱',
    ADVANCED: '学习进阶',
    COMMUNITY: '社区',
    CONTRIBUTION: '社区贡献',
    ONLINECOMMUNICATION: '线上交流',
    MEMBER: '社区组织',
    USERPRACTICE: '用户实践',
    STATISTICS: '贡献看板',
    NEWS: '新闻',
    BLOG: '博客',
    VIDEO: '视频',
    EVENTS: '活动',
    SUMMIT: '峰会',
    CERTIFICATION: '发行版认证',
    TRAINING: '培训认证',
    SECURITY: '漏洞管理',
    ADVISORIES: '安全公告',
    CVE: 'CVE',
    TAG: 'Tag筛选',
    BROWSE: '浏览',
    TIMES: '次',
    TIME: '时间',
    AUTHOR: '作者',
    TAGS: '标签',
    ALL: '全部',
    PREV: '上一篇：',
    NEXT: '下一篇：',
    STRATEGY: '欢迎投稿',
  },
  NAV_ROUTER_CONFIG: [
    {
      NAME: '下载',
      ID: 'download',
      CHILDREN: [
        {
          NAME: '软件包',
          ID: 'iso',
          PATH: '/download/',
        },
        {
          NAME: '支持工具',
          ID: 'supporttools',
          PATH: '/supporttools/',
        },
      ],
      CLASS: ['download', 'supporttools'],
    },
    {
      NAME: '学习',
      ID: 'learning',
      CHILDREN: [
        {
          NAME: '文档',
          PATH: '',
          ID: 'docs',
          IS_OPEN_WINDOW: 1,
        },
        {
          NAME: '慕课',
          ID: 'mooc',
          PATH: 'https://moocstudio.opengauss.org',
          IS_OPEN_MINISITE_WINDOW: 1,
        },
        {
          NAME: '知识图谱',
          ID: 'knowledge',
          PATH: '/knowledge/',
        },
        {
          NAME: '学习进阶',
          ID: 'advanced',
          PATH: '/advanced/',
        },
      ],
      CLASS: ['learning', 'knowledge', 'advanced'],
    },
    {
      NAME: '社区',
      ID: 'community',
      CHILDREN: [
        {
          NAME: '社区贡献',
          ID: 'contribution',
          PATH: '/contribution/',
        },
        {
          NAME: '线上交流',
          ID: 'onlineCommunication',
          PATH: '/community/onlineCommunication/',
        },
        {
          NAME: '社区组织',
          ID: 'member',
          PATH: '/member/',
        },
        {
          NAME: '用户实践',
          ID: 'userPractice',
          PATH: '/userPractice/',
        },
        {
          NAME: '贡献看板',
          ID: 'statistics',
          PATH: 'https://datastat.opengauss.org/zh/overview',
          IS_OPEN_MINISITE_WINDOW: 1,
        },
      ],
      CLASS: [
        'contribution',
        'member',
        'userPractice',
        'community',
        'onlineCommunication',
      ],
    },
    {
      NAME: '互动',
      ID: 'connect',
      CHILDREN: [
        {
          NAME: '新闻',
          ID: 'news',
          PATH: '/news/',
        },
        {
          NAME: '博客',
          ID: 'blog',
          PATH: '/blogs/',
        },
        {
          NAME: '活动',
          ID: 'events',
          PATH: '/events/',
        },
        {
          NAME: '视频',
          ID: 'video',
          PATH: '/video/',
        },
        {
          NAME: '峰会',
          ID: 'summit',
          PATH: '/summit/summit2022/',
          // IS_OPEN_MINISITE_WINDOW: 1,
        },
      ],
      CLASS: ['news', 'blog', 'video', 'events', 'summit'],
    },
    {
      NAME: '认证',
      ID: 'Certification',
      CHILDREN: [
        {
          NAME: '发行版认证',
          ID: 'certification',
          PATH: '/certification/',
        },
        {
          NAME: '培训认证',
          ID: 'training',
          PATH: '/training/',
        },
      ],
      CLASS: ['certification', 'training'],
    },
    {
      NAME: '安全',
      ID: 'discovery',
      CHILDREN: [
        {
          NAME: '漏洞管理',
          ID: 'security',
          PATH: '/security/',
        },
        {
          NAME: '安全公告',
          ID: 'advisories',
          PATH: '/security-advisories/',
        },
        {
          NAME: 'CVE',
          ID: 'cve',
          PATH: '/cve/',
        },
      ],
      CLASS: ['security', 'advisories', 'cve'],
    },
    {
      NAME: '代码',
      ID: 'code',
      CHILDREN: [
        {
          NAME: 'Gitee',
          PATH: 'https://gitee.com/opengauss',
          IS_OPEN_MINISITE_WINDOW: 1,
        },
        {
          NAME: 'Github',
          PATH: 'https://github.com/opengauss-mirror',
          IS_OPEN_MINISITE_WINDOW: 1,
        },
      ],
      CLASS: ['code'],
    },
  ],
  LANG: '中文',
  LANG_LIST: ['中文', 'English'],
  GITTE: '源码',
  CODE: '代码',
  FOOTER: {
    MAIL: 'contact@opengauss.org',
    COPY_RIGHT: '版权所有 ©  openGauss 2022 保留一切权利',
    RIGHT_LIST: [
      {
        NAME: '品牌',
        URL: '/brand/',
      },
      {
        NAME: '隐私政策',
        URL: '/privacyPolicy/',
      },
      {
        NAME: '法律声明',
        URL: '/legal/',
      },
      {
        NAME: '关于我们',
        URL: '/aboutUs/',
      },
      {
        NAME: '服务状态',
        URL: 'https://status.opengauss.org/',
      },
    ],
    QR_CODE: '扫码关注公众号',
  },
  BUILDING: {
    BUILDING: '建设中',
    BUILDINGMES: '敬请期待...',
  },
  SEARCH: {
    BROWSEHISTORY: '历史记录',
    CLEAN: '清除',
    TOPSEARCH: '热门搜索',
    CHANGE: '换一批',
    PLEACHOLDER: '请输入内容',
  },
  PREV: '上一页',
  NEXT: '下一页',
  ALL: '全部',
  TYPE: '类型',
  VIEW_MORE: '查看更多',
  COOKIE: {
    TEXT: [
      '本站点使用Cookies，继续浏览表示您同意我们使用Cookies。',
      'Cookies和隐私政策>',
    ],
    PATH: '/zh/privacyPolicy/',
  },
};