// импортируем необходимые типы для todosReducer
import { todosReducerActions, todosReducerEnum, ITodo } from "./todoTypes";
// импортируем типы стора
import { AppDispatch } from "../store";
// сервисы
import { ServerConnector } from "../../services/serverConnector";

export const todoReducerActionsCreators = {
	setLoadingAction: (payload: boolean): todosReducerActions => ({
		type: todosReducerEnum.loading,
	}),

	setTodosAction: (arr: ITodo[]): todosReducerActions => ({
		type: todosReducerEnum.fetchTodos,
		payload: arr,
	}),

	setPageNumberAction: (page: number): todosReducerActions => ({
		type: todosReducerEnum.setPageNumber,
		payload: page,
	}),

	setErrorAction: (mess: string): todosReducerActions => ({
		type: todosReducerEnum.setError,
		payload: mess,
	}),

	changeTodo: (id: number): todosReducerActions => ({
		type: todosReducerEnum.changeTodo,
		payload: id,
	}),

	setSearch: (search: string): todosReducerActions => ({
		type: todosReducerEnum.setSearch,
		payload: search,
	}),

	changeModalVis: (): todosReducerActions => ({
		type: todosReducerEnum.changeModalVis,
	}),

	// асинхронные экшены с thunk MiddleWare ------->>>>

	fetchTodos: function (page: number, limit: number) {
		return (dispatch: AppDispatch) => {
			try {
				dispatch(todoReducerActionsCreators.setLoadingAction(true));
				setTimeout(async () => {
					let response = await ServerConnector.fetchTodos(page, limit);
					dispatch(todoReducerActionsCreators.setTodosAction(response.data));
				}, 300);
			} catch (error: any) {
				dispatch(todoReducerActionsCreators.setErrorAction(error.message));
			}
		};
	},

	fetchSearchedTodos: function (search: string) {
		return (dispatch: AppDispatch) => {
			try {
				dispatch(todoReducerActionsCreators.setLoadingAction(true));
				setTimeout(async () => {
					let response = await ServerConnector.fetchSearchedTodos(search);
					dispatch(todoReducerActionsCreators.setTodosAction(response.data));
				}, 300);
			} catch (error: any) {
				dispatch(todoReducerActionsCreators.setErrorAction(error.message));
			}
		};
	},
};
