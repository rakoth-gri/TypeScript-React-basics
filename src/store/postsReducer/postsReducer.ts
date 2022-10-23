import { IPostsState, postsReducerActions, postsReducerEnum } from "./postTypes";

const initState = {
	posts: [],
	pagination: { pageNumber: 0, limit: 4, length: null },
	loading: false,
	error: null,
} as IPostsState;

export const postsReducer = (state = initState, action: postsReducerActions) => {
	switch (action.type) {
		case postsReducerEnum.setPosts:
			return {
				...state,
				posts: action.payload,
				loading: false,
			};
		case postsReducerEnum.delPost:
			return {
				...state,
				posts: state.posts.filter((post) => post.id !== action.payload),
			};
		case postsReducerEnum.setPostsLoading:
			return {
				...state,
				loading: action.payload,
			};
		case postsReducerEnum.setPostsError:
			return {
				...state,
				error: action.payload,
				loading: false,
			};
		case postsReducerEnum.setPostsLength:
			return {
				...state,
				pagination: { ...state.pagination, length: action.payload },
			};
		case postsReducerEnum.setPostsPage:
			return {
				...state,
				pagination: { ...state.pagination, pageNumber: action.payload },
			};
		default:
			return state;
	}
};
