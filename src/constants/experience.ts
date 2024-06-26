import { getTimeDifference } from "@/utils";
import { LANGUAGES } from "./language";
import { TECHNOLOGY_TITLE } from "./skills";

export const Experience = {
  [LANGUAGES.RU]: {
    title: "Опыт",
    items: [
      {
        company: "Менеджмент и финансы",
        location: "Москва",
        role: "Frontend-разработчик",
        duration: "Январь 2023 — По настоящее время",
        level: "Middle",
        workFormat: "Удаленно",
        skills: [
          TECHNOLOGY_TITLE.nextJs,
          TECHNOLOGY_TITLE.react,
          TECHNOLOGY_TITLE.typescript,
          TECHNOLOGY_TITLE.jsx,
          TECHNOLOGY_TITLE.tailwindCss,
          TECHNOLOGY_TITLE.git,
          TECHNOLOGY_TITLE.github,
        ],
        desc: "",
      },
      {
        company: "Фриланс",
        location: "Москва",
        role: "Web-разработчик",
        duration: "Август 2021 — По настоящее время",
        level: "Middle",
        workFormat: "Удаленно",
        skills: [
          TECHNOLOGY_TITLE.javascript,
          TECHNOLOGY_TITLE.typescript,
          TECHNOLOGY_TITLE.react,
          TECHNOLOGY_TITLE.nextJs,
          TECHNOLOGY_TITLE.redux,
          TECHNOLOGY_TITLE.reduxToolkit,
          TECHNOLOGY_TITLE.git,
          TECHNOLOGY_TITLE.sass,
          TECHNOLOGY_TITLE.css,
          TECHNOLOGY_TITLE.html,
          TECHNOLOGY_TITLE.styledComponents,
          TECHNOLOGY_TITLE.csCart,
          TECHNOLOGY_TITLE.tilda,
        ],
        desc: "",
      },
      {
        company: "TopMarka1",
        location: "Нижний Новгород",
        role: "Frontend-разработчик",
        duration: "Октябрь 2022 — Ноябрь 2022 (2 месяца)",
        level: "Junior",
        workFormat: "Удаленно",
        skills: [
          TECHNOLOGY_TITLE.react,
          TECHNOLOGY_TITLE.redux,
          TECHNOLOGY_TITLE.jsx,
          TECHNOLOGY_TITLE.javascript,
          TECHNOLOGY_TITLE.sass,
          TECHNOLOGY_TITLE.git,
        ],
        desc: "Я присоединился к фулл-тайм проекту, где занимался версткой компонентов и разработкой логики приложения. В проекте использовались современные инструменты, такие как React, Redux, роутинг и lazyload и т.д.",
      },
      {
        company: "21 sport nn",
        location: "Нижний Новгород",
        role: "Frontend-разработчик",
        duration: "Июль 2022 — Ноябрь 2022 (5 месяцев)",
        level: "Junior",
        workFormat: "Офис",
        skills: [
          TECHNOLOGY_TITLE.react,
          TECHNOLOGY_TITLE.redux,
          TECHNOLOGY_TITLE.reduxToolkit,
          TECHNOLOGY_TITLE.javascript,
          TECHNOLOGY_TITLE.jsx,
          TECHNOLOGY_TITLE.git,
          TECHNOLOGY_TITLE.sass,
        ],
        desc: "Я разрабатывал React-приложение для компании, специализирующейся на продаже оригинальной спортивной одежды. Моя задача заключалась в создании фронтенда, в то время как бэкенд уже полностью готов и написан на Nest.js другим разработчиком. Проект был начат летом и разрабатывался постепенно. Окончательная версия была завершена в ноябре, и сайт продолжает поддерживаться до сих пор. В конце сентября магазин претерпел изменение концепции и названия, что потребовало корректировки некоторых аспектов.",
      },
      {
        company: "АО «ГНИВЦ»",
        location: "Москва",
        role: "Frontend Стажер",
        duration: "Февраль 2022 — Март 2022 (2 месяца)",
        level: "Intern",
        workFormat: "Удаленно",
        skills: [
          TECHNOLOGY_TITLE.react,
          TECHNOLOGY_TITLE.mobX,
          TECHNOLOGY_TITLE.typescript,
          TECHNOLOGY_TITLE.nodeJs,
          TECHNOLOGY_TITLE.sass,
          TECHNOLOGY_TITLE.jsx,
        ],
        desc: "Во время стажировки в компании я занимался индивидуальной разработкой задач по JavaScript, TypeScript и верстке. Также я принимал участие в общем проекте, используя React, TypeScript и MobX. В команде было 4 человека, а также главный разработчик и ментор.",
      },
      {
        company: "СГУ им. П. Сорокина",
        location: "Сыктывкар",
        role: "Web-разработчик",
        duration: "Ноябрь 2019 — Июль 2020 (9 месяцев)",
        level: "Student",
        workFormat: "Офис",
        skills: [
          TECHNOLOGY_TITLE.javascript,
          TECHNOLOGY_TITLE.html,
          TECHNOLOGY_TITLE.sass,
          TECHNOLOGY_TITLE.php,
          TECHNOLOGY_TITLE.mySql,
        ],
        desc: "Индивидуальная работа над дипломом + работа над внутренним студенческим порталом. В обоих случаях было выбрано направление WEB, конкретный стек технологий: JavaScript, HTML, CSS, PHP, MySQL",
      },
    ],
  },

  [LANGUAGES.EN]: {
    title: "Experience",
    items: [
      {
        company: "Management and Finance",
        location: "Moscow",
        role: "Frontend Developer",
        duration: "January 2023 – Present",
        level: "Middle",
        workFormat: "Remote",
        skills: [
          TECHNOLOGY_TITLE.nextJs,
          TECHNOLOGY_TITLE.react,
          TECHNOLOGY_TITLE.typescript,
          TECHNOLOGY_TITLE.jsx,
          TECHNOLOGY_TITLE.tailwindCss,
          TECHNOLOGY_TITLE.git,
          TECHNOLOGY_TITLE.github,
        ],
        desc: "",
      },
      {
        company: "Freelance",
        location: "Moscow",
        role: "Web Developer",
        duration: "August 2021 – Present",
        level: "Middle",
        workFormat: "Remote",
        skills: [
          TECHNOLOGY_TITLE.javascript,
          TECHNOLOGY_TITLE.typescript,
          TECHNOLOGY_TITLE.react,
          TECHNOLOGY_TITLE.nextJs,
          TECHNOLOGY_TITLE.redux,
          TECHNOLOGY_TITLE.reduxToolkit,
          TECHNOLOGY_TITLE.git,
          TECHNOLOGY_TITLE.sass,
          TECHNOLOGY_TITLE.css,
          TECHNOLOGY_TITLE.html,
          TECHNOLOGY_TITLE.styledComponents,
          TECHNOLOGY_TITLE.csCart,
          TECHNOLOGY_TITLE.tilda,
        ],
        desc: "",
      },
      {
        company: "TopMarka1",
        location: "Nizhny Novgorod",
        role: "Frontend Developer",
        duration: "October 2022 – November 2022 (2 months)",
        level: "Junior",
        workFormat: "Remote",
        skills: [
          TECHNOLOGY_TITLE.react,
          TECHNOLOGY_TITLE.redux,
          TECHNOLOGY_TITLE.jsx,
          TECHNOLOGY_TITLE.javascript,
          TECHNOLOGY_TITLE.sass,
          TECHNOLOGY_TITLE.git,
        ],
        desc: "Joined a full-time project, working on component styling and application logic using modern tools such as React, Redux, routing, and lazy loading.",
      },
      {
        company: "21 sport nn",
        location: "Nizhny Novgorod",
        role: "Frontend Developer",
        duration: "July 2022 – November 2022 (5 months)",
        level: "Junior",
        workFormat: "Office",
        skills: [
          TECHNOLOGY_TITLE.react,
          TECHNOLOGY_TITLE.redux,
          TECHNOLOGY_TITLE.reduxToolkit,
          TECHNOLOGY_TITLE.javascript,
          TECHNOLOGY_TITLE.jsx,
          TECHNOLOGY_TITLE.git,
          TECHNOLOGY_TITLE.sass,
        ],
        desc: "Developed a React application for a company specializing in original sportswear. Frontend work was done while the backend was already completed using Nest.js by another developer. The project started in the summer and progressed gradually, with the final version presented in November. The website continues to be maintained.",
      },
      {
        company: "AO GNIVC",
        location: "Moscow",
        role: "Frontend Intern",
        duration: "February 2022 – March 2022 (2 months)",
        level: "Intern",
        workFormat: "Remote",
        skills: [
          TECHNOLOGY_TITLE.react,
          TECHNOLOGY_TITLE.mobX,
          TECHNOLOGY_TITLE.typescript,
          TECHNOLOGY_TITLE.nodeJs,
          TECHNOLOGY_TITLE.sass,
          TECHNOLOGY_TITLE.jsx,
        ],
        desc: "During the internship, I worked on individual tasks involving JavaScript, TypeScript, and frontend development. I also participated in a team project using React, TypeScript, and MobX. The team consisted of 4 people, including a lead developer and mentor.",
      },
      {
        company: "Syktyvkar State University",
        location: "Syktyvkar",
        role: "Web Developer",
        duration: "November 2019 – July 2020 (9 months)",
        level: "Student",
        workFormat: "Office",
        skills: [
          TECHNOLOGY_TITLE.javascript,
          TECHNOLOGY_TITLE.html,
          TECHNOLOGY_TITLE.sass,
          TECHNOLOGY_TITLE.php,
          TECHNOLOGY_TITLE.mySql,
        ],
        desc: "Individually worked on my diploma project and contributed to an internal student portal. Both projects were related to web development, using technologies such as JavaScript, HTML, CSS, PHP, and MySQL.",
      },
    ],
  },
};
