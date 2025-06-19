interface IUrlPayload {
	urlApi: string;
	query: any;
}

export const urlUtils = (payload: IUrlPayload) => {
	const BaseUrl = import.meta.env.VITE_TMDB_API;

	const { urlApi, query } = payload;
	const params = query ? `?${new URLSearchParams({ ...(query as any) })}` : "";

	const url = `${BaseUrl}${urlApi}${params}`;

	return url;
};
