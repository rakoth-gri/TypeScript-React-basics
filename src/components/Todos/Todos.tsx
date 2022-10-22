import React, { FC, memo } from "react";
import "./Todos.css";

// хуки
import { useAppSelector } from "../../store/store";
// типы
import { ITodo } from "../../store/todosReducer/todoTypes";

// компоненты:
import Universal from "../Universal";
import Todo from "../Todo/Todo";

const Todos: FC = () => {
	const todos = useAppSelector((state) => state.todosReducer.todos);

	return (
		<main>
			{todos && <Universal elems={todos} cb={(elem: ITodo) => <Todo {...elem} key={elem.id} />} />}
		</main>
	);
};

export default Todos;
