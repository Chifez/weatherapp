import React from "react";
import { NavLink } from "react-router-dom";

const Main = () => {
	return (
		<div className="main">
			<h2>Glad you made it to my weather application</h2>
			<h5>please turn on your location </h5>
			<NavLink to="/data">
				<button>go to weather app</button>
			</NavLink>
		</div>
	);
};

export default Main;
