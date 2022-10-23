import React, { useEffect } from "react";
import "./PostPage.css";
// хуки
import { useAppSelector } from "../../store/store";
import { useActionCreators } from "../../hooks/bindActions";
// компоненты
import Posts from "../../components/Posts";
import Pagination from "../../components/Pagination";
import Loading from "../../components/Loading";

const PostPage: React.FC = () => {
	const { fetchingPosts, setPostsPage } = useActionCreators();
	const { limit, length, pageNumber } = useAppSelector((state) => state.postsReducer.pagination);
	const loading = useAppSelector((state) => state.postsReducer.loading);

	useEffect(() => {
		fetchingPosts();
	}, []);

	return (
		<main>
			<h1> We're awaiting posts here...</h1>
			<Loading loading={loading}/>
			<Posts />
			{length && <Pagination limit={limit} length={length} setPage={setPostsPage}/>}
		</main>
	);
};

export default PostPage;
