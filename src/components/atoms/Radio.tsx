import React, { type Dispatch, type SetStateAction } from "react";
import type { Filter } from "../../store/filter.store";

export interface RadioOption {
	label: string;
	value: Filter;
}

interface RadioButtonProps {
	name: string;
	options: RadioOption[];
	selectedValue: string;
	onChange: Dispatch<SetStateAction<Filter>>;
}

const RadioButton: React.FC<RadioButtonProps> = ({
	name,
	options,
	selectedValue,
	onChange,
}) => {
	return (
		<div className="flex flex-col gap-2">
			{options.map((option) => (
				<label
					key={option.value}
					className="inline-flex items-center gap-2 cursor-pointer"
				>
					<input
						type="radio"
						name={name}
						value={option.value}
						checked={selectedValue === option.value}
						onChange={() => onChange(option.value)}
						className="form-radio text-blue-600"
					/>
					<span>{option.label}</span>
				</label>
			))}
		</div>
	);
};

export default RadioButton;
