import React from "react";

type Etype = "button" | "submit" | "reset";

type Iprops = {
	text: string | number;
	type?: Etype;
	onClick?: () => void;
	disabled?: boolean;
	className?: string;
	key?: any;
};

const Button: React.FC<Iprops> = (props) => {
	const {
		text,
		key,
		type = "button",
		onClick,
		disabled = false,
		className,
	} = props;

	return (
		<button
			key={key}
			className={className}
			disabled={disabled}
			type={type}
			onClick={onClick}
		>
			{text}
		</button>
	);
};

export default Button;
