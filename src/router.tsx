import { BrowserRouter, Route, Routes } from "react-router-dom";

import Index from "./Pages/Front/index";

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" Component={Index} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
