interface IFetcher {
	method: "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
	body?: any;
	url?: string;
	// queryKey default dari react query, jadi fungsi di dalam react query
	// masih bisa digunakan tanpa melempar parameter di dalam fungsinya
	queryKey?: string[];
	apiVersion?: string;
	authorization?: string;
	contentType?: string;
}

// utils
import { urlUtils } from "./url.utils";

export const DefaultFetcher = async (payload: IFetcher) => {
	try {
		// 2 optional jika payload url ada jika tidak ambil dari query keys
		let URL: string = "";

		if (payload.url) {
			// ini pilihan apabila tidak menggunakan queryKey untuk url atau params
			URL = payload.url;
		} else {
			URL = urlUtils({
				query: payload.queryKey?.[1],
				urlApi: payload.queryKey?.[0] as string,
			});
		}

		const OPTION: RequestInit = {
			method: payload.method,
			headers: {
				...(!payload.contentType && {
					"Content-Type": "application/json",
				}),
				...(payload.authorization && {
					Authorization: payload.authorization,
				}),
			},
			...(payload.body && {
				body: payload.contentType ? payload.body : JSON.stringify(payload.body),
			}),
		};

		const response = await fetch(URL, OPTION);
		const result = await response.json();

		if (!response.ok) {
			Promise.reject(response);
		}

		return result;
	} catch (error) {
		Promise.reject(error);
	}
};
