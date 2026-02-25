import { LANGUAGES } from "./language"
import { TECHNOLOGY_TITLE } from "./skills"

/* ==============================================
   ARCHIVED PROJECTS — commented out, not deleted
   ==============================================

export const PROJECTS_ARCHIVED = [
  {
    id: 0,
    inProgress: false,
    url: "/",
    isPersonal: true,
    year: "2024",
    stack: [
      TECHNOLOGY_TITLE.nextJs,
      TECHNOLOGY_TITLE.tailwindCss,
      TECHNOLOGY_TITLE.framerMotion,
      TECHNOLOGY_TITLE.vanillaTilt,
    ],
    img: "/portfolio.png",
  },
  {
    id: 1,
    inProgress: false,
    isDisabled: true,
    url: "https://21-sport.ru",
    isPersonal: true,
    year: "2022-2024",
    stack: [
      TECHNOLOGY_TITLE.react,
      TECHNOLOGY_TITLE.reduxToolkit,
      TECHNOLOGY_TITLE.sass,
    ],
    img: "/21-sport.png",
  },
  {
    id: 2,
    inProgress: false,
    url: "https://syktyvkar.vercel.app",
    isPersonal: true,
    year: "2023-2025",
    stack: [
      TECHNOLOGY_TITLE.nextJs,
      TECHNOLOGY_TITLE.reduxToolkit,
      TECHNOLOGY_TITLE.tailwindCss,
    ],
    img: "/syktyvkar.jpeg",
  },
  {
    id: 3,
    inProgress: false,
    url: "https://menfin.ru",
    isPersonal: false,
    year: "2023-2024",
    stack: [TECHNOLOGY_TITLE.nextJs, TECHNOLOGY_TITLE.tailwindCss],
    img: "/menfin.png",
  },
  {
    id: 4,
    inProgress: false,
    url: "https://zamkovkomi.ru/",
    isPersonal: true,
    year: "2024-2025",
    stack: [
      TECHNOLOGY_TITLE.nextJs,
      TECHNOLOGY_TITLE.tailwindCss,
      TECHNOLOGY_TITLE.gpt5,
      TECHNOLOGY_TITLE.shadcn,
      TECHNOLOGY_TITLE.v0,
    ],
    img: "/zamkovkomi.png",
  },
  {
    id: 5,
    inProgress: false,
    url: "https://zamkovkomi-auto.ru/",
    isPersonal: true,
    year: "2025",
    stack: [
      TECHNOLOGY_TITLE.nextJs,
      TECHNOLOGY_TITLE.tailwindCss,
      TECHNOLOGY_TITLE.shadcn,
      TECHNOLOGY_TITLE.v0,
    ],
    img: "/zamkovkomi-auto.png",
  },
  {
    id: 6,
    inProgress: false,
    url: "https://v0-classic-wedding-landing.vercel.app/",
    isPersonal: true,
    year: "2025",
    stack: [
      TECHNOLOGY_TITLE.nextJs,
      TECHNOLOGY_TITLE.tailwindCss,
      TECHNOLOGY_TITLE.shadcn,
      TECHNOLOGY_TITLE.v0,
    ],
    img: "/wedding.png",
  },
  {
    id: 7,
    inProgress: false,
    url: "https://dry-cleaning-cleanliness.vercel.app",
    isPersonal: true,
    year: "2025",
    stack: [
      TECHNOLOGY_TITLE.nextJs,
      TECHNOLOGY_TITLE.tailwindCss,
      TECHNOLOGY_TITLE.shadcn,
      TECHNOLOGY_TITLE.v0,
      TECHNOLOGY_TITLE.zustand,
    ],
    img: "/dry-cleaning.png",
  },
  {
    id: 8,
    inProgress: true,
    url: "",
    isPersonal: true,
    year: "2025",
    stack: [
      TECHNOLOGY_TITLE.nextJs,
      TECHNOLOGY_TITLE.tailwindCss,
      TECHNOLOGY_TITLE.shadcn,
      TECHNOLOGY_TITLE.v0,
    ],
    img: "/text-comparison.png",
  },
]

export const PROJECT_TEXTS_ARCHIVED = {
  [LANGUAGES.EN]: [
    {
      title: "This site",
      desc: "Frontend developer's business card site",
    },
    {
      title: "21 Store",
      desc: "Online store of sportswear, shoes and accessories",
    },
    {
      title: "City of Syktyvkar",
      desc: "University pet project: multifunctional website with static info, photos and a weather API",
    },
    {
      title: "Management and Finance",
      desc: "Participated in interface design, layout, form setup with validation, and state management",
    },
    {
      title: "Emergency Lock Opening",
      desc: "A modern multi-page website for a locksmith, featuring easy navigation and a helpful blog",
    },
    {
      title: "Emergency car opening",
      desc: "A separate landing page of a specialist for car opening for this specific service",
    },
    {
      title: "Wedding Invitation",
      desc: "A wedding invitation site designed in a light and modern style. Sold as a template",
    },
    {
      title: "ChistoTa Dry Cleaning",
      desc: "A concise dry cleaning website template for sale. Inspired by outdated and boring sites of other companies",
    },
    {
      title: "Text Comparison",
      desc: "An app for comparing texts with highlighted differences. Data is not stored, analyzed, or transmitted",
    },
  ],
  [LANGUAGES.RU]: [
    {
      title: "Этот сайт",
      desc: "Сайт-визитка Frontend-разработчика",
    },
    {
      title: "21 стор",
      desc: "Интернет магазин спортивной одежды, обуви и аксессуаров",
    },
    {
      title: "Город Сыктывкар",
      desc: "Учебный пет-проект: многофункциональный сайт со статичной информацией, фото и API погоды",
    },
    {
      title: "Менеджмент и Финансы",
      desc: "Участвовал в дизайне интерфейсов, верстке, настройке форм с валидацией и управлении состоянием",
    },
    {
      title: "Аварийное вскрытие замков",
      desc: "Современный многостраничный сайт мастера по замкам с удобной навигацией и полезным блогом",
    },
    {
      title: "Аварийное вскрытие авто",
      desc: "Отдельный лендинг мастера по выскрытию авто для конкретной услуги",
    },
    {
      title: "Приглашение на свадьбу",
      desc: "Сайт-приглашение, выполненный в светлом современном стиле. Продаётся как шаблон.",
    },
    {
      title: "Химчистка ЧистоТа",
      desc: "Лаконичный шаблон сайта химчистки на продажу. Вдохновлен устаревшими и скучными сайтами других компаний",
    },
    {
      title: "Сравнение текстов",
      desc: "Приложение для сравнения текстов с подсветкой различий. Данные не хранятся, не анализируются и не передаются",
    },
  ],
}

============================================== */

// zefi-shop & zefi-crm — new projects in progress
export const PROJECTS = [
  {
    id: 0,
    name: "zefi-shop",
    inProgress: true,
    url: "",
    isPersonal: true,
    year: "2026",
    stack: [
      TECHNOLOGY_TITLE.nextJs,
      TECHNOLOGY_TITLE.tailwindCss,
      TECHNOLOGY_TITLE.shadcn,
      TECHNOLOGY_TITLE.v0,
    ],
    img: "/portfolio.png",
  },
  {
    id: 1,
    name: "zefi-crm",
    inProgress: true,
    url: "",
    isPersonal: true,
    year: "2026",
    stack: [
      TECHNOLOGY_TITLE.nextJs,
      TECHNOLOGY_TITLE.tailwindCss,
      TECHNOLOGY_TITLE.shadcn,
      TECHNOLOGY_TITLE.v0,
    ],
    img: "/portfolio.png",
  },
]

export const PROJECT_TEXTS = {
  [LANGUAGES.EN]: [
    {
      title: "Zefi Shop",
      desc: "Online store project",
    },
    {
      title: "Zefi CRM",
      desc: "Customer relationship management system",
    },
  ],
  [LANGUAGES.RU]: [
    {
      title: "Zefi Shop",
      desc: "Проект интернет-магазина",
    },
    {
      title: "Zefi CRM",
      desc: "Система управления клиентами",
    },
  ],
}
