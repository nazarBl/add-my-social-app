import React from 'react';
import style from './Profile.module.css';

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
					src="https://findicons.com/files/icons/1072/face_avatars/300/a02.png"
					className={style.avatar}
					alt="Not found"
				/>
				<span className={style.ava_info}>
					Very danger person full of deathfull skills that makes u dead very
					fast, use his beard as undercover{' '}
				</span>
			</div>
			<p text-size="26">Posts</p>
			<div className={style.post}>Post 1</div>
			<div className={style.post}>Post 2</div>
			<div className={style.post}>Post 3</div>
		</div>
	);
};

export default Profile;
