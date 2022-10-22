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

// CSS для spinner:
export const spinner: CSSProperties = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	zIndex: 8,
};
