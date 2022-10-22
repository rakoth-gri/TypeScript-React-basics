import axios, { AxiosResponse } from "axios";
// типы
import { ITodo, INewTodo } from "../store/todosReducer/todoTypes";

// константы
import { TODO_BASE_URL } from "../const/api";



export class ServerConnector {
	// пагинация
	static async fetchTodos(page: number, limit: number): Promise<AxiosResponse<ITodo[]>> {
		return await axios.get<ITodo[]>(`${TODO_BASE_URL}?_page=${page}&_limit=${limit}`);
	}
	// поиск
	static fetchSearchedTodos = async (search: string): Promise<AxiosResponse<ITodo[]>> => {
		return await axios.get<ITodo[]>(`${TODO_BASE_URL}?id=${search}`)
	}
	// добавления todo
	static postNewTodo = async(body: INewTodo): Promise<AxiosResponse<INewTodo>> => {
		return await axios.post<INewTodo>(`${TODO_BASE_URL}`, {body})
	}
}

