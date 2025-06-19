import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";

const Index = () => {
	const { id } = useParams();
	const { data: movieDetail, isLoading } = useQuery<any>({
		queryKey: [
			`/movie/${id}`,
			{
				language: "en-US",
			},
			"",
		],
	});

	return <div className="font-bold text-black w-screen">{id}</div>;
};

export default Index;
