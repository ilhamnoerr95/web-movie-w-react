import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import Card from "../../components/organization/Card";
import Loader from "../../components/atoms/Loader";

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

	return (
		<div className="font-bold text-black w-screen">
			{isLoading ? (
				<div className="h-screen w-screen flex justify-center items-center text-black text-9xl">
					<Loader />
				</div>
			) : (
				<div className="header w-screen ">
					<div className="custom-bg w-7xl text-white flex justify-self-center gap-4">
						<Card
							img={movieDetail?.poster_path}
							title={movieDetail?.original_title}
							publish={movieDetail?.release_date}
							bgColor="bg-sky-900"
							txtColor="text-white"
						/>
						<div>
							<p className="text-4xl font-bold text-white">
								{movieDetail?.original_title}
							</p>
							<p className="text-sm font-normal">
								{movieDetail?.release_date} ({movieDetail?.original_language}){" "}
								{movieDetail?.genres.map(
									(genre: { id: string; name: string }) => genre?.name + ", ",
								)}
							</p>
							<p
								style={{ marginTop: "2rem" }}
								className="flex flex-col gap-2"
							>
								<i className="font-light">{movieDetail?.tagline}</i>
								<p className="text-sm font-bold">Overview</p>
								<p className="text-sm font-normal mt-2">
									{movieDetail?.overview}
								</p>
							</p>
							<p style={{ marginTop: "2rem" }}>
								<p className="font-bold text-sm">Director</p>
								<p className="font-normal text-xs">Ilham Nr</p>
							</p>
						</div>
					</div>
				</div>
			)}

			<style>
				{`
					.header {

						background:linear-gradient(to bottom right, rgba(10.5, 31.5, 31.5, 0.6), rgba(10.5, 31.5, 31.5, 0.84)), url(https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movieDetail?.backdrop_path}) no-repeat center center;
						background-size: cover;
						height: 55vh;
						position:relative;
						// width:100%;
    					background-position: top calc((50vw - 200px) - 900px) left;
						padding: 2rem 0;
					}
					.custom-bg {

					}
				`}
			</style>
		</div>
	);
};

export default Index;
