import React, { useEffect } from "react";
import "./TodosPage.css";

// хуки
import { useAppSelector } from "../../store/store";
import { useActionCreators } from "../../hooks/bindActions";

// компоненты
import Pagination from "../../components/Pagination";
import Todos from "../../components/Todos";
import Loading from "../../components/Loading";
import Search from "../../components/Search";

const TodosPage: React.FC = () => {
	const { changeModalVis, fetchSearchedTodos, fetchTodos, setTodosPage } = useActionCreators();

	const { pageNumber, limit, length } = useAppSelector((state) => state.todosReducer.pagination);
	const search = useAppSelector((state) => state.todosReducer.search);

	const changeVisibility = () => changeModalVis();

	useEffect(() => {
		if (search) {
			fetchSearchedTodos(search);
			return;
		}
		fetchTodos(pageNumber, limit);
		
	}, [pageNumber, search]);

	return (
		<main>
			<h1 className="text-center" style={{ textDecoration: "underline" }}>
				{" "}
				TODOS{" "}
			</h1>
			<Search />
			<Loading />
			<Todos />
			<Pagination limit={limit} length={length} setPage={setTodosPage} />
			<button className="btn btn-danger btnModify" onClick={changeVisibility}>
				{" "}
				Добавить Задачу{" "}
			</button>
		</main>
	);
};

export default TodosPage;
