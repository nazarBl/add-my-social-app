import React from 'react';
import style from './Post.module.css';

const Post = (props) => {
	return (
		<div className={style.post}>
			<div>
				<img
					id={style.avatar}
					src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
				/>
			</div>
			<div>{props.message}</div>
			<div>
				{props.likesQty} {'  '}
				<img
					id={style.likeImg}
					src="https://cdn-icons-png.flaticon.com/512/2107/2107956.png"
					alt=""
				/>
			</div>
		</div>
	);
};

export default Post;
