export const SET_LANGUAGE = 'setLanguage'

interface Action {
  type: string;
  lang: string;
}

export function languageReducer(state: string, action: Action) {
    switch (action.type) {
        case SET_LANGUAGE:
            return action.lang
        default:
            return state
    }
}

export const setLanguageAC = (lang: string) => ({
    type: SET_LANGUAGE,
    lang,
})