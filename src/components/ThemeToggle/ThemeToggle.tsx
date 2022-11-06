import React from "react";

import "./ThemeToggle.css";

// хуки
import { useActionCreators } from "../../hooks/bindActions";
import { useAppSelector } from "../../store/store";

const ThemeToggle: React.FC = () => {
	const { toggleThemeActionCreator } = useActionCreators();

	const theme = useAppSelector((state) => state.themeReducer.theme);

	const changeTheme = (): void => {
		theme === "light" ? toggleThemeActionCreator("dark") : toggleThemeActionCreator("light");
	};

	return (
		<div className="theme">
			<input type="checkbox" onChange={changeTheme} />
			<span> {theme} </span>
		</div>
	);
};

export default ThemeToggle;
