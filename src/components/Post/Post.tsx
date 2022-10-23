import React from "react";
import "./Post.css";

// типы
import { IPost } from "../../store/postsReducer/postTypes";

const Post = ({ id, title, body }: IPost) => {
	return (
		<div className="card cardModify my-3">
			<div className="card-body">
				<h5 className="card-title">
					<span style={{color: 'red'}}>{id} </span>
					{title}
				</h5>
				<p className="card-text">{body}</p>
				<a href="#" className="btn btn-danger">
					Delete
				</a>
			</div>
		</div>
	);
};

export default Post;
