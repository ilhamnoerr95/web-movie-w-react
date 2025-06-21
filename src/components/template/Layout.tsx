import { useState, type ChangeEvent } from "react";
import { Link, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import SearchInput from "../moleclues/SearchInput";
import { useSearchParams } from "react-router-dom";
import { useFilter, type Filter } from "../../store/filter.store";
import RadioButton, { type RadioOption } from "../atoms/Radio";
import Button from "../atoms/button";

const filterOpt: RadioOption[] = [
	{ label: "All", value: "all" },
	{ label: "Now Playing", value: "now_playing" },
	{ label: "Popular", value: "popular" },
	{ label: "Top Rated", value: "top_rated" },
	{ label: "Upcoming", value: "upcoming" },
];

const Layout = () => {
	const location = useLocation();
	const detailPage = location.pathname.includes("detail-page");
	const [searchParams, setSearchParams] = useSearchParams();
	const [search, setSearch] = useState<string>("");
	const page = searchParams.get("page") || "1";
	const filter = searchParams.get("filter") || "";
	const searchs = searchParams.get("search") || "";

	const [selected, setSelected] = useState<Filter>(filter as Filter);

	const { ...state } = useFilter();

	const searchClick = () => {
		setSearchParams({
			page,
			filter: "all",
			search,
		});
		state.updateSearch(search);
		state.updateFilter("all");
	};

	// const searchEnter = () => {
	// 	setSearchParams({
	// 		search,

	// 		page,
	// 		filter,
	// 	});
	// 	state.updateSearch(search);
	// };

	const changeSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	const onClickFilter = () => {
		setSearchParams({
			page,
			filter: selected,
			search: "",
		});
		state.updateFilter(selected);
		state.updateSearch("");
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
							defaultValue={searchs}
							onChange={changeSearch}
							onClick={searchClick}
						/>
					)}
				</div>
			</nav>
			<div
				className={`min-h-screen flex gap-4 ${
					detailPage ? "w-screen" : "w-7xl"
				} justify-self-center`}
				style={{ marginTop: detailPage ? 0 : "3rem" }}
			>
				{detailPage ? (
					""
				) : (
					<div
						className="w-2xs h-screen text-white"
						style={{
							borderRadius: "8px",
							padding: "1rem",
							backgroundColor: "#062F4A",
							height: "50vh",
						}}
					>
						<p
							className="font-bold text-2xl text-center"
							style={{ marginBottom: "1rem" }}
						>
							Filter
						</p>
						<RadioButton
							name="filter"
							options={filterOpt}
							selectedValue={selected}
							onChange={setSelected}
						/>
						<Button
							text="Submit Filter"
							className="filter-btn"
							onClick={onClickFilter}
						/>
					</div>
				)}
				<Outlet />
			</div>

			<footer className="text-center min-h-10 font-mediu text-black">
				@copyright by ilhamnrachman
			</footer>
			<style>
				{`
					.filter-btn {
							cursor: pointer;
                            background-color: #fff;
                            color: #062F4A;
                            padding: 0.5rem 1rem;
                            font-weight: 700;
                            border-radius: 4px;
							margin-top: 1rem;
							width: 100%;
					}
				`}
			</style>
		</>
	);
};

export default Layout;
