import { todoReducerActionsCreators } from "./todosReducer/todoReducerActions";
import { postsReducerActionsCreators } from "./postsReducer/postsReducerActions";

export const allActions = {
	...todoReducerActionsCreators,
	...postsReducerActionsCreators,
};
