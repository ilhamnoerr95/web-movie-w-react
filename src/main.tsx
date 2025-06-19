import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { defaultQuery } from "./hooks/default.queries.ts";

const token = import.meta.env.VITE_TOKEN;
const queryClient = new QueryClient({
	defaultOptions: {
		// With SSR, we usually want to set some default staleTime
		// above 0 to avoid refetching immediately on the client

		queries: {
			...defaultQuery({
				authorization: `Bearer ${token}`,
			}),
			staleTime: 60 * 1000,
			retry: 0,
		},
	},
});

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<QueryClientProvider client={queryClient}>
				<App />
				<ReactQueryDevtools initialIsOpen={false} />
			</QueryClientProvider>
		</BrowserRouter>
	</StrictMode>,
);
