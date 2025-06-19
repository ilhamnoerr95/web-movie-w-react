import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Layout = () => {
	const location = useLocation();
	const detailPage = location.pathname.includes("detail-page");

	return (
		<>
			<nav
				className="bg-sky-950 text-white "
				style={{ padding: "1rem" }}
			>
				<div className="w-7xl flex justify-between justify-self-center">
					<Link
						to="/"
						className="text-2xl font-bold"
					>
						IamMovie
					</Link>
					<Link to="/">Home</Link>
				</div>
			</nav>
			<div
				className={`min-h-screen flex ${
					detailPage ? "w-screen" : "w-7xl"
				} justify-self-center`}
				style={{ marginTop: detailPage ? 0 : "3rem" }}
			>
				{detailPage ? "" : <div className="w-md">menu</div>}
				<Outlet />
			</div>

			<footer className="text-center min-h-10 font-medium">
				@copyright by ilhamnrachman
			</footer>
		</>
	);
};

export default Layout;
