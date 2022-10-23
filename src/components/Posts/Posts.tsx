import React, { memo, useMemo } from "react";
import "./Posts.css";
// хуки
import { useAppSelector } from "../../store/store";

// компоненты
import Post from "../Post/Post";
import Universal from "../Universal";

// типы
import { IPost } from "../../store/postsReducer/postTypes";

const Posts = memo(() => {
	const posts = useAppSelector((state) => state.postsReducer.posts);
	const { pageNumber, limit } = useAppSelector((state) => state.postsReducer.pagination);

	const PaginatedPosts = useMemo(() => {
		return posts.slice(pageNumber * limit, pageNumber * limit + limit);
	}, [posts, pageNumber]);

	return (
		<section>
			{PaginatedPosts && (
				<Universal elems={PaginatedPosts} cb={(elem: IPost) => <Post {...elem} key={elem.id} />} />
			)}
		</section>
	);
});

export default Posts;
