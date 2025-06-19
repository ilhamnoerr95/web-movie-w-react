import React from "react";
import Button from "../atoms/button";

type PaginationProps = {
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
	currentPage,
	totalPages,
	onPageChange,
}) => {
	const generatePages = () => {
		const pages: (number | string)[] = [];

		if (totalPages <= 7) {
			for (let i = 1; i <= totalPages; i++) pages.push(i);
		} else {
			pages.push(1);
			if (currentPage > 4) pages.push("...");

			const start = Math.max(2, currentPage - 1);
			const end = Math.min(totalPages - 1, currentPage + 1);

			for (let i = start; i <= end; i++) pages.push(i);

			if (currentPage < totalPages - 3) pages.push("...");
			pages.push(totalPages);
		}

		return pages;
	};

	const pages = generatePages();

	return (
		<div
			style={{ marginTop: "2rem", fontSize: "1rem" }}
			className="flex justify-center gap-4 mt-4 space-x-2 text-black text-xs"
		>
			<Button
				text={"prev"}
				onClick={() => onPageChange((currentPage - 1) as number)}
				disabled={currentPage === 1}
				className="cursor-pointer px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
			/>

			{pages.map((page, index) =>
				typeof page === "string" ? (
					<span
						key={index}
						className="px-3 py-1 text-gray-500 select-none"
					>
						...
					</span>
				) : (
					<Button
						text={page}
						key={index}
						onClick={() => onPageChange(page)}
						className={`cursor-pointer px-3 py-1 rounded ${
							currentPage === page
								? "bg-blue-500 text-white"
								: "bg-gray-200 hover:bg-gray-300"
						}`}
					/>
				),
			)}
			<Button
				text="next"
				onClick={() => onPageChange(currentPage + 1)}
				disabled={currentPage === totalPages}
				className="cursor-pointer px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
			/>
		</div>
	);
};

export default Pagination;
