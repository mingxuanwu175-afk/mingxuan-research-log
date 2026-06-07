type NavItem = {
  label: string;
  href: string;
};

/**
 * astro-theme-config.ts
 *
 * Central configuration for the Astro Tone theme.
 * Most site-level customization should happen in this file.
 */

const config = {
  site: {
  url: 'https://mingxuan-research-log.vercel.app',
  base: '',
  lang: 'en',
  locale: 'en_US',
  dateLocale: 'en-US',
  title: 'Mingxuan Research Log',
  logoLabel: 'Mingxuan',
  description: 'A public learning log documenting my path toward AI and AGI research.',
  author: 'Mingxuan Wu',
  defaultOgImage: '/og.png',
},
  // The logo already links to `/`. Add items here if you want visible header links.
  // Example: [{ label: 'Blog', href: '/blog' }, { label: 'About', href: '/about' }]
  nav: [
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Search', href: '/search' },
] as NavItem[],

  // Footer links stay visible by default so readers have a stable way to move around.
  footerNav: [
    { label: 'Blog', href: '/blog' },
    { label: 'About', href: '/about' },
    { label: 'Search', href: '/search' },
  ] as NavItem[],

  content: {
    categoryOrder: [
      'Design',
      'Getting Started',
      'Markdown',
      'Open Source',
      'Systems',
      'Notes',
      'Research',
      'Performance',
      'MDX',
    ],
  },

  behavior: {
    smoothScroll: true,
  },

  comments: {
    // One-line switch after you fill the giscus values:
    // mode: 'off'           -> no comments
    // mode: 'giscus'        -> original giscus theme
    // mode: 'giscus-custom' -> Astro Tone custom giscus theme
    // Local preview can also use PUBLIC_GISCUS_MODE and PUBLIC_GISCUS_* in .env.local.
    mode: 'off',
    provider: 'giscus',
    giscus: {
      repo: '',
      repoId: '',
      category: '',
      categoryId: '',
      mapping: 'pathname',
      strict: '0',
      reactionsEnabled: '0',
      emitMetadata: '0',
      inputPosition: 'bottom',
      theme: 'preferred_color_scheme',
      customLightTheme: '/giscus-light.css',
      customDarkTheme: '/giscus-dark.css',
      lang: 'en',
      loading: 'eager',
    },
  },

  social: {
  website: 'https://mingxuan-research-log.vercel.app',
  email: '',
  linkedin: '',
  github: 'https://github.com/mingxuanwu175-afk',
},

about: {
  /** Profile image URL. Leave empty to use the text-only About layout. */
  profileImage: '',
  name: 'Mingxuan Wu',
  role: 'Grade 9 student at XCL World Academy, building foundations in engineering, math, algorithms, and AI.',
  location: 'Singapore',
  focus: 'AI, AGI, world models, mechanistic interpretability, physics, and first-principles learning.',
  lead: 'I document my learning process in public as I build toward long-term AI and AGI research.',
  headline: ['Learning in', 'public.'],
  statementLabel: 'About',
  statementTitle: 'A public record of the process.',
  statement:
    'Hi, I am Mingxuan Wu, also known as Steve. I am currently building my foundation in Python engineering, mathematics, algorithms, and AI with the long-term goal of contributing to AGI research. My current focus is learning from first principles: understanding how systems work underneath the surface, not just using tools at a shallow level. This blog is where I document what I study, what I build, what I struggle with, and how my thinking changes over time. This site is not meant to present a finished version of me. It is a public record of the process.',
  careerLabel: 'Timeline',
  careerHeading: 'Learning timeline',
  career: [
    {
      period: 'Current',
      title: 'Foundation sprint',
      description:
        'Building daily foundations in Python engineering, linear algebra, probability, C++, and algorithmic thinking.',
    },
    {
      period: 'Current project',
      title: 'EduBridge',
      description:
        'Building an AI-guided academic tool for IB MYP students, focused on rubric-aligned thinking rather than content generation.',
    },
    {
      period: 'Long-term',
      title: 'Toward AI and AGI research',
      description:
        'Working toward the ability to build and understand systems that can reason about, model, and interact with the physical world.',
    },
  ],
  interests: [
    'AI systems that understand and interact with the physical world',
    'World models and mechanistic interpretability',
    'Physics, mathematics, and first-principles learning',
    'Building useful educational tools with real user feedback',
  ],
  interestsLabel: 'Interests',
  interestsHeading: 'What I keep returning to',
},
};
export default config;