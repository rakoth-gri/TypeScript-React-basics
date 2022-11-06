import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

// импортим константы для меню
import { navLinks } from "../../const/data";

const Menu: React.FC = () => {
	const [activeLink, setActiveLink] = useState<string>("/");

	return (
		<nav className="nav p-2">
			{navLinks.map(({ to, value }) => (
				<Link
					to={to}
					key={to}
					className={`${to === activeLink ? "active" : ""} nav-link fs-4 text text-warning`}
					onClick={() => setActiveLink(to)}
				>
					{" "}
					{value}{" "}
				</Link>
			))}
		</nav>
	);
};

export default Menu;
