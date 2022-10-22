import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./AddTodoForm.css";

// хуки
import { useAppDispatch } from "../../store/store";
import { useActionCreators } from "../../hooks/bindActions";

// типы
import { INewTodo } from "../../store/todosReducer/todoTypes";

// сервисы
import { ServerConnector } from "../../services/serverConnector";

const AddTodoForm = () => {
	const { changeModalVis } = useActionCreators();

	const [todo, setTodo] = useState<INewTodo>({ userId: null, id: null, title: "", completed: false });

	const submitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
		const newTodo = Object.assign({ ...todo }, { userId: Math.floor(Math.random() * 11), id: Date.now() });
		if (Object.values(newTodo).some((item) => item === "")) return;

		ServerConnector.postNewTodo(newTodo)
			.then(() => setTodo({ userId: null, id: null, title: "", completed: false }))
			.then(() => setTimeout(() => changeModalVis(), 300));
	};

	return (
		<form
			className="AddTodoForm bg-info bg-gradient p-3 text-center"
			onClick={(e) => e.stopPropagation()}
			onSubmit={submitHandler}
		>
			<div className="mb-3">
				<label htmlFor="exampleInputEmail1" className="form-label">
					Email address
				</label>
				<input
					type="text"
					className="form-control"
					id="exampleInputEmail1"
					aria-describedby="emailHelp"
					value={todo.title}
					name="title"
					onChange={(e) => setTodo({ ...todo, [e.target.name]: e.target.value })}
				/>
			</div>

			<button type="submit" className="btn btn-danger">
				Submit
			</button>
		</form>
	);
};

export default AddTodoForm;

// {
//     "userId": 1,
//     "id": 1,
//     "title": "delectus aut autem",
//     "completed": false
//   },
