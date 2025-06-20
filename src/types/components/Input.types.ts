import type { ChangeEvent } from "react";

export type TypeInput =
	| "text"
	| "number"
	| "checkbox"
	| "radio"
	| "date"
	| "email"
	| "password";

export type InputPayload = {
	value: string;
	type?: TypeInput;
	onChange: (value: ChangeEvent<HTMLInputElement>) => void;
	onKeyup?: () => void;
	name?: string;
	className?: string;
	placeholder?: string;
	disabled?: boolean;
	required?: boolean;
};

export interface ISearchPayload extends InputPayload {
	onClick: () => void;
}
