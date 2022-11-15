export default {
  require_field: '必填',
  COMMON_CONFIG: {
    DOWNLOAD: 'Download',
    ISO: 'Software Packages',
    SUPPORTTOOLS: 'Support Tools',
    DOCS: 'Documentation',
    MOOC: 'Mooc',
    KNOWLEDGE: 'Knowledge',
    ADVANCED: 'Advanced',
    COMMUNITY: 'Community',
    CONTRIBUTION: 'Contribution',
    ONLINECOMMUNICATION: 'Communication',
    MEMBER: 'Organization',
    USERPRACTICE: 'User Practice',
    STATISTICS: 'Statistics',
    NEWS: 'News',
    BLOG: 'Blog',
    VIDEO: 'Videos',
    EVENTS: 'Events',
    CERTIFICATION: 'Certification',
    SECURITY: 'Vulnerability Report',
    ADVISORIES: 'Security Advisories',
    CVE: 'CVE',
    TAG: 'Tag filter',
    BROWSE: 'Browse',
    TIMES: 'times',
    TIME: 'Time',
    AUTHOR: 'Author',
    TAGS: 'Tags',
    ALL: 'All',
    PREV: 'Previous:',
    NEXT: 'Next:',
    STRATEGY: 'Post Your Blog',
  },
  NAV_ROUTER_CONFIG: [
    {
      NAME: 'Download',
      ID: 'download',
      CHILDREN: [
        {
          NAME: 'Software Packages',
          ID: 'iso',
          PATH: '/download/',
        },
        {
          NAME: 'Support Tools',
          ID: 'supporttools',
          PATH: '/supporttools/',
        },
      ],
      CLASS: ['download', 'supporttools'],
    },
    {
      NAME: 'Learning',
      ID: 'learning',
      CHILDREN: [
        {
          NAME: 'Documentation',
          PATH: '',
          ID: 'docs',
          IS_OPEN_WINDOW: 1,
        },
      ],
      CLASS: ['learning'],
    },
    {
      NAME: 'Community',
      ID: 'community',
      CHILDREN: [
        {
          NAME: 'Contribution',
          ID: 'contribution',
          PATH: '/contribution/',
        },
        {
          NAME: 'Communication',
          ID: 'onlineCommunication',
          PATH: '/community/onlineCommunication/',
        },
        {
          NAME: 'Organization',
          ID: 'member',
          PATH: '/member/',
        },
        {
          NAME: 'User Practice',
          ID: 'userPractice',
          PATH: '/userPractice/',
        },
        {
          NAME: 'Statistics',
          ID: 'statistics',
          PATH: 'https://datastat.opengauss.org/zh/overview',
          IS_OPEN_MINISITE_WINDOW: 1,
        },
      ],
      CLASS: ['contribution', 'member', 'community', 'onlineCommunication'],
    },
    {
      NAME: 'Connect',
      ID: 'connect',
      CHILDREN: [
        {
          NAME: 'News',
          ID: 'News',
          PATH: '/news/',
        },
        {
          NAME: 'Blog',
          ID: 'blog',
          PATH: '/blogs/',
        },
        {
          NAME: 'Events',
          ID: 'events',
          PATH: '/events/',
        },
        {
          NAME: 'Videos',
          ID: 'video',
          PATH: '/video/',
        },
      ],
      CLASS: ['news', 'blog', 'video', 'events'],
    },
    {
      NAME: 'Certification',
      ID: 'Certification',
      CHILDREN: [
        {
          NAME: 'Distribution Certification',
          ID: 'certification',
          PATH: '/certification/',
        },
      ],
      CLASS: ['certification'],
    },
    {
      NAME: 'Security',
      ID: 'discovery',
      CHILDREN: [
        {
          NAME: 'Vulnerability Report',
          ID: 'security',
          PATH: '/security/',
        },
        {
          NAME: 'Security Advisories',
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
      NAME: 'Code',
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
  LANG: 'English',
  LANG_LIST: ['中文', 'English'],
  GITTE: 'Source code',
  CODE: 'CODE',
  FOOTER: {
    MAIL: 'contact@opengauss.org',
    COPY_RIGHT: 'Copyright © openGauss 2022. All rights reserved.',
    RIGHT_LIST: [
      {
        NAME: 'Trademark',
        URL: '/brand/',
      },
      {
        NAME: 'Privacy Policy',
        URL: '/privacyPolicy/',
      },
      {
        NAME: 'Legal Notice',
        URL: '/legal/',
      },
      {
        NAME: 'About Us',
        URL: '/aboutUs/',
      },
      {
        NAME: 'Service Status',
        URL: 'https://status.opengauss.org/',
      },
    ],
    QR_CODE: 'WeChat Subscription',
  },
  BUILDING: {
    BUILDING: 'Building',
    BUILDINGMES: 'Coming soon…',
  },
  SEARCH: {
    BROWSEHISTORY: 'History',
    CLEAN: 'Clean up',
    TOPSEARCH: 'Top search',
    CHANGE: 'Change',
    PLEACHOLDER: 'Please enter the content',
  },
  PREV: 'Prev',
  NEXT: 'Next',
  ALL: 'All',
  TYPE: 'Type',
  VIEW_MORE: 'View More',
  COOKIE: {
    TEXT: [
      'This site uses cookies. By continuing to browse the site you are agreeing to our use of cookies.',
      'Read our privacy policy>',
    ],
    PATH: '/en/privacyPolicy/',
  },
};