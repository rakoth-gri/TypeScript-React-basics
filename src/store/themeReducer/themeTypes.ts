export const toggleThemeType = "toggleTheme";

export interface themeReducerState {
	theme: string;
}

export type toggleThemeAction = {
	type: typeof toggleThemeType;
	payload: string;
};
