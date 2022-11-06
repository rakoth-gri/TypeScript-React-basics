import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

// хуки
import { useAppSelector } from "./store/store";

// роуты:
import { routes } from "./routes/routes";

// константы
import { themeKey } from "./const/data";

// импортируем компоненты:
import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

// сервисы
import { changeElemProps } from "./services/changeElemProps";
import { setTheme } from "./services/ls";

function App() {
	const modal = useAppSelector((state) => state.todosReducer.modal);
	const theme = useAppSelector((state) => state.themeReducer.theme);

	useEffect(() => {
		changeElemProps(theme);
		setTheme(themeKey, theme);
	}, [theme]);

	return (
		<div className="App">
			{modal && <Modal />}
			<Header>
				<Menu />
			</Header>
			<div className="container">
				<Routes>
					{routes.map((route) => (
						<Route path={route.path} element={<route.elem />} key={route.path} />
					))}
				</Routes>
			</div>
			<Footer />
		</div>
	);
}

export default App;
