// pages
import Main from "../pages/Main";
import TodosPage from "../pages/TodosPage";
import PostPage from "../pages/PostPage";
import NotFound from "../pages/NotFound";

export enum routesEnum {
	main = "/",
	search = "/search",
	todos = "/todos",
	posts = "/posts",
	notFound = "*",
}

interface IRoute {
	path: string;
	elem: React.FunctionComponent;
}

export const routes: Array<IRoute> = [
	{
		path: routesEnum.main,
		elem: Main,
	},
	{
		path: routesEnum.todos,
		elem: TodosPage,
	},
	{
		path: routesEnum.notFound,
		elem: NotFound,
	},
	{
		path: routesEnum.posts,
		elem: PostPage,
	},
];
