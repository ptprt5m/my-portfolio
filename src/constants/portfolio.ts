import { LANGUAGES } from "./language"
import { TECHNOLOGY_TITLE } from "./skills"

export const Portfolio = {
  [LANGUAGES.EN]: {
    title: "Portfolio",
    items: [
      {
        id: 0,
        url: "/",
        title: "This site",
        desc: "Frontend developer's business card site",
        status: {
          isPersonal: true,
          title: "Personal",
        },
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
        isDisabled: true,
        url: "https://21-sport.ru",
        title: "21 Store",
        desc: "Online store of sportswear, shoes and accessories",
        status: {
          isPersonal: true,
          title: "Personal",
        },
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
        url: "https://syktyvkar.vercel.app",
        title: "City of Syktyvkar",
        desc: "Website of the beautiful city of Syktyvkar, the capital of the Komi Republic",
        status: {
          isPersonal: true,
          title: "Personal",
        },
        year: "2023",
        stack: [
          TECHNOLOGY_TITLE.nextJs,
          TECHNOLOGY_TITLE.reduxToolkit,
          TECHNOLOGY_TITLE.tailwindCss,
        ],
        img: "/syktyvkar.png",
      },
      {
        id: 3,
        url: "https://menfin.ru",
        title: "Management and Finance",
        desc: "Participated in interface design, layout, form setup with validation, and state management",
        status: {
          isPersonal: false,
          title: "Participation",
        },
        year: "2023-2024",
        stack: [TECHNOLOGY_TITLE.nextJs, TECHNOLOGY_TITLE.tailwindCss],
        img: "/menfin.png",
      },
      {
        id: 4,
        url: "https://zamkovkomi.ru/",
        title: "Emergency Lock Opening",
        desc: "A minimalist business card website with a simple and user-friendly design, created upon the client's request",
        status: {
          isPersonal: true,
          title: "Personal",
        },
        year: "2024",
        stack: [TECHNOLOGY_TITLE.tilda],
        img: "/lock.png",
      },
    ],
  },
  [LANGUAGES.RU]: {
    title: "Портфолио",
    items: [
      {
        id: 0,
        url: "/",
        title: "Этот сайт",
        desc: "Сайт-визитка Frontend-разработчика",
        status: {
          isPersonal: true,
          title: "Личный",
        },
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
        isDisabled: true,
        url: "https://21-sport.ru",
        title: "21 стор",
        desc: "Интернет магазин спортивной одежды, обуви и аксессуаров",
        status: {
          isPersonal: true,
          title: "Личный",
        },
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
        url: "https://syktyvkar.vercel.app",
        title: "Город Сыктывкар",
        desc: "Сайт-визитка прекрасного города Сыктывкар, столицы Республики Коми",
        status: {
          isPersonal: true,
          title: "Личный",
        },
        year: "2023",
        stack: [
          TECHNOLOGY_TITLE.nextJs,
          TECHNOLOGY_TITLE.reduxToolkit,
          TECHNOLOGY_TITLE.tailwindCss,
        ],
        img: "/syktyvkar.png",
      },
      {
        id: 3,
        url: "https://menfin.ru",
        title: "Менеджмент и Финансы",
        desc: "Участвовал в дизайне интерфейсов, верстке, настройке форм с валидацией и управлении состоянием",
        status: {
          isPersonal: false,
          title: "Участие",
        },
        year: "2023-2024",
        stack: [TECHNOLOGY_TITLE.nextJs, TECHNOLOGY_TITLE.tailwindCss],
        img: "/menfin.png",
      },
      {
        id: 4,
        url: "https://zamkovkomi.ru/",
        title: "Аварийное вскрытие замков",
        desc: "Минималистичный сайт-визитка с простым и удобным дизайном, созданный по запросу мастера",
        status: {
          isPersonal: true,
          title: "Личный",
        },
        year: "2024",
        stack: [TECHNOLOGY_TITLE.tilda],
        img: "/lock.png",
      },
    ],
  },
}
