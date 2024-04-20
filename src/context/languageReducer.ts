export const SET_LANGUAGE = 'setLanguage';

export function languageReducer(state, action) {
    switch (action.type) {
        case SET_LANGUAGE:
            return action.lang;
        default:
            return state;
    }
}

export const setLanguageAC = (lang) => ({
    type: SET_LANGUAGE,
    lang,
});