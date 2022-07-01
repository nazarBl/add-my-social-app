import React from 'react';

const Profile = () => {
	return (
		<div className="content">
			<img
				src="http://leedssportsawards.co.uk/wp-content/uploads/2015/10/6937164-beautiful-summer-wallpaper-hd.jpg"
				className="img"
			/>
			<div className="profile-info">
				<img
					src="https://findicons.com/files/icons/1072/face_avatars/300/a02.png"
					className="avatar"
				/>
				<span className="ava-info">
					Very danger person full of deathfull skills that makes u dead very
					fast, use his beard as undercover{' '}
				</span>
			</div>
			<p text-size="26">Posts</p>
			<div className="post">Post 1</div>
			<div className="post">Post 2</div>
			<div className="post">Post 3</div>
		</div>
	);
};

export default Profile;
