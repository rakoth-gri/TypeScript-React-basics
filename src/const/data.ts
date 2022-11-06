import { CSSProperties } from "react";
import { routesEnum } from "../routes/routes";

export interface INavLinks {
	to: string;
	value: string;
}

export const navLinks = [
	{
		to: routesEnum.main,
		value: "главная",
	},
	{
		to: routesEnum.todos,
		value: "задачи",
	},
	{
		to: routesEnum.posts,
		value: "посты",
	},
] as INavLinks[];

// для LS - хранение флагов дел!
export const completedKey = "completed";
export const themeKey = "theme";

// CSS для spinner:
export const spinner: CSSProperties = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	zIndex: 8,
};

// Элементы, с изменяемйо темой ------
interface IthemeElems {
	prop: string;
	prefix: string;
	postfix: string;
}

export const themeElems = [
	{
		prop: "--app-default-bg",
		prefix: "--app-",
		postfix: "-bg",
	},
	{
		prop: "--app-default-container",
		prefix: "--app-",
		postfix: "-container",
	},
	{
		prop: "--app-default-fs",
		prefix: "--app-",
		postfix: "-fs",
	},
] as IthemeElems[];

// Root - элемент
export const root: any = document.querySelector(":root");
