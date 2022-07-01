import React from 'react';
import style from './Sidebar.module.css';

const Sidebar = () => {
	return (
		<nav className={style.sidebar}>
			<div>Profile</div>
			<div>Messages</div>
			<div>Music</div>
			<div>News</div>
			<div>Setings</div>
		</nav>
	);
};

export default Sidebar;
