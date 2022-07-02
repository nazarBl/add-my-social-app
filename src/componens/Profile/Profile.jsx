import React from 'react';
import style from './Profile.module.css';
import Post from './Post_List/Post/Post';

const Profile = () => {
	return (
		<div className={style.content}>
			<img
				src="http://leedssportsawards.co.uk/wp-content/uploads/2015/10/6937164-beautiful-summer-wallpaper-hd.jpg"
				alt="Not found"
				className={style.img}
			/>
			<div className={style.profile_info}>
				<img
					src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
					className={style.avatar}
					alt="Not found"
				/>
				<span className={style.ava_info}>
					Here in the future will be insert some personal information given by
					user
				</span>
			</div>
			<p text-size="26">Posts</p>
			<Post message="Hey there, here's my first post" likesQty="10" />
			<Post
				message="Hey there, what are yours plans for this weekend?"
				likesQty="19"
			/>
		</div>
	);
};

export default Profile;
