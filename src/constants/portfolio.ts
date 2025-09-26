import { STATUS_TITLE } from "./common"
import { LANGUAGES } from "./language"
import { PROJECT_TEXTS, PROJECTS } from "./projects"

export const Portfolio = {
  [LANGUAGES.EN]: {
    title: "Portfolio",
    items: PROJECTS.map((p, i) => ({
      ...p,
      title: PROJECT_TEXTS[LANGUAGES.EN][i].title,
      desc: PROJECT_TEXTS[LANGUAGES.EN][i].desc,
      status: {
        isPersonal: p.isPersonal,
        title: p.isPersonal
          ? STATUS_TITLE.PERSONAL.en
          : STATUS_TITLE.PARTICIPATION.en,
      },
    })),
  },
  [LANGUAGES.RU]: {
    title: "Портфолио",
    items: PROJECTS.map((p, i) => ({
      ...p,
      title: PROJECT_TEXTS[LANGUAGES.RU][i].title,
      desc: PROJECT_TEXTS[LANGUAGES.RU][i].desc,
      status: {
        isPersonal: p.isPersonal,
        title: p.isPersonal
          ? STATUS_TITLE.PERSONAL.ru
          : STATUS_TITLE.PARTICIPATION.ru,
      },
    })),
  },
}
