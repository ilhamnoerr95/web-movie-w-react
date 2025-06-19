import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
	return (
		<>
			<nav className="min-h-26 bg-amber-50 text-center text-amber-950">
				<Link to="/">Home</Link>
				<Link to="/">Home</Link>
			</nav>
			<div className="min-h-210">
				<Outlet />
			</div>

			<footer className="text-center min-h-10 font-medium">
				@copyright by ilhamnrachman
			</footer>
		</>
	);
};

export default Layout;
