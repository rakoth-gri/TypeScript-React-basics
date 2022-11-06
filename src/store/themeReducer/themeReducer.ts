// импортируем типы:
import { toggleThemeAction, themeReducerState, toggleThemeType } from "./themeTypes";

// импортируем сервисы:
import { getTheme } from "../../services/ls";

// константы
import { themeKey } from "../../const/data";

const initState = {
	theme: getTheme(themeKey),
} as themeReducerState;

export const themeReducer = (state = initState, action: toggleThemeAction): themeReducerState => {
	switch (action.type) {
		case toggleThemeType:
			return {
				...state,
				theme: action.payload,
			};
		default:
			return state;
			break;
	}
};
