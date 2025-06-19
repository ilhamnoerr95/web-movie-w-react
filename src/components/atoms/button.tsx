import React from "react";

type Etype = "button" | "submit" | "reset";

type Iprops = {
	text: string;
	type?: Etype;
	onClick: () => void;
};

const Button: React.FC<Iprops> = (props) => {
	const { text, type = "button", onClick } = props;

	return (
		<button
			type={type}
			onClick={onClick}
		>
			{text}
		</button>
	);
};

export default Button;
