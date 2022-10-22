import React, { FC } from "react";
import "./Todo.css";

// хуки
import { useAppSelector } from "../../store/store";
import { useActionCreators } from "../../hooks/bindActions";

// типы
import { ITodo } from "../../store/todosReducer/todoTypes";


interface ITodoProps extends ITodo {}

const Todo: FC<ITodoProps> = ({ id, title }) => {
	
	const { changeTodo } = useActionCreators();

	const completed = useAppSelector((state) => state.todosReducer.completed);

	const handleChange = () => changeTodo(id);

	return (
		<div>
			{id}
			<input type="checkbox" data-id={id} onChange={handleChange} checked={completed[id] ? true : false} />
			<h4 className={`title ${completed[id] ? "done" : null}`}> {title} </h4>
		</div>
	);
};

export default Todo;
