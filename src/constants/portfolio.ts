import { LANGUAGES } from "./language";

export const Portfolio = {
  [LANGUAGES.EN]: {
    title: "Portfolio",
    items: [
      {
        id: 0,
        url: "/",
        title: "This site",
        desc: "Frontend developer's business card site",
        stack: ["next.js", "tailwind", "framer motion", "vanilla-tilt"],
        img: "/portfolio.png",
      },
      {
        id: 1,
        url: "https://21-sport.ru",
        title: "21 Sport",
        desc: "Online store of sportswear, shoes and accessories",
        stack: ["react", "redux-toolkit"],
        img: "/21-sport.png",
      },
      {
        id: 2,
        url: "https://syktyvkar.vercel.app",
        title: "City of Syktyvkar",
        desc: "Website of the beautiful city of Syktyvkar, the capital of the Komi Republic",
        stack: ["next.js", "redux-toolkit", "tailwind"],
        img: "/syktyvkar.png",
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
        stack: ["next.js", "tailwind", "framer motion", "vanilla-tilt"],
        img: "/portfolio.png",
      },
      {
        id: 1,
        url: "https://21-sport.ru",
        title: "21 спорт",
        desc: "Интернет магазин спортивной одежды, обуви и аксессуаров",
        stack: ["react", "redux-toolkit"],
        img: "/21-sport.png",
      },
      {
        id: 2,
        url: "https://syktyvkar.vercel.app",
        title: "Город Сыктывкар",
        desc: "Сайт-визитка прекрасного города Сыктывкар, столицы Республики Коми",
        stack: ["next.js", "redux-toolkit", "tailwind"],
        img: "/syktyvkar.png",
      },
    ],
  },
};
