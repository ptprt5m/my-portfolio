import { getTimeDifference } from "@/utils";
import { LANGUAGES } from "./language";

export const Experience = {
  [LANGUAGES.RU]: {
    title: "Опыт",
    items: [
      {
        company: "Менеджмент и финансы",
        location: "Москва",
        role: "Frontend разработчик",
        duration: "Январь 2023 — По настоящее время",
        level: 'Middle',
        skills: ["Git", "TypeScript", "Next.js", "Jest"],
      },
      {
        company: "Фриланс",
        location: "Москва",
        role: "HTML-верстальщик",
        duration: "Август 2021 — По настоящее время",
        level: 'Middle',
        skills: [
          "JavaScript",
          "Git",
          "Ajax",
          "SCSS",
          "HTML",
          "CSS",
          "WordPress",
        ],
        responsibilities: [
          "HTML-верстка сайта по макету",
          "Составление и исправление дизайна макета сайта",
          "Верстка посадочных страниц",
          "SEO-оптимизация",
          "Редизайн сайта",
          "Исправления ошибок верстки",
          "Оптимизация сайтов под Google PageSpeed Insights",
          "Удаление консольных ошибок и ошибок валидации",
          "Создание динамических интерфейсов с помощью JavaScript",
        ],
      },
      {
        company: "TopMarka1",
        location: "Нижний Новгород",
        role: "Frontend-разработчик",
        duration: "Октябрь 2022 — Ноябрь 2022 (2 месяца)",
        level: 'Junior',
        skills: ["Git", "React", "JavaScript", "HTML", "Redux", "SCSS"],
        responsibilities: [
          "Зашел на React-проект на фулл-тайм, выполнил свои обязанности по верстке компонентов под React и написании логики приложения.",
          "Использовали React + Redux + смежные библиотеки, вроде роутинга и лейзилоад",
        ],
      },
      {
        company: "21 sport nn",
        location: "Нижний Новгород",
        role: "Frontend-разработчик",
        duration: "Июль 2022 — Ноябрь 2022 (5 месяцев)",
        level: 'Junior',
        skills: [
          "Git",
          "React",
          "JavaScript",
          "HTML",
          "Веб-разработка",
          "SCSS",
          "Redux",
        ],
        responsibilities: [
          "Написание React-приложения (сайта) для компании, продающей оригинальные спортивные вещи в центре города. Только Frontend, backend пишется прямо сейчас",
          "Проект был начат летом, писался потихоньку. Был закончен в ноябре, потому-что в конце сентября магазин перетерпел изменение концепции и названия с дизайном. Пришлось корректировать некоторые моменты",
        ],
      },
      {
        company: "АО «ГНИВЦ»",
        location: "Москва",
        role: "Frontend Стажер",
        duration: "Февраль 2022 — Март 2022 (2 месяца)",
        level: 'Intern',
        skills: [
          "JavaScript",
          "CSS",
          "HTML",
          "React",
          "MobX",
          "TypeScript",
          "Node.js",
        ],
        responsibilities: [
          "Стажировка в компании.",
          "Индивидуальная работа над задачами по JS, TS, верстке",
          "Работа над общим проектом на React + TypeScript + MobX. Команда из 4 человек + главный разработчик и ментор.",
        ],
      },
      {
        company: "СГУ им. П. Сорокина",
        location: "Сыктывкар",
        role: "Web-разработчик",
        duration: "Ноябрь 2019 — Июль 2020 (9 месяцев)",
        level: 'Student',
        skills: ["JavaScript", "HTML", "CSS", "Веб-разработка", "PHP", "MySQL"],
        responsibilities: [
          "Индивидуальная работа над дипломом + работа над внутренним студенческим порталом.",
          "В обоих случаях было выбрано направление WEB, конкретный стек технологий: JavaScript, HTML, CSS, PHP, MySQL",
        ],
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
        duration: `January 2023 — Present (${getTimeDifference(new Date(Date.parse("01.01.2023")))})`,
        level: 'Middle',
        skills: ["Git", "TypeScript", "Next.js", "Jest"],
      },
      {
        company: "Freelance",
        location: "Moscow",
        role: "HTML Designer",
        duration: `August 2021 — Present (2 years and 9 months) (${getTimeDifference(new Date(Date.parse("01.08.2021")))})`,
        level: 'Middle',
        skills: [
          "JavaScript",
          "Git",
          "Ajax",
          "SCSS",
          "HTML",
          "CSS",
          "WordPress",
        ],
        responsibilities: [
          "HTML design of the site according to the layout",
          "Composition and correction of the layout of the site",
          "Design of landing pages",
          "SEO optimization",
          "Site redesign",
          "Correction of layout errors",
          "Optimization of sites for Google PageSpeed Insights",
          "Removal of console errors and validation errors",
          "Creation of dynamic interfaces with JavaScript",
        ],
      },
      {
        company: "TopMarka1",
        location: "Nizhny Novgorod",
        role: "Frontend Developer",
        duration: "October 2022 — November 2022 (2 months)",
        level: 'Junior',
        skills: ["Git", "React", "JavaScript", "HTML", "Redux", "SCSS"],
        responsibilities: [
          "Joined a React project on a full-time basis, completed my responsibilities in frontend development and the logic of the application.",
          "Used React + Redux + related libraries, such as routing and lazy loading",
        ],
      },
      {
        company: "21 sport nn",
        location: "Nizhny Novgorod",
        role: "Frontend Developer",
        duration: "July 2022 — November 2022 (5 months)",
        level: 'Junior',
        skills: [
          "Git",
          "React",
          "JavaScript",
          "HTML",
          "Web development",
          "SCSS",
          "Redux",
        ],
        responsibilities: [
          "Development of a React application (site) for a company selling original sports items in the city center. Only the frontend, the backend is being written right now",
          "The project started in the summer, was written gradually. It was completed in November, because at the end of September the store underwent a change in concept and name with the design. Had to correct some moments",
        ],
      },
      {
        company: "AO «GNIVTs»",
        location: "Moscow",
        role: "Frontend Intern",
        duration: "February 2022 — March 2022 (2 months)",
        level: 'Intern',
        skills: [
          "JavaScript",
          "CSS",
          "HTML",
          "React",
          "MobX",
          "TypeScript",
          "Node.js",
        ],
        responsibilities: [
          "Internship in the company.",
          "Individual work on tasks related to JS, TS, layout",
          "Work on a general project on React + TypeScript + MobX. Team of 4 people + main developer and mentor.",
        ],
      },
      {
        company: "SGU named after P. Sorokin",
        location: "Syktyvkar",
        role: "Web Developer",
        duration: "November 2019 — July 2020 (9 months)",
        level: 'Student',
        skills: [
          "JavaScript",
          "HTML",
          "CSS",
          "Web development",
          "PHP",
          "MySQL",
        ],
        responsibilities: [
          "Individual work on the diploma + work on the internal student portal.",
          "In both cases, the direction of WEB was chosen, the specific technology stack: JavaScript, HTML, CSS, PHP, MySQL",
        ],
      },
    ],
  },
};
