import React from "react";
import Input from "../atoms/Input";
import type { ISearchPayload } from "../../types/components/Input.types";
import Button from "../atoms/button";

const SearchInput = (props: ISearchPayload) => {
	const { onChange, onClick, value, onKeyup, defaultValue } = props;
	return (
		<div className="flex gap-4">
			<Input
				type="text"
				name="search"
				placeholder="Search"
				onChange={onChange}
				onKeyup={onKeyup}
				value={value}
				defaultValue={defaultValue}
				className="input-search"
			/>
			<Button
				text="Search"
				onClick={onClick}
				className="btn-search"
			/>
			<style>
				{`      
                        .input-search {
                            background-color: #fff;
                            border-radius: 4px;
                            color: #062F4A;
                            padding:0.5rem;
                            font-weight: 600;

                        }
                        .input-search::placeholder {
                            color: #062F4A;
                            padding:0.5rem;
                            font-weight: 600;
                        }

                        .btn-search {
                            cursor: pointer;
                            background-color: #fff;
                            color: #062F4A;
                            padding: 0.5rem 1rem;
                            font-weight: 700;
                            border-radius:4px;
                        }
                        `}
			</style>
		</div>
	);
};

export default SearchInput;
