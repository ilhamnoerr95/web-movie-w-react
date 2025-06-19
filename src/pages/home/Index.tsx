import React from "react";
import Card from "../../components/organization/Card";
import { useQuery } from "@tanstack/react-query";
const Index = () => {
	const { data: movieData, isLoading } = useQuery<any>({
		queryKey: [
			"/discover/movie",
			{
				page: 1,
				include_adult: false,
				include_vide: false,
				language: "en-US",
			},
			"",
		],
	});
	console.log(movieData);
	return (
		<div className="font-extrabold w-screen text-shadow-cyan-300 text-6xl ">
			<div className="flex flex-wrap gap-6">
				{movieData?.results.map((movie, index: number) => (
					<Card
						key={index}
						title={movie.title}
						publish={movie.release_date}
						img={movie.poster_path}
					/>
				))}
			</div>
		</div>
	);
};

export default Index;
