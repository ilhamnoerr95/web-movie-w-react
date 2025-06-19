import React from "react";

const Card: React.FC<{
	title: string;
	img: string;
	publish: string;
	key: number;
	onClick: () => void;
}> = (props) => {
	const { title, img, publish, key, onClick } = props;
	const prefixUrl = "https://media.themoviedb.org/t/p/w220_and_h330_face/";
	return (
		<div
			onClick={onClick}
			key={key}
			className="
				cursor-pointer
				max-w-xs h-120 w-60 mx-auto
				bg-white rounded-md shadow-lg 
				overflow-hidden flex flex-col justify-between"
		>
			<div className="h-screen">
				<img
					style={{
						width: "100%",
						height: "100%",
					}}
					src={prefixUrl + img}
					alt="Image"
				/>
			</div>
			<div
				style={{ padding: "1rem" }}
				className="h-screen"
			>
				<p className="text-lg font-bold mb-2 text-gray-950">{title}</p>
				<p className="text-gray-600 font-medium text-xs">{publish}</p>
			</div>
		</div>
	);
};

export default Card;
