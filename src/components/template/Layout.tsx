import React, { useState, type ChangeEvent } from "react";
import { Link, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import SearchInput from "../moleclues/SearchInput";
import { useSearchParams } from "react-router-dom";
import { useFilter } from "../../store/filter.store";

const Layout = () => {
	const location = useLocation();
	const detailPage = location.pathname.includes("detail-page");
	const [searchParams, setSearchParams] = useSearchParams();
	const [search, setSearch] = useState<string>("");
	const page = searchParams.get("page") || "1";
	const sort = searchParams.get("sort") || "asc";
	const filter = searchParams.get("page") || "all";

	const { ...state } = useFilter();

	const searchClick = () => {
		setSearchParams({
			search,
			sort,
			page,
			filter,
		});
		state.updateSearch(search);
	};

	// const searchEnter = () => {
	// 	setSearchParams({
	// 		search,
	// 		sort,
	// 		page,
	// 		filter,
	// 	});
	// 	state.updateSearch(search);
	// };

	const changeSearch = (e: ChangeEvent<HTMLInputElement>) => {
		// state.updateSearch(e.target.value);
		setSearch(e.target.value);
	};

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
					{detailPage ? (
						""
					) : (
						<SearchInput
							// onKeyup={searchEnter}
							type="text"
							value={search}
							onChange={changeSearch}
							onClick={searchClick}
						/>
					)}
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
