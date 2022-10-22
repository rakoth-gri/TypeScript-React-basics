// перечисления
export enum todosReducerEnum {
	loading = "loading",
	fetchTodos = "fetchTodos",
	setPageNumber = "setPageNumber",
	setError = "setError",
	changeTodo = "changeTodo",
	setSearch = "setSearch",
	changeModalVis = "changeModalVis",
}

// описываем интерфейс принимаемого todo и пагинации:
export interface ITodo {
	id: number;
	title: string;
}

export interface INewTodo {
	userId: null | number;
	id: null | number;
	title: string;
	completed: boolean;
}

export interface IPagination {
	pageNumber: number;
	limit: number;
	allTodosLength: number;
}

// типизация экшенов!
type setLoadingAction = {
	type: todosReducerEnum.loading;
};

type setTodosAction = {
	type: todosReducerEnum.fetchTodos;
	payload: ITodo[];
};

type setPageNumberAction = {
	type: todosReducerEnum.setPageNumber;
	payload: number;
};

type setErrorAction = {
	type: todosReducerEnum.setError;
	payload: string;
};

type changeTodo = {
	type: todosReducerEnum.changeTodo;
	payload: number;
};

type setSearch = {
	type: todosReducerEnum.setSearch;
	payload: string;
};

type changeModalVis = {
	type: todosReducerEnum.changeModalVis;	
};

// Обобщающий тип для экшенов:
export type todosReducerActions = setLoadingAction | setTodosAction | setPageNumberAction | setErrorAction | changeTodo | setSearch | changeModalVis;

export interface todosState {
	loading: boolean;
	todos: ITodo[];
	error: null | string;
	pagination: IPagination;
	completed: any;
	search: string;
	modal: boolean;
}
