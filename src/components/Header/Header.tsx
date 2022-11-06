import React from "react";

import "./Header.css";

// компоненты:
import ThemeToggle from "../ThemeToggle";

interface IHeaderProps {
	children: React.ReactElement;
}

const Header: React.FC<IHeaderProps> = ({ children }) => {
	return (
		<header>
			{children}
			<ThemeToggle />
		</header>
	);
};

export default Header;
