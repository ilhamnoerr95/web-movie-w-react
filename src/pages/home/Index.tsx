import React from "react";
import Card from "../../components/organization/Card";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import Pagination from "../../components/organization/Pagination";
import Loader from "../../components/atoms/Loader";

const Index = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const page = searchParams.get("page") || "1";

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
	}, []);

	const { data: movieData, isLoading } = useQuery<any>({
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
	});

	/**
	 * change pagination
	 */
	const handlePagination = (currentPage: number | bigint | any) => {
		setSearchParams({ page: currentPage });
	};

	return (
		<div className="font-extrabold w-screen text-shadow-cyan-300 text-6xl ">
			<div className="flex flex-wrap gap-6">
				{isLoading ? (
					<div className="h-screen w-screen flex justify-center items-center text-black text-9xl">
						<Loader />
					</div>
				) : (
					movieData?.results.map((movie: any, index: number) => (
						<Card
							key={index}
							title={movie.title}
							publish={movie.release_date}
							img={movie.poster_path}
						/>
					))
				)}
			</div>
			<Pagination
				totalPages={movieData?.total_pages}
				currentPage={parseInt(page)}
				onPageChange={handlePagination}
			/>
		</div>
	);
};

export default Index;
