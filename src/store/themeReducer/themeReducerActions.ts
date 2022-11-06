import { toggleThemeType, toggleThemeAction } from "./themeTypes";

export const toggleThemeActionCreator = (value: string): toggleThemeAction => ({
	type: toggleThemeType,
	payload: value,
});
