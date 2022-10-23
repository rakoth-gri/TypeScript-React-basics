export enum postsReducerEnum {
	setPosts = "setPosts",
	delPost = "delPost",
	setPostsLoading = "setPostsLoading",
	setPostsError = "setPostsError",
	setPostsLength = "setPostsLength",
	setPostsPage = "setPostsPage",
}

export interface IPost {
	userId: number;
	id: number;
	title: string;
	body: string;
}

type setPostsAction = {
	type: postsReducerEnum.setPosts;
	payload: IPost[];
};

type delPostAction = {
	type: postsReducerEnum.delPost;
	payload: number;
};

type setPostsLoadingAction = {
	type: postsReducerEnum.setPostsLoading;
	payload: boolean;
};

type setPostsErrorAction = {
	type: postsReducerEnum.setPostsError;
	payload: string;
};

type setPostsLength = {
	type: postsReducerEnum.setPostsLength;
	payload: number;
};

type setPostsPage = {
	type: postsReducerEnum.setPostsPage;
	payload: number;
};

export type postsReducerActions = setPostsAction | delPostAction | setPostsLoadingAction | setPostsErrorAction | setPostsLength | setPostsPage;

export interface IPostsState {
	posts: IPost[];
	pagination: { pageNumber: number; limit: number; length: number | null };
	loading: boolean;
	error: null | string;
}
