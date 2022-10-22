import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

// импортируем массив роутов:
import { routes } from "./routes/routes";

// импортируем компоненты:
import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

// хуки
import { useAppSelector } from "./store/store";

function App() {
	const modal = useAppSelector((state) => state.todosReducer.modal);

	return (
		<div className="App">
			{modal && <Modal />}
			<Header>
				<Menu />
			</Header>
			<div className="container bg-primary">
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
