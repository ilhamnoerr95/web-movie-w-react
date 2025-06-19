import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
	return (
		<>
			<nav>
				<Link to="/">Home</Link>
			</nav>

			<Outlet />

			<footer>@copyright by ilhamnrachman</footer>
		</>
	);
};

export default Layout;
