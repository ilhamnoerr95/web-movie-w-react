import React from "react";
import Card from "../../components/organization/Card";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useSearchParams } from "react-router-dom";
import Pagination from "../../components/organization/Pagination";
import Loader from "../../components/atoms/Loader";
import { useFilter } from "../../store/filter.store";

const Index = () => {
	const navigate = useNavigate();
	const [searchParams, setSearchParams] = useSearchParams();
	const page = searchParams.get("page") || "1";

	const { ...state } = useFilter();

	React.useEffect(() => {
		const currentParams = Object.fromEntries(searchParams.entries());

		const defaultParams: Record<string, string> = {
			page: "1",
			sort: "asc",
			filter: "all",
			search: "",
		};

		// Cek dan gabungkan hanya jika param belum ada
		const newParams = { ...defaultParams, ...currentParams };

		// Jika ada param yang hilang, update URL
		const missingParams = Object.keys(defaultParams).some(
			(key) => !searchParams.has(key),
		);

		if (missingParams) {
			setSearchParams(newParams, { replace: true });
		}
		// Sinkronkan ke Zustand store
		state.updatePage(newParams.page);
		state.updateSort(newParams.sort as "asc" | "desc");
		state.updateFilter(newParams.filter);
		state.updateSearch(newParams.search);
	}, []);

	// search data
	const { data: dataSearch, isLoading: loadingSearch } = useQuery<any>({
		queryKey: [
			"/search/movie",
			{
				page,
				include_adult: false,
				include_vide: false,
				language: "en-US",
				query: state.search,
			},
			"",
		],
		enabled: !!state.search,
	});

	// get all data
	const {
		data: movieData,
		isLoading: loadingMovies,
		status: statusMovie,
	} = useQuery<any>({
		queryKey: [
			"/discover/movie",
			{
				page,
				include_adult: false,
				include_vide: false,
				language: "en-US",
			},
			"",
		],
		enabled: !state.search,
	});

	/**
	 * change pagination
	 */
	const handlePagination = (currentPage: number | bigint | any) => {
		setSearchParams({
			page: currentPage,
			sort: state.search,
			filter: state.filter,
			search: state.search,
		});
		state.updatePage(currentPage);
	};
	console.log(statusMovie);
	const isLoading = loadingMovies || loadingSearch;
	const dataToRender = state.search ? dataSearch?.results : movieData?.results;
	const totalPages = state.search
		? dataSearch?.total_pages
		: movieData?.total_pages;

	return (
		<div className="font-extrabold w-screen text-shadow-cyan-300 text-6xl">
			{isLoading ? (
				<div className="h-screen w-screen flex justify-center items-center text-black text-9xl">
					<Loader />
				</div>
			) : (
				<>
					<div className="flex flex-wrap gap-4">
						{dataToRender?.map((movie: any, index: number) => (
							<Card
								onClick={() => navigate(`/detail-page/${movie.id}`)}
								key={index}
								title={movie.title}
								publish={movie.release_date}
								img={movie.poster_path}
							/>
						))}
					</div>
					<Pagination
						totalPages={totalPages}
						currentPage={parseInt(page)}
						onPageChange={handlePagination}
					/>
				</>
			)}
		</div>
	);
};

export default Index;
