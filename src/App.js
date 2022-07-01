import React from 'react';
import Header from './componens/Header'; //included Header.module.css
import Sidebar from './componens/Sidebar'; //included Sidebar.module.css
import Profile from './componens/Profile'; //included Profile.module.css
import './index.css'; //only css grid settings

const App = () => {
	return (
		<div className="container">
			<Header />
			<Sidebar />
			<Profile />
		</div>
	);
};

export default App;
