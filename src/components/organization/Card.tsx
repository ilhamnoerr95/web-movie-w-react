import React from "react";

const Card: React.FC<{
	title: string;
	img: string;
	publish: string;
	key?: number;
	onClick?: () => void;
	bgColor?: string;
	txtColor?: string;
}> = (props) => {
	const {
		title,
		img,
		publish,
		key,
		onClick,
		bgColor = "bg-white",
		txtColor = "text-gray-950",
	} = props;
	const prefixUrl = "https://media.themoviedb.org/t/p/w220_and_h330_face/";
	return (
		<div
			onClick={onClick}
			key={key}
			className={`
				cursor-pointer
				max-w-xs h-120 w-60 mx-auto
				${bgColor} rounded-md shadow-lg 
				overflow-hidden flex flex-col justify-between`}
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
				className={`h-screen ${txtColor}`}
			>
				<p className="text-lg font-bold mb-2 ">{title}</p>
				<p className="font-medium text-xs">{publish}</p>
			</div>
		</div>
	);
};

export default Card;
