import { LANGUAGES } from "./language";
import { TECHNOLOGY_TITLE } from "./skills";

export const Portfolio = {
  title: "Портфолио",
  items: [
    {
      id: 0,
      url: "/",
      title: "Этот сайт",
      desc: "Сайт-визитка Frontend-разработчика",
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
      url: "https://21-sport.ru",
      title: "21 спорт",
      desc: "Интернет магазин спортивной одежды, обуви и аксессуаров",
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
      stack: [
        TECHNOLOGY_TITLE.nextJs,
        TECHNOLOGY_TITLE.reduxToolkit,
        TECHNOLOGY_TITLE.tailwindCss,
      ],
      img: "/syktyvkar.png",
    },
  ],
};
