import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/template/Layout";
import Home from "../pages/home/Index";
import DetailPage from "../pages/detail-page/Index";
import PageNotFound from "../pages/NotFound";

const Index = () => {
	return (
		<Routes>
			<Route
				path="/"
				element={<Layout />}
			>
				<Route
					index
					element={
						<Suspense fallback={<div>Loading...</div>}>
							<Home />
						</Suspense>
					}
				/>
				<Route
					path="detail-page/:id"
					element={
						<Suspense fallback={<div>Loading...</div>}>
							<DetailPage />
						</Suspense>
					}
				/>

				<Route
					path="*"
					element={<PageNotFound />}
				/>
			</Route>
		</Routes>
	);
};

export default Index;
