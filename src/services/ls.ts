export class LS {
	static setToLS = (key: string, data: any) => localStorage.setItem(key, JSON.stringify(data));
	static getFromLS = (key: string) => JSON.parse(localStorage.getItem(key) || "{}");
}
