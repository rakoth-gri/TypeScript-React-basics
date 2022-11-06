import { todoReducerActionsCreators } from "./todosReducer/todoReducerActions";
import { postsReducerActionsCreators } from "./postsReducer/postsReducerActions";
import { toggleThemeActionCreator } from './themeReducer/themeReducerActions';

export const allActions = {
	...todoReducerActionsCreators,
	...postsReducerActionsCreators,
	toggleThemeActionCreator,
};
