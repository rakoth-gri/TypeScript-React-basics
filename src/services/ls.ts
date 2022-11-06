export class LS {
	static setToLS = (key: string, data: any) => localStorage.setItem(key, JSON.stringify(data));
	static getFromLS = (key: string) => JSON.parse(localStorage.getItem(key) || "{}");
}

// Для сохранения темы
export const getTheme = (key: string) => localStorage.getItem(key) || "light";
export const setTheme = (key: string, data: string) => localStorage.setItem(key, data);
