import React from "react";
import type { InputPayload } from "../../types/components/Input.types";

const Input = (props: InputPayload) => {
	const {
		value,
		type = "text",
		onChange,
		disabled,
		placeholder,
		name,
		className = false,
		required = false,
		onKeyup,
		defaultValue,
	} = props;

	return (
		<input
			defaultValue={defaultValue || ""}
			value={value}
			onChange={(e) => onChange(e)}
			className={className || ""}
			placeholder={placeholder || ""}
			type={type}
			name={name || ""}
			disabled={disabled}
			required={required}
			onKeyUp={onKeyup}
		/>
	);
};

export default Input;
