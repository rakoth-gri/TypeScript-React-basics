import React from "react";

import "./Modal.css";

// хуки
import { useAppDispatch } from "../../store/store";
import { useActionCreators } from "../../hooks/bindActions";

// компонеты
import AddTodoForm from "../AddTodoForm";
import Loading from "../Loading";

const Modal = () => {
	const { changeModalVis } = useActionCreators();

	const closeModal = () => changeModalVis();
	return (
		<section className="addTodoModal" onClick={closeModal}>
			<Loading />
			<AddTodoForm />
		</section>
	);
};

export default Modal;
