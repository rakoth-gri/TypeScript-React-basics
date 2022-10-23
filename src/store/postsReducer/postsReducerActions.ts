import axios from "axios";

// импортируем типы
import { postsReducerActions, postsReducerEnum, IPost } from "./postTypes";
import { AppDispatch } from "../store";

// константы
import { POST_BASE_URL } from "../../const/api";

// сервисы
import { ServerConnector } from "./../../services/serverConnector";

export const postsReducerActionsCreators = {
	setPosts: function (payload: IPost[]): postsReducerActions {
		return {
			type: postsReducerEnum.setPosts,
			payload,
		};
	},
	delPosts: function (payload: number): postsReducerActions {
		return {
			type: postsReducerEnum.delPost,
			payload,
		};
	},
	setPostsLoading: function (payload: boolean): postsReducerActions {
		return {
			type: postsReducerEnum.setPostsLoading,
			payload,
		};
	},
	setPostsError: function (payload: string): postsReducerActions {
		return {
			type: postsReducerEnum.setPostsError,
			payload,
		};
	},
	setPostsLength: function (payload: number): postsReducerActions {
		return {
			type: postsReducerEnum.setPostsLength,
			payload,
		};
	},
	setPostsPage: function (payload: number): postsReducerActions {               
		return {
			type: postsReducerEnum.setPostsPage,
			payload,
		};
	},

	// асинхронные экшены
	fetchingPosts: () => async (dispatch: AppDispatch) => {
		try {
			dispatch(postsReducerActionsCreators.setPostsLoading(true));
			setTimeout(async () => {
				let response = await ServerConnector.fetchPosts();
				dispatch(postsReducerActionsCreators.setPosts(response.data));
				dispatch(postsReducerActionsCreators.setPostsLength(response.data.length));
			}, 300);
		} catch (error: any) {
			dispatch(postsReducerActionsCreators.setPostsError(error.message));
		}
	},
};
