import { LANGUAGES } from "./language";

export const TECHNOLOGY_TITLE = {
  html: 'HTML5',
  svg: 'SVG',
  jsx: 'JSX/TSX',
  forms: 'Forms',
  seo: 'SEO',
  css: 'CSS3',
  sass: 'SASS/SCSS',
  cssModules: 'CSS Modules',
  bem: 'BEM',
  styledComponents: 'styled-components',
  vanillaTilt: 'vanilla-tilt',
  tailwindCss: 'Tailwind CSS',
  framerMotion: 'Framer motion',
  php: 'PHP',
  mySql: 'MySQL',
  javascript: 'JavaScript',
  typescript: 'TypeScript',
  react: 'React',
  redux: 'Redux',
  reduxToolkit: 'Redux Toolkit',
  mobX: 'MobX',
  nextJs: 'Next.js',
  nodeJs: 'Node.js',
  git: 'Git',
  github: 'GitHub',
  gitlab: 'GitLab',
  prettier: 'prettier',
  npm: 'npm',
  eslint: 'ESLint',
  csCart: "Cs Cart",
  tilda: "Tilda"
};

export const TECHNOLOGY_GROUPS = {
  markup: {
    html: TECHNOLOGY_TITLE.html,
    svg: TECHNOLOGY_TITLE.svg,
    jsx: TECHNOLOGY_TITLE.jsx,
    forms: TECHNOLOGY_TITLE.forms,
    seo: TECHNOLOGY_TITLE.seo,
  },
  styles: {
    css: TECHNOLOGY_TITLE.css,
    sass: TECHNOLOGY_TITLE.sass,
    cssModules: TECHNOLOGY_TITLE.cssModules,
    bem: TECHNOLOGY_TITLE.bem,
    styledComponents: TECHNOLOGY_TITLE.styledComponents,
    tailwindCss: TECHNOLOGY_TITLE.tailwindCss,
    framerMotion: TECHNOLOGY_TITLE.framerMotion,
  },
  logic: {
    javascript: TECHNOLOGY_TITLE.javascript,
    typescript: TECHNOLOGY_TITLE.typescript,
    react: TECHNOLOGY_TITLE.react,
    redux: TECHNOLOGY_TITLE.redux,
    reduxToolkit: TECHNOLOGY_TITLE.reduxToolkit,
    nextJs: TECHNOLOGY_TITLE.nextJs,
  },
  utilities: {
    git: TECHNOLOGY_TITLE.git,
    github: TECHNOLOGY_TITLE.github,
    gitlab: TECHNOLOGY_TITLE.gitlab,
    prettier: TECHNOLOGY_TITLE.prettier,
    npm: TECHNOLOGY_TITLE.npm,
    eslint: TECHNOLOGY_TITLE.eslint,
  },
};

export const Skills = {
  [LANGUAGES.EN]: {
    title: "Skills",
    items: [
      {
        id: 0,
        title: "Markup",
        level: 85,
        items: Object.values(TECHNOLOGY_GROUPS.markup),
      },
      {
        id: 1,
        title: "Styles",
        level: 80,
        items: Object.values(TECHNOLOGY_GROUPS.styles),
      },
      {
        id: 2,
        title: "Logic",
        level: 70,
        items: Object.values(TECHNOLOGY_GROUPS.logic),
      },
      {
        id: 3,
        title: "Utilities",
        level: 60,
        items: Object.values(TECHNOLOGY_GROUPS.utilities),
      },
    ],
  },
  [LANGUAGES.RU]: {
    title: "Навыки",
    items: [
      {
        id: 0,
        title: "Разметка",
        level: 85,
        items: Object.values(TECHNOLOGY_GROUPS.markup),
      },
      {
        id: 1,
        title: "Стили",
        level: 80,
        items: Object.values(TECHNOLOGY_GROUPS.styles),
      },
      {
        id: 2,
        title: "Логика",
        level: 70,
        items: Object.values(TECHNOLOGY_GROUPS.logic),
      },
      {
        id: 3,
        title: "Утилиты",
        level: 60,
        items: Object.values(TECHNOLOGY_GROUPS.utilities),
      },
    ],
  },
};