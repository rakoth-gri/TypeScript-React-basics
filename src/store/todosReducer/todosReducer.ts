// экспортируем необходимые типы:
import { todosReducerActions, todosState, todosReducerEnum } from "./todoTypes";

// сервисы ----->>>>
import { LS } from "../../services/ls";

// константы ----->>>>
import { completedKey } from "../../const/data";

const initState: todosState = {
	loading: false,
	todos: [],
	completed: LS.getFromLS(completedKey),
	error: null,
	pagination: { pageNumber: 1, limit: 10, length: 200 },
	search: "",
	modal: false,
};

export const todosReducer = (state = initState, action: todosReducerActions): todosState => {
	switch (action.type) {
		case todosReducerEnum.loading:
			return {
				...state,
				loading: true,
			};
		case todosReducerEnum.fetchTodos:
			const ModifiedTodos = action.payload.map(({ id, title }) => ({ id, title }));

			return {
				...state,
				todos: ModifiedTodos,
				loading: false,
			};
		case todosReducerEnum.setError:
			return {
				...state,
				error: action.payload,
				loading: false,
			};
		case todosReducerEnum.setTodosPage:
			return {
				...state,
				pagination: { ...state.pagination, pageNumber: action.payload },
			};
		case todosReducerEnum.changeTodo:
			let store = { ...state.completed };
			store[action.payload] ? delete store[action.payload] : (store[action.payload] = "completed");

			return {
				...state,
				completed: store,
			};
			
		case todosReducerEnum.setSearch:
			return {
				...state,
				search: action.payload,
			};
		case todosReducerEnum.changeModalVis:
			return {
				...state,
				modal: !state.modal,
			};
		default:
			return state;
	}
};
