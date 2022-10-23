import axios, { AxiosResponse } from "axios";
// типы
import { ITodo, INewTodo } from "../store/todosReducer/todoTypes";
import { IPost } from "../store/postsReducer/postTypes";
// константы
import { TODO_BASE_URL, POST_BASE_URL } from "../const/api";




export class ServerConnector {
	// пагинация todo
	static async fetchTodos(page: number, limit: number): Promise<AxiosResponse<ITodo[]>> {
		return await axios.get<ITodo[]>(`${TODO_BASE_URL}?_page=${page}&_limit=${limit}`);
	}
	// поиск todo
	static fetchSearchedTodos = async (search: string): Promise<AxiosResponse<ITodo[]>> => {
		return await axios.get<ITodo[]>(`${TODO_BASE_URL}?id=${search}`)
	}
	// добавления todo
	static postNewTodo = async(body: INewTodo): Promise<AxiosResponse<INewTodo>> => {
		return await axios.post<INewTodo>(`${TODO_BASE_URL}`, {body})
	}
	// **********************************************************************************

	static fetchPosts = async(): Promise<AxiosResponse<IPost[]>> => {
		return await axios.get<IPost[]>(`${POST_BASE_URL}`)
	}
}

