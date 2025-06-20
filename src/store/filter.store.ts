import { create } from "zustand";

type Sort = "asc" | "desc";

interface IFilter {
	page: string | number;
	sort?: Sort;
	filter: string;
	search: string;
	updatePage: (page: string | number) => void;
	updateSort: (sort?: Sort) => void;
	updateFilter: (filter: string) => void;
	updateSearch: (search: string) => void;
}

export const useFilter = create<IFilter>((set) => ({
	page: 1,
	sort: "asc",
	filter: "all",
	search: "",
	updatePage: (page) => set((s) => ({ ...s, page })),
	updateSort: (sort) => set((s) => ({ ...s, sort })),
	updateFilter: (filter) => set((s) => ({ ...s, filter })),
	updateSearch: (search) => set((s) => ({ ...s, search })),
}));
